export default class View {
  constructor(model, villageInfo) {
    this.model = model;
    this.villageInfo = villageInfo;
  }
  renderVillage() {
    const villageData = this.model.getVillage();

    const addTemplate = (village) => {
      let template = `<div class = 'village' style = 'width:${
        village.width
      }px; height:${village.height}px;'>
            <span>${village.name}</span>
            ${
              village.postbox.exist
                ? `<span class = 'postbox' style = 'width : ${village.postbox.size}px;'>📮</span>`
                : ''
            }
            `;

      if (village.child.length) {
        village.child.forEach((element) => (template += addTemplate(element)));
      }
      template += `</div>`;
      return template;
    };

    const villageTemplate = villageData.reduce(
      (pre, curList) => pre + addTemplate(curList),
      ''
    );

    this.villageInfo.innerHTML = villageTemplate;
  }
}
