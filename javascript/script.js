const gridContainer = document.querySelector('#gridContainer');

function createGrids(gridSize = 16) {
  let grids = document.querySelectorAll('.gridDiv');
  grids.forEach((grid) => {
    gridContainer.removeChild(grid);
  })
  for(let i = 1; i <= gridSize; i++) {
    for(let i = 1; i <= gridSize; i++) {
      let gridDiv = document.createElement('div');
      gridDiv.classList.add('gridDiv');
      gridDiv.setAttribute('style', 'border: lightgray 1px solid;')
      gridContainer.appendChild(gridDiv);
    }
  }
}

function changeColor() {
  const squareDivs = document.querySelectorAll('.gridDiv');
  squareDivs.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'black';
    });
  });
}

function respondReset() {
  let gridSize;
  gridSize = prompt('How many ' + 'squares per side do you want?', 16);
  createGrids(gridSize);
}

const resetButton = document.querySelector('#button');
resetButton.addEventListener('click', respondReset);

createGrids();
changeColor();

