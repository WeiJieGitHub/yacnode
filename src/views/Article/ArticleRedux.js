import { getArticleContent } from 'utils/request';

export const initialState = {
  article: {
    id: '',
    author_id: '',
    tab: '',
    content: '',
    author: {
      avatar_url: '',
      loginname: '',
    },
    replies: [
      {
        author: {
          avatar_url: '',
          loginname: '',
        },
        content: '',
        id: '',
      },
    ],
  },
  loadState: 'READY',
};

const FETCH_ARTICLE_CONTENT = 'FETCH_ARTICLE_CONTENT';
const FETCH_ARTICLE_CONTENT_SUCCESS = 'FETCH_ARTICLE_CONTENT_SUCCESS';
const FETCH_ARTICLE_CONTENT_FAIL = 'FETCH_ARTICLE_CONTENT_FAIL';

export const fetchArticleContent = params => (dispatch) => {
  dispatch({ type: FETCH_ARTICLE_CONTENT });
  return getArticleContent(params).then(response => response.json()).then((response) => {
    dispatch({ type: FETCH_ARTICLE_CONTENT_SUCCESS, payload: response.data });
  }).catch((error) => {
    dispatch({ type: FETCH_ARTICLE_CONTENT_FAIL, error });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_CONTENT:
      return Object.assign({}, state, { loadState: 'LOADING' });
    case FETCH_ARTICLE_CONTENT_SUCCESS:
      return Object.assign({}, state, { loadState: 'READY', article: action.payload });
    case FETCH_ARTICLE_CONTENT_FAIL:
      return Object.assign({}, state, { loadState: 'FAIL' });
    default:
      return state;
  }
};
