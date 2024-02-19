export default function TodoCard(Todo) {
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

  todoCard.classList += "card";

  title.textContent = Todo.title;
  description.textContent = Todo.description;
  dueDate.textContent = Todo.dueDate.toString();
  priority.textContent = Todo.priority;
  middleContainer.id = "middle-container";
  editBtn.textContent = "Edit";
  bottomContainer.id = "bottom-container";
  btnsContainer.id = "btns-container";
  doneInput.id = "done";
  doneInput.type = "checkbox";
  deleteIcon.classList += "material-symbols-outlined";
  deleteIcon.textContent = "delete";

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
