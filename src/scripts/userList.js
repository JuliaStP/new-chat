export default class userList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  createDOM() {
    const template = document.createDocumentFragment();

    this.element.innerHTML = '';

    for(const name of this.items) {
      const element = document.createElement('div');
      element.classList.add('user-item'); //add to css
      element.textContent = name;
      template.append(element);
    }

    this.element.append(template);
  }

  add(name) {
    this.items.add(name);
    this.createDOM();
  }

  delete(name) {
    this.items.delete(name);
    this.createDOM();
  }
}