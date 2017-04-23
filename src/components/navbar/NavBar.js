import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AccountBox from 'material-ui/svg-icons/action/account-circle'

import AccountDialog from './AccountDialog';

const Login = (props) => (
  <RaisedButton
    {...props}
    label="Login"
    icon={<AccountBox />}
  />
);

Login.muiName = 'FlatButton';

const Logged = (props) => (
  <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)

export default class NavBar extends Component {
  constructor(...args) {
    super(...args);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      isLoginOpen: false,
    };
  }

  handleOpen() {
    this.setState({isLoginOpen: true});
  }

  handleClose() {
    this.setState({isLoginOpen: false});
  }

  handleLogin() {
    console.log('Login process');
  }

  render() {
    return (
      <div>
        <AppBar
          title="checkin BETA"
          iconElementRight={this.props.logged ? <Logged /> : <Login onTouchTap={this.handleOpen} />}
        />
        <AccountDialog
          isLoginOpen={this.state.isLoginOpen}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}
