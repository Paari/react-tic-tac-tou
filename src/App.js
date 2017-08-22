import React, { Component } from 'react';
import Wrapper from './Components/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
        </div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
