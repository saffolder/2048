/*
* Sam Affolder
* 07/28/2022
* JS for 2048 clone
*/
"use strict";
(function() {
  let board = [[0,0,0,0],
  [0,2,0,0],
  [0,0,0,0],
  [0,0,0,0]];

  window.addEventListener("load", init);
  window.onkeyup = function(e) {
    let key = e.key.toUpperCase();
    if (key == 'W') {
      document.getElementById('test').textContent = 'UP';
    } else if (key == 'S') {
      document.getElementById('test').textContent = 'DOWN';
    } else if (key == 'A') {
      document.getElementById('test').textContent = 'LEFT';
    } else if (key == 'D') {
      document.getElementById('test').textContent = 'RIGHT';
    }
  }

  /**
   * Initializing function called after the DOM loads in.
   */
  function init() {
    // TODO: add event listeners to keys
    // moveLeft();
    // moveRight();
    // moveUp();
    // moveDown();
    makeSquares(); // might not need??
  }

  /**
   * Creates the play squares
   */
  function makeSquares() {
    // TODO make 2d array, updateBoard w array
    genNum();

  }

  /*
   * For horiztonal movement of nums
   */
  function moveHorizontal() {

  }

  /**
   * If left arrow or A pressed, move nums left
   */
  function moveLeft(){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == 0) {
          // TODO
        }
      }
    }
  }

  /**
   * Generate a new number on the board
   * Basic implementation, starts in top left and places a 2
   */
  function genNum() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] == 0) {
          board[i][j] = 2;
          i,j = 4;
        }
      }
    }
  }

})();