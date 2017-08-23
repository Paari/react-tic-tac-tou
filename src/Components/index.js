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

    /* To check if the markers mastch vertically
    * assign the index to a variable
    * check the markers row position and move the index to top row
    * check from the top row if vertical column has the same value */
    let ver = index;

    // if it's the second row move the check to line one
    if (ver > 2 && ver < 6) {
      ver -= 3;
    }

    // similarly if it is line third line
    if (ver > 5) {
      ver -= 6;
    }

    // now check if vertical markers are same
    if (boxes[ver] === boxes[ver + 3] && boxes[ver + 3] === boxes[ver + 6]) {
      return true;
    }


    /* Check if the markers match horizontally
    assign the index to a variable
    check the row of the marker and move it to the first position of the row
    now check if all the elements in the row has the same value */
    let hor = index;

    // if it's the first row
    if (hor >= 0 && hor < 3) {
      hor = 0;
    }

    // if it's the second row
    if (hor >= 3 && hor < 6) {
      hor = 3;
    }

    // if it's the third row
    if (hor >= 6 && hor < 9) {
      hor = 6;
    }

    // now check if the markers in the row are same horizontally
    if (boxes[hor] === boxes[hor + 1] && boxes[hor + 1] === boxes[hor + 2]) {
      return true;
    }


    /* Check if the markers are same in cross
    check for the even numbers as they only have that possibility
    move the cursor to the center and check -2 & +2 and -4 & +4, if they are same*/
    if ((index%2) === 0) {
      // move to the center
      let center = 4;
      const offset = Math.abs(center - index);

      // now check the markers in cross positions
      if (offset === 2 && boxes[center] === boxes[center - 2] && boxes[center] === boxes[center + 2]) {
        return true;
      } else if (offset === 4 && boxes[center] === boxes[center - 4] && boxes[center] === boxes[center + 4]) {
        return true;
      }
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
