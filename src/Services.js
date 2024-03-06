import ListCard from "./components/ListCard.js";
import ActionArea from "./components/ActionArea.js";
import Lists from "./data/Lists.js";
import TodoCard from "./components/TodoCard.js";
import Todos from "./data/Todos.js";

const Content = document.getElementById("content");

const addList = function (list) {
  Lists.push(list);
  return Lists;
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

  clearPage();
  if (btn.id == "lists-btn") createPage(Lists, "list");
  else if (btn.id == "current-btn") createPage(Todos, "todo");
};

export { addList, createCards, changePage, createPage, clearPage };
