import {
  UPDATE_ACCOUNT_DIALOG_ACTIVE_TAB,
  UPDATE_LOGIN_FORM,
  UPDATE_LOGIN_ERROR,
  UPDATE_USER,
  DELETE_USER,
  CLOSE_LOGIN_DIALOG,
  OPEN_LOGIN_DIALOG,
} from '../constants/actionTypes';

import putLogin from './login';

function postRegister(registerInfo) {

}

export function logout() {
  return {
    type: DELETE_USER,
    payload: {
      isShow: true,
      msg: 'Logged out successfully!',
    },
  };
}

export function login() {
  return (dispatch, getState) => {
    const action = getState().appState.accountDialogActiveTab;

    if (action === 'Login') {
      return dispatch(putLogin(getState().login));
    } else {
      return dispatch(postRegister(getState().register));
    }
  };
}

export function updateLoginForm(payload) {
  return {
    type: UPDATE_LOGIN_FORM,
    payload,
  };
}

export function updateAccountDialogActiveTab(activeTab) {
  return {
    type: UPDATE_ACCOUNT_DIALOG_ACTIVE_TAB,
    payload: { activeTab, },
  };
}

export function closeLoginDialog() {
  return {
    type: CLOSE_LOGIN_DIALOG,
  };
}

export function openLoginDialog() {
  return {
    type: OPEN_LOGIN_DIALOG,
  };
}
