import { clearPage, createPage, setCurrentList } from "../Page";
import { getListTodos } from "../Services";

export default function ListCard(list) {
  const listCard = document.createElement("div");
  const buttonsSection = document.createElement("div");
  const editButton = document.createElement("button");
  const todosButton = document.createElement("button");
  const title = document.createElement("h3");

  editButton.textContent = "Edit";
  todosButton.textContent = "View Todos";

  listCard.dataset.id = list.id;
  listCard.classList += "list-card card";
  title.textContent = list.title;

  listCard.appendChild(title);
  buttonsSection.appendChild(editButton);
  buttonsSection.appendChild(todosButton);
  listCard.appendChild(buttonsSection);

  todosButton.addEventListener("click", () => {
    let todos = getListTodos(list);
    clearPage();
    createPage(todos, "todo");
    setCurrentList(list);
  });

  return listCard;
}
