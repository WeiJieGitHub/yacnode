import HeaderReducer from 'components/SideBar/SideBarRedux';
import TopicsReducer from 'views/Topics/TopicsRedux';
import ArticleReducer from 'views/Article/ArticleRedux';

export default {
  sidebar: HeaderReducer,
  article: ArticleReducer,
  topics: TopicsReducer,
};
