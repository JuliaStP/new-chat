export default class sender {
  constructor(element, onSend) {
    this.onSend = onSend;
    this.textInput = element.querySelector('#textInput ');
    this.sendTextBtn = element.querySelector('#sendTextBtn');

    this.sendTextBtn.addEventListener('click', () => {
      const text = this.textInput.value.trim();

      if(text) {
        this.onSend(text)
      }
    });
  }

  clear() {
    this.textInput.value = '';
  }
}