import React, { Component } from 'react';
import AccountBox from 'material-ui/svg-icons/action/account-circle'
import RaisedButton from 'material-ui/RaisedButton';

export default function Login(props) {
  return (
    <RaisedButton
      {...props}
      label="Login"
      icon={<AccountBox />}
    />
  );
};

