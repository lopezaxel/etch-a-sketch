function createGrids(gridSize = 16) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for(let i = 1; i <= gridSize; i++) {
    for(let i = 1; i <= gridSize; i++) {
      let gridDiv = document.createElement('div');
      gridDiv.classList.add('gridDiv');
      gridDiv.setAttribute('style', 'border: lightgray 1px solid;')
      gridContainer.appendChild(gridDiv);
    }
  }
}

function deleteOldGrids() {
  let grids = document.querySelectorAll('.gridDiv');
  grids.forEach((grid) => {
    gridContainer.removeChild(grid);
  })
}

function changeColor() {
  let squareDivs = document.querySelectorAll('.gridDiv');
  squareDivs.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (e) => {
      
      e.target.style.backgroundColor = color;
    });
  });
}

function pickRandomColor() {
  let color1 = Math.floor(Math.random() * 255);
  let color2 = Math.floor(Math.random() * 255);
  let color3 = Math.floor(Math.random() * 255);
  return `rgb(${color1}, ${color2}, ${color3})`;
}

function respondReset() {
  let gridSize;
  gridSize = prompt('How many ' + 'squares per side do you want?', 16);
  deleteOldGrids();
  createGrids(gridSize);
  changeColor();
}

let colorRandom = pickRandomColor();
const gridContainer = document.querySelector('#gridContainer');
const resetButton = document.querySelector('#button');
resetButton.addEventListener('click', respondReset);

createGrids();
changeColor();
