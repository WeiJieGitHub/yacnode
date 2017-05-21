import { getAskTopics } from 'utils/request';

const initialState = {
  topics: [],
  loadState: 'READY',
};

const FETCH_ASK_TOPICS = 'FETCH_ASK_TOPICS';
const FETCH_ASK_TOPICS_SUCCESS = 'FETCH_ASK_TOPICS_SUCCESS';
const FETCH_ASK_TOPICS_FAIL = 'FETCH_ASK_TOPICS_FAIL';

export const fetchAskTopics = params => (dispatch) => {
  dispatch({ type: FETCH_ASK_TOPICS });
  getAskTopics(params).then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_ASK_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_ASK_TOPICS_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASK_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_ASK_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_ASK_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
