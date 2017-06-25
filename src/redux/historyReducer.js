export class HistoryStack {
  constructor(cache = {}, limit = 50, length = 0) {
    this.cache = cache;
    this.limit = limit;
    this.length = length;
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
}

const HISTORY_PUSH = 'HISTORY_PUSH';
const HISTORY_POP = 'HISTORY_POP';

export function push(path) {
  return {
    type: HISTORY_PUSH,
    payload: {
      path,
    },
  };
}

export function pop(path) {
  return {
    type: HISTORY_POP,
    payload: {
      path,
    },
  };
}

function historyReducer(reducer) {
  const cache = new HistoryStack();
  let store = null;
  return (state, action) => {
    switch (action.type) {
      case HISTORY_POP:
        store = cache.get(action.payload.path);
        if (store !== null) {
          return store;
        }
        break;
      case HISTORY_PUSH:
        cache.put(action.payload.path, state);
        break;
      default:
        break;
    }
    return reducer(state, action);
  };
}

export default historyReducer;
