import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../../src/actions/actions';
import * as types from '../../src/constants/actionTypes';
import putLogin from '../../src/actions/login';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares)

describe('actions/actions', () => {
  it('should be defined', () => {
    expect(actions.logout).toBeDefined();
    expect(actions.login).toBeDefined();
    expect(actions.updateLoginForm).toBeDefined();
    expect(actions.updateAccountDialogActiveTab).toBeDefined();
    expect(actions.closeLoginDialog).toBeDefined();
    expect(actions.openLoginDialog).toBeDefined();
  });

  it('should logout work', () => {
    const payload = {
      type: types.DELETE_USER,
      payload: {
        isShow: true,
        msg: 'Logged out successfully!',
      },
    };

    expect(actions.logout()).toEqual(payload);
  });

  it('should login work if activeTab is Login', () => {
    const expectedPayload = {};
    const expectedActions = [
      { 
        type: types.UPDATE_IS_SNACKBAR_SHOW,
        payload: {
          isShow: true,
          msg: 'We are logging you in. Please wait...',
        },
      }, {
        type: types.UPDATE_USER,
        payload: expectedPayload,
      }, {
        type: types.UPDATE_IS_SNACKBAR_SHOW,
        payload: {
          isShow: true,
          msg: 'Log in success!',
        },
      }
    ];

    const store = mockStore({
      appState: {
        accountDialogActiveTab: 'Login',
      },
    });

    fetchMock.mock('begin:https://commandp-lbs-backend.herokuapp.com', {
      status: 200,
      body: expectedPayload,
    });

    return store.dispatch(actions.login())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
