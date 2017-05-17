import { getHomeTopics } from 'utils/request';

const initialState = {
  topics: [],
  loadState: 'READY',
};

const FETCH_HOME_TOPICS = 'FETCH_HOME_TOPICS';
const FETCH_HOME_TOPICS_SUCCESS = 'FETCH_HOME_TOPICS_SUCCESS';
const FETCH_HOME_TOPICS_FAIL = 'FETCH_HOME_TOPICS_FAIL';

export const fetchHomeTopics = () => (dispatch) => {
  dispatch({ type: FETCH_HOME_TOPICS });
  getHomeTopics().then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_HOME_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_HOME_TOPICS_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_HOME_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_HOME_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
