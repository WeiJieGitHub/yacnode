const initialState = {
  topics: [],
  loadState: 'READY',
};

const FETCH_TOPICS = 'FETCH_TOPICS';
const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
const FETCH_TOPICS_FAIL = 'FETCH_TOPICS_FAIL';

export const fetchTopics = (request, params) => (dispatch) => {
  dispatch({ type: FETCH_TOPICS });
  request(params).then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_TOPICS_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
