window.addEventListener('load', defaultGrid);

//Functionality to page buttons
document.querySelector('#button-black').addEventListener('click', blackSquares);
document.querySelector('#button-random').addEventListener('click', randomSquares);
document.querySelector('#button-erase').addEventListener('click', eraseSquare);
document.querySelector('#button-size').addEventListener('click', userInputGrid);
document.querySelector('#button-reset').addEventListener('click', defaultGrid);

//Creates the grid with divs based on passed GridSize. Styling is made within the loop for each div and appended to parent gridContainer
function createGrid(GridSize) {
  const gridContainer = document.querySelector('.grid-container');
  removeAllChildNodes(gridContainer);
  gridContainer.style.gridTemplateColumns = `repeat(${GridSize}, 1fr)`;

  for (let i = 0; i < GridSize**2; i++) {
    const divGrid = document.createElement('div');
    divGrid.style.border = '1px black solid';
    divGrid.classList.add('divSquare');
    divGrid.addEventListener('mouseover', () => { divGrid.style.backgroundColor = 'black'});
    gridContainer.appendChild(divGrid);
  }
}

//Allows for user to input the size of the grid. Feature needed to alert invalid input.
function userInputGrid() {
  while(isNaN(userGrid) || userGrid > 50 || userGrid < 1) {
    var userGrid = parseInt(prompt('What size grid between 1-50', 16));
  }
  createGrid(userGrid);
}

//Grid that is initally loaded into page
function defaultGrid() {
  createGrid(16);
}

//Selects all divs within gridContainer and give it a black backgroundColor when mouseovered
function blackSquares() {
  var divSquare = document.querySelectorAll('.divSquare');
  var divSquareArray = Array.from(divSquare);
  divSquareArray.forEach(divSquare => {
    divSquare.addEventListener('mouseover', () => { divSquare.style.backgroundColor = 'black'});
  })
}

//Selects all divs within gridContainer and give it a random backgroundColor when mouseovered
function randomSquares() {
  var divSquare = document.querySelectorAll('.divSquare');
  var divSquareArray = Array.from(divSquare);
  divSquareArray.forEach(divSquare => {
    divSquare.addEventListener('mouseover', () => { divSquare.style.backgroundColor = `rgb(${randomRBGValue()}, ${randomRBGValue()}, ${randomRBGValue()})`});
  })
}

//Selects all divs within gridContainer and give it a white backgroundColor when mouseovered
function eraseSquare() {
  var divSquare = document.querySelectorAll('.divSquare');
  var divSquareArray = Array.from(divSquare);
  divSquareArray.forEach(divSquare => {
    divSquare.addEventListener('mouseover', () => { divSquare.style.backgroundColor = 'rgb(233, 233, 233)'});
  })
}

//Generates a random value between 1-255
function randomRBGValue() {
  return Math.floor(Math.random() * 256)
}

//Removes all child divs within parent
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
