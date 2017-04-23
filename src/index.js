import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import './index.css';

// Polyfill for onTouchTap event. see https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

const AppWithTheme = () => (
  <MuiThemeProvider muiTheme={null && getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <AppWithTheme />,
  document.getElementById('root')
);
