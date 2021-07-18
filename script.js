const buttonBlack = document.querySelector('#button-black');
const buttonRandom = document.querySelector('#button-random');
const buttonErase = document.querySelector('#button-erase')
const buttonSize = document.querySelector('#button-size');
const buttonReset = document.querySelector('#button-reset');
const gridContainer = document.querySelector('.grid-container');


window.addEventListener('load', defaultGrid);
buttonBlack.addEventListener('click', blackSquares);
buttonRandom.addEventListener('click', randomSquares);
buttonErase.addEventListener('click', eraseSquare);
buttonSize.addEventListener('click', userInputGrid);
buttonReset.addEventListener('click', defaultGrid);

function createGrid(GridSize) {
  removeAllChildNodes(gridContainer);
  gridContainer.style.gridTemplateColumns = `repeat(${GridSize}, 1fr)`;

  for (let i = 0; i < GridSize**2; i++) {
    const divGrid = document.createElement('div');
    divGrid.style.border = '1px red solid';
    divGrid.classList.add('divSquare');
    divGrid.addEventListener('mouseover', () => { divGrid.style.backgroundColor = 'black'});
    gridContainer.appendChild(divGrid);
  }
}

function userInputGrid() {
  while(isNaN(userGrid) || userGrid > 50 || userGrid < 1) {
    var userGrid = parseInt(prompt('What size grid between 1-50', 16));
  }
  createGrid(userGrid);
}

function defaultGrid() {
  createGrid(16);
}

function blackSquares() {
  var divSquare = document.querySelectorAll('.divSquare');
  var divSquareArray = Array.from(divSquare);
  divSquareArray.forEach(divSquare => {
    divSquare.addEventListener('mouseover', () => { divSquare.style.backgroundColor = 'black'});
  })
}

function randomSquares() {
  var divSquare = document.querySelectorAll('.divSquare');
  var divSquareArray = Array.from(divSquare);
  divSquareArray.forEach(divSquare => {
    divSquare.addEventListener('mouseover', () => { divSquare.style.backgroundColor = `rgb(${randomRBGValue()}, ${randomRBGValue()}, ${randomRBGValue()})`});
  })
}

function eraseSquare() {
  var divSquare = document.querySelectorAll('.divSquare');
  var divSquareArray = Array.from(divSquare);
  divSquareArray.forEach(divSquare => {
    divSquare.addEventListener('mouseover', () => { divSquare.style.backgroundColor = 'white'});
  })
}

function randomRBGValue() {
  return Math.floor(Math.random() * 256)
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
