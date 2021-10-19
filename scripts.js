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
gridSetBtn.textContent = 'Set squares number';
gridSetBtn.className = 'btn';
body.insertBefore(gridSetBtn, gridContainer);

const gridElement = [];
const gridColumnElement = [];
let gridColumns = 20;
let gridLines = 20;
//grid creation
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

function colorize() {
  this.classList.add('blacked');
}

function resetArt() {
  let ElemsToReset = document.querySelectorAll('.blacked');
  ElemsToReset.forEach((div) => div.classList.remove('blacked'));
}
square.forEach((div) => div.addEventListener('mouseover', colorize));
