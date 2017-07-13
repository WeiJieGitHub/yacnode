const initialState = {
  topics: [],
  loadState: 'READY',
  scrollTop: 0,
};

const FETCH_TOPICS = 'FETCH_TOPICS';
const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
const FETCH_TOPICS_FAIL = 'FETCH_TOPICS_FAIL';
const SAVE_TOPICS_SCROLL_TOP = 'SAVE_TOPICS_SCROLL_TOP';

export const fetchTopics = (request, params) => (dispatch) => {
  dispatch({ type: FETCH_TOPICS });
  return request(params).then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_TOPICS_FAIL, error });
  });
};

export const saveScrollTop = value => ({ type: SAVE_TOPICS_SCROLL_TOP, payload: value });

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING', topics: [], scrollTop: 0 });
    case FETCH_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL', topics: [] });
    case SAVE_TOPICS_SCROLL_TOP:
      return Object.assign({}, state, { scrollTop: action.payload });
    default:
      return state;
  }
};
