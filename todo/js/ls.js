import Task from './task.js';

export default class LocalDataHelper {

  static getTasks() {
    var todoList = []
    // test data
    // todoList.push(new Task('new task 1', false));
    // todoList.push(new Task('Testing task', true));
    // todoList.push(new Task('Another test task', false));
    // todoList.push(new Task('Check wdd final notes', true));

    // get data from localStorage

    todoList = JSON.parse(localStorage.getItem('tasks'));

    return todoList
  }

  static saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}