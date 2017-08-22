import React, { Component } from 'react';
import Block from './Block/'

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      activePlayer: 'X',
    }
  }
  render() {
    return (
      <div className="main-wrapper">
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      </div>
    )
  }
}


export default Wrapper;
