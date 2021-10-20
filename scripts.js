const body = document.querySelector('body');

const gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';

body.append(gridContainer);

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Clear the art';
resetBtn.className = 'btn';
body.insertBefore(resetBtn, gridContainer);
resetBtn.addEventListener('click', resetArt);

const gridSetBtn = document.createElement('button');
gridSetBtn.textContent = 'Set squares amount';
gridSetBtn.className = 'btn';
body.insertBefore(gridSetBtn, gridContainer);
gridSetBtn.addEventListener('click', setSquareNumber);

const gridElement = [];
const gridColumnElement = [];
let gridColumns = 20;
let gridLines = 20;
//grid creation

createGrid(gridColumns, gridLines);

function createGrid(gridColumns, gridLines) {
  deleteGrid();
  for (let i = 0; i < gridLines; i++) {
    gridElement[i] = document.createElement(`div`);
    gridElement[i].className = 'gridRow';
    gridElement[i].setAttribute('id', i);

    gridContainer.append(gridElement[i]);
    for (let j = 0; j < gridColumns; j++) {
      gridColumnElement[j] = document.createElement('div');
      gridColumnElement[j].className = 'gridColumn';
      gridColumnElement[j].setAttribute('idC', j);

      gridElement[i].append(gridColumnElement[j]);
    }
  }
  const square = document.querySelectorAll('.gridColumn');
  square.forEach((div) => div.addEventListener('mouseover', colorize));
}

function colorize() {
  this.classList.add('blacked');
}

function resetArt() {
  let ElemsToReset = document.querySelectorAll('.blacked');
  ElemsToReset.forEach((div) => div.classList.remove('blacked'));
}

function setSquareNumber() {
  let gridLength = prompt(
    'Please enter how many squares do you want in each line'
  );
  if (gridLength > 0 && gridLength < 101) {
    gridLines = gridLength;
    gridColumns = gridLength;
    createGrid(gridColumns, gridLines);
  }
}

function deleteGrid() {
  const gridL = document.querySelectorAll('.gridColumn, .gridRow');
  gridL.forEach((div) => div.remove());
}
