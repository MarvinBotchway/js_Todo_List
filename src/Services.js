import ListCard from "./components/ListCard.js";
import List from "./models/List.js";
import ActionArea from "./components/ActionArea.js";
import Lists from "./data/Lists.js";
import TodoCard from "./components/TodoCard.js";
import Todos from "./data/Todos.js";

const Content = document.getElementById("content");

const addList = function (list) {
  Lists.push(list);
  console.log(Lists);
  return Lists;
};

const createListCards = function (lists) {
  let listCards = [];
  console.log(Lists);
  Lists.forEach((list) => {
    listCards.push(ListCard(list));
  });

  return listCards;
};

const createTodoCards = (function () {
  let todoCards = [];
  Todos.forEach((todo) => {
    todoCards.push(TodoCard(todo.getSummary()));
  });

  return todoCards;
})();

const createListsPage = function (lists) {
  Content.appendChild(ActionArea("list"));

  createListCards(lists).forEach((listCard) => {
    Content.appendChild(listCard);
  });
};

const createTodosPage = function () {
  Content.appendChild(ActionArea("todo"));

  createTodoCards.forEach((todoCard) => {
    Content.appendChild(todoCard);
  });
};

const clearPage = function () {
  while (Content.firstChild) {
    Content.firstChild.remove();
  }
};

const changePage = function (btn, btns) {
  btns.forEach((btn) => {
    btn.classList = "";
  });
  btn.classList = "active-button";
  clearPage();
  if (btn.id == "lists-btn") {
    createListsPage(Lists);
  } else if (btn.id == "current-btn") {
    createTodosPage();
  }
};

export {
  addList,
  createListCards,
  createTodoCards,
  changePage,
  createListsPage,
  createTodosPage,
  clearPage,
};
