export default class UtilitiesHelper {
  // get element from the dom and render tasks
  static renderTasks(tasks) {
    const todoList = document.getElementById("taskList");
    let view = "";

    tasks.forEach(t => {
      let checked = t.completed ? "checked" : "";
      let classDone = t.completed ? "done" : "";
      // console.log(t.id + ' checked: ' + checked + ' ' + t.completed);
      view += `<li id='${t.id}' class='show ${classDone}'>
        <input type='checkbox'
        id='cb_${t.id}' onclick='checkTask(this.id)'${checked}/>
        <p>${t.content}</p>
        <a id='a_${t.id}' href='#' onclick='deleteTask(this.id)'> X </a>         
        </li>`;
    });

    todoList.innerHTML = view;
  }

  static renderTask(task) {
    const todoList = document.getElementById("taskList");
    let view = '';
    view = `<li id='${task.id}' class='show'>
      <input type='checkbox'
      id='cb_${task.id}' onclick='checkTask(this.id)'/>
      <p>${task.content}</p>
      <a id='a_${task.id}' href='#' onclick='deleteTask(this.id)'> X </a></li>`;
    todoList.innerHTML += view;
    document.getElementById('add').value = '';
  }

  static checkTask(id) {
    document.getElementById(id).classList.toggle("done");
  }

  static deleteTask(id) {
    const todoList = document.getElementById("taskList");
    const child = document.getElementById(id);
    let index = Array.from(child.parentNode.children).indexOf(child);
    todoList.removeChild(todoList.childNodes[index]);
  }

  static getNewValue() {
    let newValue = document.getElementById("add").value;
    return newValue;
  }

  static leftTasks(left) {
    document.getElementById('tasksLeft').innerHTML = left;
  }

  static filterTasks(condition) {
    const todoList = document.getElementById("taskList");
    let nodes = Array.from(todoList.children);
    console.log(nodes.length + ' condition: ' + condition);

    if (condition === "active") {
      nodes.forEach(li => {
        if (li.classList.contains("done")) {
          li.classList.add("hide");
          li.classList.remove("show");
        } else {
          li.classList.remove("hide");
          li.classList.add("show");

        }
      });
    } else if (condition === "complete") {
      nodes.forEach(li => {
        if (li.classList.contains("done")) {
          li.classList.remove("hide");
          li.classList.add("show");

        } else {
          li.classList.add("hide");
          li.classList.remove("show");
        }
      });

    } else if (condition === "all") {
      nodes.forEach(li => {
        li.classList.remove("hide");
        li.classList.add("show");
      });
    }



  }

}