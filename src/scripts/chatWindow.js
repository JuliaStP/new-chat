export default class chatWindow {
  constructor(element) {
    this.element = element;
  }

  add(avatar, text) {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const time = `${hours}:${minutes}`;
    const item = document.createElement('div');

    item.classList.add('text-item'); //add css
    item.innerHTML = `
    <div class="text-item">
    <div class="avatar-wrapper">
      <img class="avatar"src="" alt=""> ${avatar}
    </div>
    <div class="bubble">
      <div class="bubble-text">${text}</div>
      <div class="bubble-time">${time}</div>
    </div>
    `;

    this.element.append(item);
    this.element.scrollTop = this.element.scrollHeight;
  }
}