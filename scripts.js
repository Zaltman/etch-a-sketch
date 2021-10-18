const body = document.querySelector('body');

const gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';

body.append(gridContainer);

const gridElement = [];

for (let i = 0; i < 256; i++) {
  gridElement[i] = document.createElement(`div`);
  gridElement[i].className = 'grid';
  gridElement[i].setAttribute('id', i);

  gridContainer.append(gridElement[i]);
}

function colorize() {
  this.classList.add('blacked');
}

gridElement.forEach((div) => div.addEventListener('mouseover', colorize));
