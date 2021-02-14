export default class Task {
  constructor(content, completed) {
    // real use
    // this.id = Date.now();
    // testing
    this.id = Date.now() + Math.floor(Math.random() * 6) + 1;
    this.content = content;
    this.completed = completed;
  }
}