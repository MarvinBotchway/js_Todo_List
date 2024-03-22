import {
  deleteList,
  getListTodos,
  getTodos,
  setCurrentList,
} from "../Services";
import { clearContent, updateContent } from "../updateContent";
import AlertBar from "./AlertBar";
import FormModal from "./FormModal";

export default function ListCard(list) {
  const Header = document.getElementById("header");
  const Content = document.getElementById("content");
  const listCard = document.createElement("div");
  const buttonsSection = document.createElement("div");
  const editButton = document.createElement("button");
  const todosButton = document.createElement("button");
  const title = document.createElement("h3");
  const deleteIcon = document.createElement("span");

  deleteIcon.id = "delete-button";
  deleteIcon.classList += "material-symbols-outlined";
  deleteIcon.textContent = "delete";

  editButton.textContent = "Edit";
  todosButton.textContent = "View Todos";

  listCard.dataset.id = list.id;
  listCard.classList += "list-card card";
  title.textContent = list.title;

  listCard.appendChild(title);
  buttonsSection.appendChild(editButton);
  buttonsSection.appendChild(todosButton);
  buttonsSection.appendChild(deleteIcon);
  listCard.appendChild(buttonsSection);

  todosButton.addEventListener("click", () => {
    let Todos = getTodos();
    let todos = getListTodos(Todos, list);

    clearContent();
    updateContent(todos, "todo");
    setCurrentList(list);
  });
  editButton.addEventListener("click", () => {
    Content.appendChild(FormModal("edit-list", list));
  });

  deleteIcon.addEventListener("click", () => {
    let lists = deleteList(list);

    clearContent();
    updateContent(lists, "list");
    Header.appendChild(AlertBar(list, "list"));

    setTimeout(() => {
      const alertBar = document.getElementById("alert");
      if (alertBar) Header.removeChild(alertBar);
    }, 3000);
  });

  return listCard;
}
