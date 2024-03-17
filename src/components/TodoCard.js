import FormModal from "./FormModal";
import TodoEditForm from "./TodoEditForm";

export default function TodoCard(Todo) {
  const Content = document.getElementById("content");
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
  let todoSummary = Todo.getSummary();

  todoCard.dataset.id = todoSummary.id;
  todoCard.classList += "card";

  title.textContent = todoSummary.title;
  description.textContent = todoSummary.description;
  dueDate.textContent = todoSummary.dueDate.toString();
  priority.textContent = todoSummary.priority;
  middleContainer.id = "middle-container";
  editBtn.textContent = "Edit";
  bottomContainer.id = "bottom-container";
  btnsContainer.id = "btns-container";
  doneInput.id = "done";
  doneInput.type = "checkbox";
  deleteIcon.classList += "material-symbols-outlined";
  deleteIcon.textContent = "delete";

  editBtn.addEventListener("click", () => {
    Content.appendChild(FormModal("edit-todo", Todo));
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
