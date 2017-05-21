import { getGoodTopics } from 'utils/request';

const initialState = {
  topics: [],
  loadState: 'READY',
};

const FETCH_GOOD_TOPICS = 'FETCH_GOOD_TOPICS';
const FETCH_GOOD_TOPICS_SUCCESS = 'FETCH_GOOD_TOPICS_SUCCESS';
const FETCH_GOOD_TOPICS_FAIL = 'FETCH_GOOD_TOPICS_FAIL';

export const fetchGoodTopics = params => (dispatch) => {
  dispatch({ type: FETCH_GOOD_TOPICS });
  getGoodTopics(params).then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_GOOD_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_GOOD_TOPICS_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOD_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_GOOD_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_GOOD_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
