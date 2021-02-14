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
    this.leftTasks(self.taskList);
  }

  saveTodo(task, key) {
    LocalDataHelper.saveTasks(this.taskList);
  }

  addTask() {
    if (UtilitiesHelper.getNewValue()) {
      // add task to object
      let task = new Task(UtilitiesHelper.getNewValue(), false)
      self.taskList.push(task);
      LocalDataHelper.saveTasks(self.taskList);
      // add task from html
      UtilitiesHelper.renderTask(task);
      this.leftTasks(self.taskList);
    }
  }

  deleteTask(elementId) {
    // update object
    let id = parseInt(elementId.substring(2));
    let index = self.taskList.findIndex(x => x.id === id);
    if (index > -1) {
      self.taskList.splice(index, 1);
      LocalDataHelper.saveTasks(self.taskList);
    }

    // update html
    UtilitiesHelper.deleteTask(id);
    this.leftTasks(self.taskList);

  }

  checkTask(elementId) {
    // update object
    let completed = document.getElementById(elementId).checked;
    let id = parseInt(elementId.substring(3));
    let index = self.taskList.findIndex(x => x.id === id);
    self.taskList[index].completed = completed;

    // update hmtl
    UtilitiesHelper.checkTask(id);
    self.leftTasks(self.taskList);

    // save changes in localStorage
    LocalDataHelper.saveTasks(self.taskList);
  }

  filterTasks(condition) {
    // filter elements, no need to filter list
    condition = condition.toLowerCase();
    UtilitiesHelper.filterTasks(condition);
  }

  leftTasks() {
    let left = self.taskList.filter(t => !t.completed);
    UtilitiesHelper.leftTasks(left.length);
  }

}

export class Task {
  constructor(content, completed) {
    this.id = Date.now();
    this.content = content;
    this.completed = completed;
  }
}