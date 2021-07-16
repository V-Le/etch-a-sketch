const gridContainer = document.querySelector('.grid-container');
const blackHover = document.querySelectorAll('.blackHover');

function createGrid() {
  for (let i = 0; i < 100; i++) {
  const divGrid = document.createElement('div');
  divGrid.style.border = '1px red solid';
  divGrid.classList.add('blackHover');
  divGrid.addEventListener('mouseover', () => { divGrid.style.backgroundColor = 'black'});
  gridContainer.appendChild(divGrid);
  }
}

createGrid();
