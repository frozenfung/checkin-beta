import {
  UPDATE_ACCOUNT_DIALOG_ACTIVE_TAB,
  UPDATE_USER
} from '../constants/actionTypes';

const initState = {
  accountDialogActiveTab: 'Login',
  logged: false,
  userInfo: {
    access_token: '',
    expires_at: '',
    user: {
      id: 0,
      username: '',
      email: '',
      display_name: '',
      avatar: null,
    },
  },
};

export default function appState(state = initState, action) {
  switch(action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, {
        userInfo: action.payload,
        logged: true,
      });
    case UPDATE_ACCOUNT_DIALOG_ACTIVE_TAB:
      return Object.assign({}, state, {
        accountDialogActiveTab: action.payload.activeTab,
      });
    default:
      return state;
  }
}
