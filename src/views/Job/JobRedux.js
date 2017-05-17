import { getJobTopics } from 'utils/request';

const initialState = {
  topics: [],
  loadState: 'READY',
};

const FETCH_JOB_TOPICS = 'FETCH_JOB_TOPICS';
const FETCH_JOB_TOPICS_SUCCESS = 'FETCH_JOB_TOPICS_SUCCESS';
const FETCH_JOB_TOPICS_FAIL = 'FETCH_JOB_TOPICS_FAIL';

export const fetchJobTopics = () => (dispatch) => {
  dispatch({ type: FETCH_JOB_TOPICS });
  getJobTopics().then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_JOB_TOPICS_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_JOB_TOPICS_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_TOPICS:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_JOB_TOPICS_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', topics: action.payload });
    case FETCH_JOB_TOPICS_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
