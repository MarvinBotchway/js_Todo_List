import Nav from "./components/Nav.js";
import Lists from "./data/Lists.js";
import Todos from "./data/Todos.js";

let currentList = {};

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

const deleteList = function (selectedList) {
  Lists.forEach((list, i) => {
    if (list.id == selectedList.id) {
      Lists.splice(i, 1);
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

const deleteTodo = function (selectedTodo) {
  Todos.forEach((todo, i) => {
    if (todo.id == selectedTodo.id) {
      Todos.splice(i, 1);
    }
  });
  return Todos;
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

  console.log(todos);
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

const setCurrentList = function (list) {
  currentList = list;
};

const getCurrentList = function () {
  return currentList;
};

const getListOrTodayTodos = function (todos, list) {
  if (Nav.todayBtn.className == "active-button") {
    todos = getTodaysTodos();
  } else {
    todos = getListTodos(todos, list);
  }

  return todos;
};

export {
  addList,
  getList,
  getLists,
  updateList,
  deleteList,
  getListTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodaysTodos,
  getTodos,
  getDateForInput,
  setCurrentList,
  getCurrentList,
  getListOrTodayTodos,
};
