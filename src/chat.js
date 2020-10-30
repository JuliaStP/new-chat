import auth from './scripts/auth';
import main from './scripts/main';
import user from './scripts/user';
import userList from './scripts/userList';
import ws from './scripts/ws';
import sender from './scripts/sender';
import chatWindow from './scripts/chatWindow';


export default class chat {
  constructor() {
    this.ws = new ws(`ws://${location.host}/chat/ws`,
      this.onMessage.bind(this));


    this.userWindow = {
      auth: new auth(
        document.querySelector('#login'),
        this.onLogin.bind(this)
      ),
      main: new main(document.querySelector('#main')),
      user: new user(document.querySelector('#chatName')),
      userList: new userList(document.querySelector('#chat-list')),
      sender: new sender(document.querySelector('#sender'),
        this.onSend.bind(this)),
    };

    this.userWindow.auth.show();
  }
  onSend(message) {
    this.ws.sendText(message);
    this.userWindow.sender.clear();
  }

  async onLogin(name) {
    await this.ws.connect();
    this.ws.greet(name);
    this.userWindow.auth.hide();
    this.userWindow.main.show();
    this.userWindow.user.set(name);
  }

  onMessage({ type, avatar, data }) {
    console.log(type, avatar, data);

    if (type === 'welcome') {
      this.userWindow.userList.add(avatar);
    } else if (type === 'user-list') {
      for (const item of data) {
        this.userWindow.userList.add(item);
      }
    } else if (type === 'goodbye') {
      this.userWindow.userList.remove(avatar);
    } else if (type === 'text-message') {
      this.userWindow.chatWindow.add(avatar, data.message)
    }
  }
}
