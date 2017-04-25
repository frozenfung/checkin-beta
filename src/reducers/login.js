import { UPDATE_LOGIN_FORM } from '../constants/actionTypes';

const initState = {
  username: 'fung',
  password: 'fung',
};

export default function login(state = initState, action) {
  switch(action.type) {
    case UPDATE_LOGIN_FORM:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
