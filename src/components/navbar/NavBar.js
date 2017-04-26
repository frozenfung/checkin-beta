import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Login from './Login';
import Logged from './Logged';

import SmartAccountDialog from '../../containers/SmartAccountDialog';

export default class NavBar extends Component {
  render() {
    const elementRight = this.props.logged ?
      <Logged onTouchTap={this.props.handleLogout} /> :
      <Login onTouchTap={this.props.handleOpen} />
    return (
      <div>
        <AppBar
          title="checkin BETA"
          iconElementRight={elementRight}
        />
        <SmartAccountDialog
          isLoginOpen={this.props.isLoginOpen}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }
}
