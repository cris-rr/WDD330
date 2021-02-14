import LocalDataHelper from './ls.js';
import UtilitiesHelper from './utilities.js';

export default class Todo {
  self = null;
  constructor() {
    this.taskList = LocalDataHelper.getTasks();
    self = this;
  }

  renderTasks() {
    UtilitiesHelper.renderTasks(this.taskList);
  }

  saveTodo(task, key) {
    console.log('saveTodo')
  }

  addTask() {
    if (UtilitiesHelper.getNewValue()) {
      // add task to object
      let task = new Task(UtilitiesHelper.getNewValue(), false)
      self.taskList.push(task);

      // add task from html
      UtilitiesHelper.renderTask(task);
    }
  }

  deleteTask(elementId) {
    // update object
    console.log(self.taskList);
    let id = parseInt(elementId.substring(2));
    let index = self.taskList.findIndex(x => x.id === id);
    if (index > -1) {
      self.taskList.splice(index, 1);
    }
    console.log(self.taskList);

    // update html
    UtilitiesHelper.deleteTask(id);

  }

  checkTask(elementId) {
    // update object
    let completed = document.getElementById(elementId).checked;
    let id = parseInt(elementId.substring(3));
    let index = self.taskList.findIndex(x => x.id === id);
    self.taskList[index].completed = completed;
    console.log('id: ' + id);

    // update hmtl
    UtilitiesHelper.checkTask(id);
  }

  filterTasks(condition) {
    // filter elements, no need to filter list
    condition = condition.toLowerCase();
    UtilitiesHelper.filterTasks(condition);
  }

}

export class Task {
  constructor(content, completed) {
    this.id = Date.now();
    this.content = content;
    this.completed = completed;
  }
}