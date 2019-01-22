import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ClickCounter from './testHOC/ClickCounter';
import HoverCounter from './testHOC/HoverCounter';
// import Welcome from './testState/Welcome'
// import Welcome2 from './testState2/Welcome2'
// import Hello from './testProps/Hello'
// import Tambah from './testCounter/Tambah'
// import Tambah2 from './testCounter2/Tambah2'
// import EventBind from './testEventBind/EventBind'
// import EventBind2 from './testEventBind/EventBind2'
// import EventBind3 from './testEventBind/EventBind3'
// import EventBind4 from './testEventBind/EventBind4'
// import BlogPost from './testAPI/testFetch/BlogPost'
// import Blog from './testAPI/testFetch2/Blog'
// import KonsumsiAxios from './testAPI/testAxios/KonsumsiAxios'
// import Konsumsi2 from './testAPI/testAxios2/Konsumsi2'
// import TestArray from './arrayMap/TestArray'
// import Condition from './testCondition/Condition'
// import Perulangan from './testPerulangan/Perulangan'
// import OrangRendering from './testPerulangan/OrangRendering'
// import InputFrom from './testForm/InputForm'
// import Refs from './testRef/Refs'
// import NetState from './fromNet/state/NetState'
// import TestProps from './fromNet/props/TestProps'
// import IniClassComp from './fromNet/jenisComponent/IniClassComp';
// import IniFunctionComp from './fromNet/jenisComponent/IniFunctionComp';

class App extends Component {
  // state = {
  //   mhs : [
  //       {nama: 'takim', umur: 25},
  //       {nama: 'putri', umur:23}
  //   ]
  // }
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
        {/* <EventBind />
        <hr />
        <EventBind2 />
        <hr />
        <EventBind3 />
        <hr />
        <EventBind4 /> */}
        {/* <BlogPost /> */}
        {/* <Blog /> */}
        {/* <KonsumsiAxios /> */}
        {/* <Konsumsi2 /> */}
        {/* <TestArray /> */}
        {/* <Condition /> */}
        {/* <Perulangan /> */}
        {/* <OrangRendering /> */}
        {/* <InputFrom /> */}
        {/* <Refs /> */}
        {/* <TestProps nama="takim" umur="25" /> */}
        {/* <IniClassComp mhs={this.state.mhs}/> */}
        {/* <IniFunctionComp mhs={this.state.mhs} /> */}
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
