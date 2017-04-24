import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Login from './Login';
import Logged from './Logged';

import SmartAccountDialog from '../../containers/SmartAccountDialog';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="checkin BETA"
          iconElementRight={this.props.logged ? <Logged /> : <Login onTouchTap={this.props.handleOpen} />}
        />
        <SmartAccountDialog
          isLoginOpen={this.props.isLoginOpen}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }
}
