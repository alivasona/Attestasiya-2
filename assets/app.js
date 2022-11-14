class Message {
    constructor(author, text) {
      this.author = author;
      this.text = text;
      this.time = this.gettime();
    }
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
    toString() {
      return `${this.time} ${this.author}: ${this.text}`;
    }
  }
  class Messenger {
    newArr = [];
    send(author, text) {
      let msg = new Message(author, text);
      let result = `${msg.time} ${msg.author}: ${msg.text}`;
      this.newArr.push(result);
      return result;
    }
    show_history() {
      this.newArr.forEach((msg) => {
        console.log(msg);
      });
    }
  }
  let messenger = new Messenger();
  messenger.send("adil", "salam");
  messenger.send("meryem", "salamm");
  messenger.show_history();