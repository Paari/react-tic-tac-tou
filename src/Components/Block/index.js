import React, { Component } from 'react';

class Block extends Component {
  constructor() {
    super();
    this.state = {
      status: false
    }
  }

  render() {
    return (
      <div className="block__item" />
    )
  }
}

export default Block;
