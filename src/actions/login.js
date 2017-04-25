import {
  UPDATE_LOGIN_ERROR,
  UPDATE_USER,
  UPDATE_IS_SNACKBAR_SHOW,
  CLOSE_LOGIN_DIALOG,
} from '../constants/actionTypes';

function loginStart() {
  return {
    type: UPDATE_IS_SNACKBAR_SHOW,
    payload: {
      isShow: true,
      msg: 'We are logging you in. Please wait...',
    },
  }
}

function loginEnd() {
  return {
    type: UPDATE_IS_SNACKBAR_SHOW,
    payload: {
      isShow: true,
      msg: 'Log in success!',
    },
  }
}

function loginFail(data) {
  return {
    type: UPDATE_LOGIN_ERROR,
    payload: data,
  };
}

function loginSuccess(payload) {
  return {
    type: UPDATE_USER,
    payload,
  };
}

export default function putLogin(loginInfo) {
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  function parseJSON(response) {
    return response.json()
  }

  return (dispatch, getState) => {
    dispatch(loginStart());
    fetch('https://commandp-lbs-backend.herokuapp.com/api/v1/login', {
      body: JSON.stringify(loginInfo),
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
    }).then(checkStatus).then(parseJSON).then((data) => {
      dispatch(loginSuccess(data));
      dispatch(loginEnd());
    }).catch((error) => {
      dispatch(loginFail(error));
    })
  };
}

