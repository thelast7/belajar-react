import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './testState/Welcome'
import Welcome2 from './testState2/Welcome2'
import Hello from './testProps/Hello'
import Tambah from './testCounter/Tambah'
import Tambah2 from './testCounter2/Tambah2'
import EventBind from './testEventBind/EventBind'
import EventBind2 from './testEventBind/EventBind2'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome />
        <hr />
        <Welcome2 />
        <hr />
        <Hello name="takim"/> bisa gini
        bisa gini, kalo p nya itu adalah children
        <Hello name="putri">
          <p>ini props children</p>
        </Hello>
        <hr />
        <Tambah />
        <hr />
        <Tambah2 />
        <hr /> */}
        <EventBind />
        <hr />
        <EventBind2 />
      </div>
    );
  }
}

export default App;
