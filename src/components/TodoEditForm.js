import { clearContent, updateContent } from "../updateContent";
import {
  getCurrentList,
  getDateForInput,
  getList,
  getListTodos,
  getTodaysTodos,
  updateTodo,
} from "../Services";
import Todo from "../models/Todo";
import Nav from "./Nav";

export default function TodoEditForm(selectedTodo) {
  const Form = document.createElement("form");
  const TitleLabel = document.createElement("label");
  const TitleInput = document.createElement("input");
  const DescriptionLabel = document.createElement("label");
  const DescriptionInput = document.createElement("input");
  const DueDateLabel = document.createElement("label");
  const DueDateInput = document.createElement("input");
  const PriorityLabel = document.createElement("label");
  const PriorityInput = document.createElement("input");
  const SubmitBtn = document.createElement("button");

  TitleLabel.textContent = "Title";
  DescriptionLabel.textContent = "Description";
  DueDateLabel.textContent = "Due Date";
  PriorityLabel.textContent = "Priority";
  SubmitBtn.textContent = "Update";

  Form.classList += "form todo-form";

  TitleInput.id = "todo-title";
  TitleInput.type = "text";
  DescriptionInput.id = "todo-desc";
  DescriptionInput.type = "text";
  DueDateInput.id = "todo-date";
  DueDateInput.type = "date";
  PriorityInput.id = "todo-priority";
  PriorityInput.type = "text";
  SubmitBtn.type = "submit";

  TitleInput.value = selectedTodo.title;
  DescriptionInput.value = selectedTodo.description;
  DueDateInput.value = getDateForInput(selectedTodo);
  PriorityInput.value = selectedTodo.priority;

  TitleLabel.appendChild(TitleInput);
  Form.appendChild(TitleLabel);
  DescriptionLabel.appendChild(DescriptionInput);
  Form.appendChild(DescriptionLabel);
  DueDateLabel.appendChild(DueDateInput);
  Form.appendChild(DueDateLabel);
  PriorityLabel.appendChild(PriorityInput);
  Form.appendChild(PriorityLabel);
  Form.appendChild(SubmitBtn);

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let listId = getCurrentList().id;
    let id = selectedTodo.id;
    let list = getList(listId);
    let title = TitleInput.value;
    let desc = DescriptionInput.value;
    let dueDate = new Date(DueDateInput.value);
    let priority = PriorityInput.value;

    const newTodo = new Todo(id, list, title, desc, dueDate, priority);

    let todos = updateTodo(newTodo);
    let listTodos = [];

    if (Nav.todayBtn.className == "active-button") {
      listTodos = getTodaysTodos();
    } else {
      listTodos = getListTodos(todos, list);
    }

    clearContent();
    updateContent(listTodos, "todo");

    TitleInput.value = "";
    DescriptionInput.value = "";
    DueDateInput.value = "";
    PriorityInput.value = "";
  });

  return Form;
}
