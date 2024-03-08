import Lists from "./data/Lists.js";
import Todos from "./data/Todos.js";

const addList = function (list) {
  Lists.push(list);
  return Lists;
};

const addTodo = function (todo) {
  Todos.push(todo);
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

const getListTodos = function (list) {
  let todos = [];
  Todos.forEach((todo) => {
    if (todo.list == list) {
      todos.push(todo);
    }
  });
  return todos;
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
export {
  addList,
  getList,
  getLists,
  getListTodos,
  addTodo,
  getTodaysTodos,
  getTodos,
};
