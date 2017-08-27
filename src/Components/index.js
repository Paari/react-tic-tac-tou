import React, { Component } from 'react';
import Block from './Block/'

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      activePlayer: 'X',
      boxes: ['','','','','','','','',''],
      result: [],
      gameOver: false,
    }

    this.updateTheBox = this.updateTheBox.bind(this);
  }

  // when the game is over udpate the state
  gameOver() {
    this.setState({
      gameOver: true,
    })
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
      // set the values in the result array
      let winningMarkers = [ver, ver + 3, ver + 6];
      this.setState({
        result: winningMarkers,
      });

      // mark game as over
      this.gameOver();
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
      // set the values in the result array
      let winningMarkers = [hor, hor + 1, hor + 2];
      this.setState({
        result: winningMarkers,
      });

      // mark game as over
      this.gameOver();
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
        // set the values in the result array
        let winningMarkers = [center, center + 2, center - 2];
        this.setState({
          result: winningMarkers,
        });

        // mark game as over
        this.gameOver();
        return true;
      } else if (offset === 4 && boxes[center] === boxes[center - 4] && boxes[center] === boxes[center + 4]) {
        // set the values in the result array
        let winningMarkers = [center, center + 4, center - 4];
        this.setState({
          result: winningMarkers,
        });

        // mark game as over
        this.gameOver();
        return true;
      }
    }

    return false;
  }

  // update the box on click based on the index
  updateTheBox (index, marker) {
    if (marker !== '' || this.state.gameOver) return false;
    // update the value with active player
    let updatedBox = this.state.boxes;
    updatedBox[index] = this.state.activePlayer;
    const result = this.checkResult(index);

    // if the result is true, that means game is over, so stop the game
    if (result) {
      return false;
    }
    
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

  renderGameOver() {
    if (this.state.gameOver) {
      return(
        <div className="game-over">
          <h4>Game Over</h4>
          <p><strong>{this.state.activePlayer}</strong> won the game</p>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="main-wrapper">
        {this.renderGameOver()}

        {this.state.boxes.map((marker, index) => {
          let activeClass = '';
          // update the value if it is winning sequence
          if (this.state.result.includes(index)) {
            activeClass = 'active';
          }

          return (
            <Block
            className={activeClass}
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
