import Nav from "../components/Nav.js";
import Todo from "../models/Todo.js";
import {
  getDataFromLocalStorage,
  updateDataInLocalStorage,
} from "./localStorageService.js";

let Todos = getDataFromLocalStorage("todo");

const addTodo = function (todo) {
  Todos.push(todo);
  updateDataInLocalStorage(Todos, "todo");
  return getDataFromLocalStorage("todo");
};

const updateTodo = function (newTodo) {
  Todos.forEach((todo) => {
    if (todo.id == newTodo.id) {
      todo.title = newTodo.title;
      todo.description = newTodo.description;
      todo.dueDate = newTodo.dueDate;
      todo.priority = newTodo.priority;
      todo.done = newTodo.done;
    }
  });
  updateDataInLocalStorage(Todos, "todo");
  return getDataFromLocalStorage("todo");
};

const deleteTodo = function (selectedTodo) {
  Todos.forEach((todo, i) => {
    if (todo.id == selectedTodo.id) {
      Todos.splice(i, 1);
    }
  });
  updateDataInLocalStorage(Todos, "todo");
  return getDataFromLocalStorage("todo");
};

const getListTodos = function (todos, list) {
  let listTodos = [];

  todos.forEach((todo) => {
    if (todo.list.id == list.id) {
      listTodos.push(todo);
    }
  });
  return listTodos;
};

const getTodaysTodos = function () {
  let todos = [];
  Todos.forEach((todo) => {
    todo = new Todo(
      todo.id,
      todo.list,
      todo.title,
      todo.description,
      new Date(todo.dueDate),
      todo.priority,
      todo.done
    );

    let today = new Date().toDateString();
    if (todo.dueDate.toDateString() == today) {
      todos.push(todo);
    }
  });

  return todos;
};

const getTodos = function () {
  let todos = getDataFromLocalStorage("todo");
  return todos;
};

function getDateForInput(selectedTodo) {
  let dueDate = "";
  let day = selectedTodo.dueDate.getDate();
  let month = selectedTodo.dueDate.getMonth() + 1;
  let year = selectedTodo.dueDate.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  dueDate = year + "-" + month + "-" + day;
  return dueDate;
}

const getListOrTodayTodos = function (todos, list) {
  if (Nav.todayBtn.className == "active-button") {
    todos = getTodaysTodos();
  } else {
    todos = getListTodos(todos, list);
  }

  return todos;
};

export {
  getListTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodaysTodos,
  getTodos,
  getDateForInput,
  getListOrTodayTodos,
};
