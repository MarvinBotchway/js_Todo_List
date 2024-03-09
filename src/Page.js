import ListCard from "./components/ListCard.js";
import Nav from "./components/Nav.js";
import ActionArea from "./components/ActionArea.js";
import TodoCard from "./components/TodoCard.js";
import Todos from "./data/Todos.js";
import Lists from "./data/Lists.js";
import { getTodaysTodos } from "./Services.js";

const Content = document.getElementById("content");
const Header = document.getElementById("header");
let currentList = {};

const addNav = () => {
  Header.appendChild(Nav);
  Nav.childNodes.forEach((btn, i, btns) => {
    btn.addEventListener("click", () => changePage(btn, btns));
  });
};

const createCards = function (items, type) {
  let cards = [];
  items.forEach((item) => {
    if (type == "list") cards.push(ListCard(item));
    else cards.push(TodoCard(item.getSummary()));
  });

  return cards;
};

const createPage = function (items, type) {
  Content.appendChild(ActionArea(type));
  createCards(items, type).forEach((itemCard) => {
    Content.appendChild(itemCard);
  });
};

const clearPage = function () {
  while (Content.firstChild) Content.firstChild.remove();
};

const changePage = function (btn, btns) {
  btns.forEach((btn) => {
    btn.classList = "";
  });
  btn.classList = "active-button";
  let todos = getTodaysTodos();
  clearPage();
  if (btn.id == "lists-btn") createPage(Lists, "list");
  else if (btn.id == "current-btn") createPage(todos, "todo");
};

const setCurrentList = function (list) {
  currentList = list;
};

const getCurrentList = function () {
  return currentList;
};

export {
  addNav,
  createCards,
  createPage,
  clearPage,
  changePage,
  setCurrentList,
  getCurrentList,
};
