const numOfGrids = 256;



// creates 16 x 16 grid
let divElement = document.createElement('div');
divElement.classList.add('container');
let divElementTwo = document.createElement('div');
divElementTwo.classList.add('button-container');

let titleElement = document.createElement('h1');
titleElement.textContent = "Etch-a-Sketch";
document.body.appendChild(titleElement);

for (let i = 0; i < numOfGrids; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridSquare');
    divElement.appendChild(gridElement);
}

document.body.appendChild(divElement);

const gridSquares = document.querySelectorAll('.gridSquare');
// console.log(gridSquares)
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', e => {
        e.target.classList.add('active');
    })
})

// changes the pixel size on canvas
let newCanvasButton = document.createElement('button');
newCanvasButton.classList.add('change-canvas-button');
newCanvasButton.textContent = "New Canvas";
divElementTwo.appendChild(newCanvasButton);


// creates refresh button to reset state of grids
let refreshButtonElement = document.createElement('button');
refreshButtonElement.classList.add('refresh-button');
refreshButtonElement.textContent = 'refresh';
divElementTwo.appendChild(refreshButtonElement);

document.body.appendChild(divElementTwo);

const allGrids = document.querySelectorAll('.gridSquare');
const refreshButton = document.querySelector('.refresh-button');

refreshButton.addEventListener('click', refreshStateOfGrids);

function refreshStateOfGrids () {
    allGrids.forEach((grid) => grid.classList.remove('active'));
}
