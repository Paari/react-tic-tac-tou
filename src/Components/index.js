import React, { Component } from 'react';
import Block from './Block/'

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      activePlayer: 'X',
      boxes: ['','','','','','','','','']
    }

    this.updateTheBox = this.updateTheBox.bind(this);
  }

  // main game logic
  checkResult (index) {
    const boxes = this.state.boxes;

    // if it's the second row move the check to line one
    if (index > 2 && index < 6) {
      index -= 3;
    }

    // similarly if it is line third line
    if (index > 5) {
      index -= 6;
    }

    // now check if vertical markers are same
    if (boxes[index] === boxes[index + 3] && boxes[index + 3] === boxes[index + 6]) {
      return true;
    }
    return false;
  }

  // update the box on click based on the index
  updateTheBox (index, marker) {
    if (marker !== '') return false;
    // update the value with active player
    let updatedBox = this.state.boxes;
    updatedBox[index] = this.state.activePlayer;
    console.log(this.checkResult(index));
    // flip the marker of the player 0 to X or X to 0
    let activeMarker = '0'
    if (this.state.activePlayer === activeMarker) {
      activeMarker = 'X'
    }

    // update the state
    this.setState({
      boxes: updatedBox,
      activePlayer: activeMarker
    })
  }


  render() {
    return (
      <div className="main-wrapper">
        {this.state.boxes.map((marker, index) => {
          return (
            <Block
            key={index}
            index={index}
            mark={marker}
            active={this.state.activePlayer}
            updateTheBox={this.updateTheBox}
            />
          );
        })}
      </div>
    )
  }
}


export default Wrapper;
