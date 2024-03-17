import Lists from "./data/Lists.js";
import Todos from "./data/Todos.js";

const addList = function (list) {
  Lists.push(list);
  return Lists;
};

const updateList = function (newList) {
  Lists.forEach((list) => {
    if (list.id == newList.id) {
      list.title = newList.title;
    }
  });
  return Lists;
};

const addTodo = function (todo) {
  Todos.push(todo);
  return Todos;
};
const updateTodo = function (newTodo) {
  Todos.forEach((todo) => {
    if (todo.id == newTodo.id) {
      todo.title = newTodo.title;
      todo.description = newTodo.description;
      todo.dueDate = newTodo.dueDate;
      todo.priority = newTodo.priority;
    }
  });
  return Todos;
};
const getLists = function () {
  return Lists;
};

const getList = function (id) {
  let list = {};

  Lists.forEach((item) => {
    if (item.id == id) list = item;
  });

  return list;
};

const getListTodos = function (todos, list) {
  let listTodos = [];

  todos.forEach((todo) => {
    if (todo.list == list) {
      listTodos.push(todo);
    }
  });
  return listTodos;
};

const getTodaysTodos = function () {
  let todos = [];
  Todos.forEach((todo) => {
    let today = new Date().toDateString();
    if (todo.dueDate.toDateString() == today) {
      todos.push(todo);
    }
  });
  return todos;
};
const getTodos = function () {
  return Todos;
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
export {
  addList,
  getList,
  getLists,
  updateList,
  getListTodos,
  addTodo,
  updateTodo,
  getTodaysTodos,
  getTodos,
  getDateForInput,
};
