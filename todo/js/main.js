import Todo from './todos.js';

let todo = new Todo();

window.addEventListener("load", () => {
  console.log('main.js');
  // let todo = new Todo();
  todo.renderTasks();
});

window.checkTask = todo.checkTask;
window.deleteTask = todo.deleteTask;
window.addTask = todo.addTask;
window.enterPress = todo.enterPress;
window.filter = todo.filterTasks;