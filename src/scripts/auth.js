export default class auth {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = document.querySelector('#loginName');
    const loginNickInput = document.querySelector('#loginNick');
    const submitButton = document.querySelector('#loginBtn');
    const authError = element.querySelector('#error');

    submitButton.addEventListener('click', () => {
      debugger;
      authError.textContent = '';

      const name = loginNameInput.value.trim();
      const nick = loginNickInput.value.trim();

      if (!name || !nick) {
        authError.textContent = 'Введите данные';
      } else {
        this.onLogin(name, nick);
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}

console.log('IN AUTH');