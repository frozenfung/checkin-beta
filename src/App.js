import React, { Component } from 'react';

import './App.css';
import { NavBar } from './components';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      logged: false,
    };
  }

  render() {
    return (
      <NavBar {...this.state} />
    );
  }
}

export default App;
