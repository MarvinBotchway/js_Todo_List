import { getListTodos, setCurrentList } from "../Services";
import Todos from "../data/Todos";
import { clearContent, updateContent } from "../updateContent";
import FormModal from "./FormModal";

export default function ListCard(list) {
  const Content = document.getElementById("content");
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
    let todos = getListTodos(Todos, list);
    clearContent();
    updateContent(todos, "todo");
    setCurrentList(list);
  });
  editButton.addEventListener("click", () => {
    Content.appendChild(FormModal("edit-list", list));
  });

  return listCard;
}
