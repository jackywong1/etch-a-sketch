const numOfGrids = 256;

let divElement = document.createElement('div');
divElement.classList.add('container');

for (let i = 0; i < numOfGrids; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridSquare');
    divElement.appendChild(gridElement);
}

document.body.appendChild(divElement);