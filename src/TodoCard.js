export default function TodoCard(Todo) {
  const todoCard = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const bottomContainer = document.createElement("div");

  todoCard.classList += "card";

  title.textContent = Todo.title;
  description.textContent = Todo.description;
  dueDate.textContent = Todo.dueDate.toString();
  priority.textContent = Todo.priority;
  bottomContainer.id = "bottom-container";

  bottomContainer.append(dueDate);
  bottomContainer.append(priority);

  todoCard.append(title);
  todoCard.append(description);
  todoCard.append(bottomContainer);

  return todoCard;
}
