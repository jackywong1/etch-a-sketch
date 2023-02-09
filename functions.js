let defaultDimension = 64;


// create containers
let outerContainer = document.createElement('div');
outerContainer.classList.add('outer-container');
let divElement = document.createElement('div');
divElement.classList.add('container');
let divElementTwo = document.createElement('div');
divElementTwo.classList.add('button-container');


// insert title for webpage
// let titleElement = document.createElement('h1');
// titleElement.textContent = "Etch-a-Sketch";
// document.body.appendChild(titleElement);


// create grid
function createGrid (numGrids) {
    for (let i = 0; i < numGrids ** 2; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add('gridSquare');
        container.style.gridTemplateColumns = `repeat(${numGrids}, ${450/numGrids}px)`;
        container.style.gridTemplateRows = `repeat(${numGrids}, minmax(${450/numGrids}px, auto))`;
        divElement.appendChild(gridElement);
    }
    // create hover effect for grid squares
    const gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', e => {
            e.target.classList.add('active');
        })
    })
}


outerContainer.appendChild(divElement);
document.body.appendChild(outerContainer);
const container = document.querySelector('.container');

// erase button
const eraserButtonElement = document.createElement('button');
eraserButtonElement.classList.add('eraser-button');
let eraserText = document.createElement('p');
eraserText.textContent = 'eraser';
eraserButtonElement.appendChild(eraserText);
divElementTwo.appendChild(eraserButtonElement);
outerContainer.appendChild(divElementTwo);
document.body.appendChild(outerContainer);


const eraserButton = document.querySelector('.eraser-button');
eraserButton.addEventListener('click', eraseLines);


function eraseLines() {
    const gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', e => {
            e.target.classList.remove('active');
            e.target.style.backgroundColor = null;
            // console.log(colourButton);
            // e.target.style.backgroundcolor = colourButton.target.value;
        })
    })
}

// changes the pixel size on canvas using a range slider
let newCanvasSlider = document.createElement('div');
newCanvasSlider.classList.add('slide-container');
let canvasInput = document.createElement('input');
canvasInput.setAttribute('type', 'range');
canvasInput.setAttribute('min', '1');
canvasInput.setAttribute('max', '100');
canvasInput.setAttribute('value', '50');
canvasInput.setAttribute('class', 'slider');
canvasInput.setAttribute('id', 'myRange');


newCanvasSlider.appendChild(canvasInput);
divElementTwo.appendChild(newCanvasSlider);


function changePixelNum () {
    let currentPixelFrame = container.querySelectorAll('.gridSquare');
    currentPixelFrame.forEach((pixel) => pixel.remove());
    createGrid(slider.value);
}    


// create colour picker
let colourPickerButton = document.createElement('input');
colourPickerButton.setAttribute('type', 'color');
colourPickerButton.setAttribute('id', 'colour-picker');
colourPickerButton.setAttribute('value', '#e3e3e3');


let colourPickerText = document.createElement('p');
colourPickerText.textContent = 'colour';


colourPickerButton.appendChild(colourPickerText);
newCanvasSlider.appendChild(colourPickerButton);
divElementTwo.appendChild(newCanvasSlider);
outerContainer.appendChild(divElementTwo);
document.body.appendChild(outerContainer);


const colourButton = document.querySelector('#colour-picker');
console.log(colourButton.value)
colourButton.addEventListener('click', changeColour);


function changeColour() {
    const gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', e => {
            e.target.classList.remove('active');
            e.target.style.backgroundColor = colourButton.value;
        })
    })
}

// creates refresh button to reset state of grids
let refreshButtonElement = document.createElement('button');
refreshButtonElement.classList.add('refresh-button');
let refreshText = document.createElement('p');
refreshText.textContent = 'refresh';
refreshButtonElement.appendChild(refreshText);
divElementTwo.appendChild(refreshButtonElement);
outerContainer.appendChild(divElementTwo);
document.body.appendChild(outerContainer);


const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', refreshStateOfGrids);


function refreshStateOfGrids () {
    let allGrids = document.querySelectorAll('.gridSquare');
    allGrids.forEach((grid) => {
        grid.classList.remove('active');
        grid.style.backgroundColor = "#e3e3e3";
    });
}    

// set slider value
let slider = document.querySelector('#myRange');
let output = document.querySelector('#demo');
slider.addEventListener('mouseup', changePixelNum);


createGrid(defaultDimension);


// include name and project credit in footer
const footerElement = document.createElement('footer');
const creditText = document.createElement('p');
const authorText = document.createElement('p');
creditText.textContent = 'Developed as Part of The Odin Project Curriculum';
authorText.textContent = '© Jacky Wong';
footerElement.appendChild(creditText);
footerElement.appendChild(authorText);
document.body.appendChild(footerElement);



