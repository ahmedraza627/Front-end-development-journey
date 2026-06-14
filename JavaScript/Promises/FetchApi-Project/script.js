class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name}, You have subscribed the channel..`);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`You have unsubscribed the channel..`);
  }
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}

class user {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

let sheryians = new YoutubeChannel();
let user1 = new user("Ahmed Raza")

sheryians.subscribe(user1)