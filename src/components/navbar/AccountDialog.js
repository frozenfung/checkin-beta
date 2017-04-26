import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import AccountBox from 'material-ui/svg-icons/action/account-circle'
import Assignment from 'material-ui/svg-icons/action/assignment'

export default class AccountDialog extends Component {
  static defaultProps = {
    isLoginOpen: true,  
  };

  renderLoginTab() {
    return (
      <Tab
        label="Login"
        icon={<AccountBox />}
        onActive={this.props.updateActiveTab}
      >
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          name="username"
          onChange={this.props.updateLoginForm}
          value={this.props.username}
        />
        <br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          name="password"
          type="password"
          onChange={this.props.updateLoginForm}
          value={this.props.password}
        />
      </Tab>
    );
  }

  renderRegisterTab() {
    return (
      <Tab
        label="Register"
        icon={<Assignment />}
        onActive={this.props.updateActiveTab}
      >
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
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.props.handleSubmit}
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
