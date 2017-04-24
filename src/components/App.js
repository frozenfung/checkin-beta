import React, { Component } from 'react';

import './App.css';
import SmartNavBar from '../containers/SmartNavBar';

export default class App extends Component {
  render() {
    return (
      <SmartNavBar {...this.props} />
    );
  }
}
