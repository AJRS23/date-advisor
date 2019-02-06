import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import Hero from './components/hero/hero';

class App extends Component {
  render() {
    return (
      <div className="body">
        <NavBar/>
        <Hero/>
      </div>
    );
  }
}

export default App;
