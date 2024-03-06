import { clearPage, createPage } from "../Page";
import { getListTodos } from "../Services";

export default function ListCard(list) {
  const listCard = document.createElement("div");
  const title = document.createElement("h3");

  listCard.classList += "list-card card";
  title.textContent = list.title;

  listCard.appendChild(title);

  listCard.addEventListener("click", () => {
    let todos = getListTodos(list);
    clearPage();
    createPage(todos, "todo");
  });

  return listCard;
}
