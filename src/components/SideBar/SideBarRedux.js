const initialState = {
  sideBarOpen: false,
};

const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

export function openSideBar() {
  return {
    type: OPEN_SIDEBAR,
    payload: true,
  };
}

export function closeSideBar() {
  return {
    type: CLOSE_SIDEBAR,
    payload: false,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { sideBarOpen: action.payload };
    case CLOSE_SIDEBAR:
      return { sideBarOpen: action.payload };
    default:
      return state;
  }
};
