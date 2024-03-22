import {
  deleteTodo,
  getListOrTodayTodos,
  getTodos,
  updateTodo,
} from "../Services";
import Todo from "../models/Todo";
import { clearContent, updateContent } from "../updateContent";
import AlertBar from "./AlertBar";
import FormModal from "./FormModal";

export default function TodoCard(todo) {
  const Content = document.getElementById("content");
  const Header = document.getElementById("header");
  const todoCard = document.createElement("div");
  const title = document.createElement("h3");
  const middleContainer = document.createElement("div");
  const description = document.createElement("p");
  const editBtn = document.createElement("button");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const bottomContainer = document.createElement("div");
  const btnsContainer = document.createElement("div");
  const doneInput = document.createElement("input");
  const deleteIcon = document.createElement("span");

  todo = new Todo(
    todo.id,
    todo.list,
    todo.title,
    todo.description,
    new Date(todo.dueDate),
    todo.priority,
    todo.done
  );
  let todoSummary = todo.getSummary();

  todoCard.dataset.id = todoSummary.id;
  todoCard.classList += "card";

  title.textContent = todoSummary.title;
  description.textContent = todoSummary.description;
  dueDate.textContent = todoSummary.dueDate.toString();
  priority.textContent = todoSummary.priority;
  doneInput.checked = todoSummary.done;

  middleContainer.id = "middle-container";
  editBtn.textContent = "Edit";
  bottomContainer.id = "bottom-container";
  btnsContainer.id = "btns-container";
  doneInput.id = "done";
  doneInput.type = "checkbox";
  deleteIcon.id = "delete-button";
  deleteIcon.classList += "material-symbols-outlined";
  deleteIcon.textContent = "delete";

  if (todo.done) title.classList += "cancel";

  doneInput.addEventListener("change", (e) => {
    if (e.currentTarget.checked) {
      todo.done = true;
      title.classList += "cancel";
    } else {
      todo.done = false;
      title.classList = "";
    }
    updateTodo(todo);
  });

  editBtn.addEventListener("click", () => {
    Content.appendChild(FormModal("edit-todo", todo));
  });

  deleteIcon.addEventListener("click", () => {
    let todos = deleteTodo(todo);

    todos = getListOrTodayTodos(todos, todo.list);

    clearContent();
    updateContent(todos, "todo");
    Header.appendChild(AlertBar(todo, "todo"));

    setTimeout(() => {
      const alertBar = document.getElementById("alert");
      if (alertBar) Header.removeChild(alertBar);
    }, 3000);
  });

  middleContainer.append(description);
  middleContainer.append(editBtn);

  bottomContainer.append(dueDate);
  bottomContainer.append(priority);

  btnsContainer.append(doneInput);
  btnsContainer.append(deleteIcon);

  bottomContainer.append(btnsContainer);

  todoCard.append(title);
  todoCard.append(middleContainer);
  todoCard.append(bottomContainer);

  return todoCard;
}
