import React, { Component } from 'react';

class Block extends Component {
  constructor() {
    super();
    this.state = {
      marked: false
    }

    // bind the click function to this
    this.markTheBox = this.markTheBox.bind(this);
  }

  // mark the box with the active symbol: 0 or X
  markTheBox() {
    const {mark, index, updateTheBox} = this.props;

    // call the function from the props and pass the values
    updateTheBox(index, mark);
  }

  render() {
    const {className, mark} = this.props;
    const activeClass = `block__item ${className}`;
    return (
      <div onClick={this.markTheBox} className={activeClass}>
        <span className="block__item--mark">
          {mark}
        </span>
      </div>
    )
  }
}

export default Block;
