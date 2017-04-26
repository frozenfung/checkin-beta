import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

import './App.css';
import SmartNavBar from '../containers/SmartNavBar';

export default class App extends Component {
  static defaultProps = {
    snackbarMsg: '',
    isSnackbarShow: false,
  };

  render() {
    return (
      <div>
        <SmartNavBar {...this.props} />
        <Snackbar
          open={this.props.isSnackbarShow}
          message={this.props.snackbarMsg}
          autoHideDuration={3000}
        />
      </div>
    );
  }
}
