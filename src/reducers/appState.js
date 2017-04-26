import {
  UPDATE_ACCOUNT_DIALOG_ACTIVE_TAB,
  UPDATE_USER,
  DELETE_USER,
  CLOSE_LOGIN_DIALOG,
  OPEN_LOGIN_DIALOG,
  UPDATE_IS_SNACKBAR_SHOW,
} from '../constants/actionTypes';

const initUserInfo = {
  access_token: '',
  expires_at: '',
  user: {
    id: 0,
    username: '',
    email: '',
    display_name: '',
    avatar: null,
  },
};

const initState = {
  accountDialogActiveTab: 'Login',
  logged: false,
  isLoginOpen: true,
  isSnackbarShow: false,
  snackbarMsg: '',
  userInfo: initUserInfo,
};

export default function appState(state = initState, action) {
  switch(action.type) {
    case UPDATE_IS_SNACKBAR_SHOW:
      return Object.assign({}, state, {
        isSnackbarShow: action.payload.isShow,
        snackbarMsg: action.payload.msg,
      });
    case CLOSE_LOGIN_DIALOG:
      return Object.assign({}, state, {
        isLoginOpen: false,
      });
    case OPEN_LOGIN_DIALOG:
      return Object.assign({}, state, {
        isLoginOpen: true,
      });
    case UPDATE_USER:
      return Object.assign({}, state, {
        userInfo: action.payload,
        logged: true,
        isLoginOpen: false,
      });
    case DELETE_USER:
      return Object.assign({}, state, {
        userInfo: initUserInfo,
        logged: false,
        isSnackbarShow: action.payload.isShow,
        snackbarMsg: action.payload.msg,
      });
    case UPDATE_ACCOUNT_DIALOG_ACTIVE_TAB:
      return Object.assign({}, state, {
        accountDialogActiveTab: action.payload.activeTab,
      });
    default:
      return state;
  }
}
