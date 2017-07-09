const defaultOptions = { cache: {}, limit: 50, length: 0 };
export class CreateHistoryStack {
  constructor(options = defaultOptions) {
    this.cache = options.cache;
    this.limit = options.limit;
    this.length = options.length;
  }

  getEarliestKey() {
    const keys = Object.keys(this.cache);
    if (keys.length === 0) return null;
    let targetKey = keys[0];
    keys.forEach((key) => {
      if (this.cache[targetKey].timestamp > this.cache[key].timestamp) {
        targetKey = key;
      }
    });
    return targetKey;
  }

  put(path, state) {
    const item = this.cache[path];
    const limit = this.limit;
    const length = this.length;
    const newCacheItem = {
      state,
      timestamp: new Date(),
    };
    switch (true) {
      case item === undefined && length < limit:
        this.cache[path] = newCacheItem;
        this.length += 1;
        break;
      case item === undefined && length === limit:
        delete this.cache[this.getEarliestKey()];
        this.cache[path] = newCacheItem;
        break;
      case item !== undefined:
        this.cache[path] = newCacheItem;
        break;
      default:
        break;
    }
    return this;
  }

  get(path) {
    const item = this.cache[path];
    if (item === undefined) return null;
    return item.state;
  }

  saveToLocal(key) {
    const cacheString = JSON.stringify({
      limit: this.limit,
      cache: this.cache,
      length: this.length,
    });
    localStorage.setItem(key, cacheString);
  }
}

const HistoryStack = (() => {
  let instance;
  return (options) => {
    if (instance === undefined) {
      instance = new CreateHistoryStack(options);
    }
    return instance;
  };
})();

const HISTORY_CACHE_PUSH = 'HISTORY_CACHE_PUSH';
const HISTORY_CACHE_POP = 'HISTORY_CACHE_POP';
const HISTORY_CACHE_SAVE_TO_LOCAL = 'HISTORY_CACHE_SAVE_TO_LOCAL';

export function push(path) {
  return {
    type: HISTORY_CACHE_PUSH,
    payload: {
      path,
    },
  };
}

export function pop(path) {
  return {
    type: HISTORY_CACHE_POP,
    payload: {
      path,
    },
  };
}

export function saveToLocal(key = 'historyCache') {
  return {
    type: HISTORY_CACHE_SAVE_TO_LOCAL,
    payload: {
      key,
    },
  };
}

export default (options = defaultOptions) => {
  const cache = new HistoryStack(options);
  let store = null;
  return reducer => (state, action) => {
    switch (action.type) {
      case HISTORY_CACHE_POP:
        store = cache.get(action.payload.path);
        if (store !== null) {
          return store;
        }
        break;
      case HISTORY_CACHE_PUSH:
        cache.put(action.payload.path, state);
        break;
      case HISTORY_CACHE_SAVE_TO_LOCAL:
        cache.saveToLocal(action.payload.key);
        break;
      default:
        break;
    }
    return Object.assign(reducer(state, action));
  };
};
