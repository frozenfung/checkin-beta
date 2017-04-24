import React, { Component } from 'react';

import './App.css';
import { NavBar } from '.';

export default class App extends Component {
  render() {
    return (
      <NavBar {...this.props} />
    );
  }
}
