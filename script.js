const gridContainer = document.querySelector('.grid-container');
const blackHover = document.querySelectorAll('.blackHover');

function defaultGrid() {
    createGrid(12);
}

function createGrid(GridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${GridSize}, 1fr)`;
  for (let i = 0; i < GridSize**2; i++) {
  const divGrid = document.createElement('div');
  divGrid.style.border = '1px red solid';
  //divGrid.classList.add('blackHover');
  //divGrid.addEventListener('mouseover', () => { divGrid.style.backgroundColor = 'black'});
  gridContainer.appendChild(divGrid);
  }
}

defaultGrid();


//create prompt for user input
//create grid column with user input