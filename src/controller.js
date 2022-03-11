import { Map } from './model.js';
import { View } from './view.js';
import { TraverseDOM, bubbleSort } from './util.js';

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.model.randomCreateTown();
    this.view.renderRootTown(this.model.townList);
    this.buttonClickEventHandler();
  }

  buttonClickEventHandler() {
    const postBoxBtn = TraverseDOM.querySelector(document, 'info__btn');
    const findPostBox = TraverseDOM.querySelectorAll(document, 'postbox');
    const infoTown = TraverseDOM.querySelector(document, 'info__town');
    const infoPostBox = TraverseDOM.querySelector(document, 'info__postbox');

    const postBoxInfo = [];
    postBoxBtn.addEventListener('click', () => {
      findPostBox.forEach((box) => {
        this.view.changeBorderColor(box);
        if (!infoTown.innerText) {
          postBoxInfo.push({ name: box.parentNode.firstChild.innerText, size: Number(box.dataset.postboxSize) });
        }
      });

      if (postBoxInfo.length === 0) {
        this.view.addPostBoxTownText(infoTown, postBoxInfo);
      } else {
        const postBoxNames = postBoxInfo.map((box) => box.name).join(', ');
        this.view.addPostBoxTownText(infoTown, postBoxInfo, postBoxNames);

        const sortResult = bubbleSort(postBoxInfo.slice())
          .map((box) => box.name)
          .join(', ');
        this.view.addPostBoxSortText(infoPostBox, sortResult);
      }
    });
  }
}

const model = new Map();
const view = new View();

const controller = new Controller(view, model);
controller.init();