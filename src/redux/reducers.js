import HeaderReducer from 'components/SideBar/SideBarRedux';
import HomeReducer from 'views/Home/HomeRedux';
import GoodReducer from 'views/Good/GoodRedux';
import AskReducer from 'views/Ask/AskRedux';
import JobReducer from 'views/Job/JobRedux';
import ShareReducer from 'views/Share/ShareRedux';

export default {
  ask: AskReducer,
  home: HomeReducer,
  good: GoodReducer,
  job: JobReducer,
  share: ShareReducer,
  sidebar: HeaderReducer,
};
