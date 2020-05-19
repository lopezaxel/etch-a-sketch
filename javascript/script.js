const gridContainer = document.querySelector('#gridContainer');

function createGrids(gridSize = 16) {
  for(let i = 1; i <= gridSize; i++) {
    for(let i = 1; i <= gridSize; i++) {
      let gridDiv = document.createElement('div');
      gridDiv.classList.add('gridDiv');
      gridDiv.setAttribute('style', 'height: 32px; border: lightgray 1px solid')
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

const resetButton = document.querySelector('#button');

let gridSize;
resetButton.addEventListener('click', () => gridSize = prompt('How many ' + 
  'squares per side do you want?', 16));

createGrids();
changeColor();