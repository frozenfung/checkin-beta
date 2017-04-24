import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import SmartApp from './containers/SmartApp';
import './index.css';
import reducer from './reducers';

// Polyfill for onTouchTap event. see https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

const store = createStore(reducer, {}, applyMiddleware(thunk));

const AppWithTheme = () => (
  <MuiThemeProvider muiTheme={null && getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <SmartApp />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <AppWithTheme />,
  document.getElementById('root')
);
