import HeaderReducer from 'components/SideBar/SideBarRedux';
import HomeReducer from 'views/Home/redux';

export default {
  index: HomeReducer,
  sidebar: HeaderReducer,
};
