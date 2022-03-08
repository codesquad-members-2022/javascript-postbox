const $townMap = document.querySelector('#town-map');

const JUSTIFY_CONTENT = {
  0: 'center',
  1: 'space-between',
  2: 'space-evenly',
  3: 'start',
};

const ALIGN_ITEMS = {
  0: 'center',
  1: 'start',
  2: 'end',
  3: 'stretch',
};

const FLEX_DIRECTION = {
  0: 'column',
  1: 'row',
};

const LAYER_SIZE = {
  0: getRandomNumber(280, 320),
  1: getRandomNumber(80, 200),
  2: getRandomNumber(40, 60),
  3: getRandomNumber(10, 15),
};

const LAYER_COLOR = {
  0: 'red',
  1: 'blue',
  2: 'green',
  3: 'tomato',
};
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function getLocation($element) {
  $element.style.justifyContent = JUSTIFY_CONTENT[getRandomNumber(0, 3)];
  $element.style.alignItems = ALIGN_ITEMS[getRandomNumber(0, 3)];
  $element.style.flexDirection = FLEX_DIRECTION[getRandomNumber(0, 1)];
}

function renderChild($child, $parentNode, layer) {
  $child.style.width = `${LAYER_SIZE[layer]}px`;
  $child.style.height = `${LAYER_SIZE[layer]}px`;
  // $child.style.margin = '5%';
  $child.style.border = `1px solid ${LAYER_COLOR[layer]}`;
  $child.classList.add('town');
  $parentNode.appendChild($child);
}

function renderTown($parentNode, layer) {
  if (layer > 3) {
    return;
  }
  getLocation($parentNode);
  const townNumber = getRandomNumber(0, 2);
  for (let i = 0; i < townNumber + 1; i++) {
    console.log(`${layer}층: ${i}`);
    const $child = document.createElement('div');
    renderChild($child, $parentNode, layer);

    // 자식을 렌더링하는 함수
    // 렌더링할 마을 개수: 0~2
    renderTown($child, layer + 1);
  }
}

function init() {
  renderTown($townMap, 0);
}

window.addEventListener('DOMContentLoaded', init);