import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './testState/Welcome'
import Welcome2 from './testState2/Welcome2'
import Hello from './testProps/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <hr />
        <Welcome2 />
        <hr />
        <Hello name="takim"/> {/* bisa gini */}
        {/* bisa gini, kalo p nya itu adalah children */}
        <Hello name="putri">
          <p>ini props children</p>
        </Hello>
        <hr />
      </div>
    );
  }
}

export default App;
