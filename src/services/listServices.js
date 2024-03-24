import {
  getDataFromLocalStorage,
  updateDataInLocalStorage,
} from "./localStorageService";

let currentList = {};
let Lists = getDataFromLocalStorage("list");
let Todos = getDataFromLocalStorage("todo");

const addList = function (list) {
  Lists.push(list);
  updateDataInLocalStorage(Lists, "list");
  return getDataFromLocalStorage("list");
};

const updateList = function (newList) {
  Lists.forEach((list) => {
    if (list.id == newList.id) {
      list.title = newList.title;
    }
  });

  updateDataInLocalStorage(Lists, "list");
  return getDataFromLocalStorage("list");
};

const getLists = function () {
  let lists = getDataFromLocalStorage("list");
  return lists;
};

const getList = function (id) {
  let list = {};
  let lists = getDataFromLocalStorage("list");

  lists.forEach((item) => {
    if (item.id == id) list = item;
  });

  return list;
};

const deleteList = function (selectedList) {
  let updatedLists = [];
  let deletedTodos = [];
  Lists.forEach((list, i) => {
    if (list.id == selectedList.id) {
      Lists.splice(i, 1);
    }
  });

  Todos.forEach((todo, i) => {
    if (todo.list.id == selectedList.id) {
      deletedTodos.push(todo);
      Todos.splice(i, 1);
    }
  });

  updateDataInLocalStorage(Lists, "list");
  updateDataInLocalStorage(Todos, "todo");
  updatedLists = getDataFromLocalStorage("list");
  return [updatedLists, deletedTodos];
};

const setCurrentList = function (list) {
  currentList = list;
};

const getCurrentList = function () {
  return currentList;
};
export {
  addList,
  updateList,
  getList,
  getLists,
  deleteList,
  setCurrentList,
  getCurrentList,
};
