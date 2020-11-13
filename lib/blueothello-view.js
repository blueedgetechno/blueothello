'use babel';

import React from 'react';
import ReactDOM from 'react-dom';
import Othello from './view/othello.js'

export default class BlueothelloView {

  constructor(serializedState) {
    this.element = document.createElement('div');
    this.element.classList.add('blueothello');

    ReactDOM.render(<div> <Othello/></div>, this.element);
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle() {
    return 'Minesweeper';
  }

  getURI() {
      return 'atom://blueothello';
  }

}
