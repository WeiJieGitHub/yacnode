import TopicsView from 'views/Topics/Topics';
import RequestManager from 'components/TopicsRequestManager/TopicsRequestManager';
import {
  getHomeTopics,
  getGoodTopics,
  getAskTopics,
  getJobTopics,
  getShareTopics,
} from 'utils/request';

export default [
  {
    path: '/home',
    component: RequestManager(TopicsView, getHomeTopics),
    title: '全部',
    name: 'home',
  },
  {
    path: '/good',
    component: RequestManager(TopicsView, getGoodTopics),
    title: '精华',
    name: 'good',
  },
  {
    path: '/share',
    component: RequestManager(TopicsView, getShareTopics),
    title: '分享',
    name: 'share',
  },
  {
    path: '/ask',
    component: RequestManager(TopicsView, getAskTopics),
    title: '问答',
    name: 'ask',
  },
  {
    path: '/job',
    component: RequestManager(TopicsView, getJobTopics),
    title: '招聘',
    name: 'job',
  },
];
