import { combineReducers } from 'redux'

import login from './login';
import register from './register';
import appState from './appState';

const reducer = combineReducers({
  appState,
  login,
  register,
});

export default reducer;

