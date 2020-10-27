import auth from './scripts/auth';
import main from './scripts/main';
import user from './scripts/user';

export default class chat {
  constructor() {
    this.userWindow = {
      auth: new auth(
        document.querySelector('#login'),
        this.onLogin.bind(this)
      ),
      main: new main(document.querySelector('#main')),
      user: new user(document.querySelector('#chatName')),
    };

    this.userWindow.auth.show();
  }

  async onLogin(name) {
    this.userWindow.auth.hide();
    this.userWindow.main.show();
    this.userWindow.user.set(name);
  }
}
