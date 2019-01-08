import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './testState/Welcome'
import Welcome2 from './testState2/Welcome2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <hr></hr>
        <Welcome2 />
      </div>
    );
  }
}

export default App;
