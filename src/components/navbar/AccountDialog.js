import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import AccountBox from 'material-ui/svg-icons/action/account-circle'
import Assignment from 'material-ui/svg-icons/action/assignment'

export default class AccountDialog extends Component {
  renderLoginTab() {
    return (
      <Tab label="Login" icon={<AccountBox />}>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
        />
        <br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
      </Tab>
    );
  }

  renderRegisterTab() {
    return (
      <Tab label="Register" icon={<Assignment />}>
        <br/>
        <TextField
          hintText="Name*"
        />
        <br/>
        <TextField
          hintText="Email*"
        />
        <br/>
        <TextField
          hintText="Password*"
          type="password"
        />
        <TextField
          hintText="Display name"
        />
        <br/>
      </Tab>
    );
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleLogin}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleLogin}
      />,
    ];

    const contentStyle = {
      maxWidth: '480px',
    };

    return (
      <Dialog
        actions={actions}
        contentStyle={contentStyle}
        open={this.props.isLoginOpen}
        onRequestClose={this.props.handleClose}
      >
        <Tabs>
          {this.renderLoginTab()}
          {this.renderRegisterTab()}
        </Tabs>
      </Dialog>
    );
  }
}
