import { getShareTopics } from 'utils/request';

const initialState = {
  topics: [],
  loadState: 'READY',
};

const FETCH_SHARE_TOPICS = 'FETCH_SHARE_TOPICS';
const FETCH_SHARE_TOPICS_SUCCESS = 'FETCH_SHARE_TOPICS_SUCCESS';
const FETCH_SHARE_TOPICS_FAIL = 'FETCH_SHARE_TOPICS_FAIL';

export const fetchShareTopics = params => (dispatch) => {
  dispatch({ type: FETCH_SHARE_TOPICS });
  getShareTopics(params).then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_SHARE_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_SHARE_TOPICS_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHARE_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_SHARE_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_SHARE_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
