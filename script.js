const buttonBlack = document.querySelector('#button-black');
const buttonRainbow = document.querySelector('#button-rainbow');
const buttonSize = document.querySelector('#button-size');
const buttonReset = document.querySelector('#button-reset');

const gridContainer = document.querySelector('.grid-container');
const blackHover = document.querySelectorAll('.blackHover');

buttonSize.addEventListener('click', userInputGrid);
buttonReset.addEventListener('click', defaultGrid)

function createGrid(GridSize) {
  removeAllChildNodes(gridContainer);
  gridContainer.style.gridTemplateColumns = `repeat(${GridSize}, 1fr)`;
  for (let i = 0; i < GridSize**2; i++) {
    const divGrid = document.createElement('div');
    divGrid.style.border = '1px red solid';
    //divGrid.classList.add('blackHover');
    //divGrid.addEventListener('mouseover', () => { divGrid.style.backgroundColor = 'black'});
    gridContainer.appendChild(divGrid);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
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

defaultGrid();
