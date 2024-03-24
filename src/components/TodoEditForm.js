import { clearContent, updateContent } from "../updateContent";
import {
  getDateForInput,
  getListOrTodayTodos,
  updateTodo,
} from "../services/todoServices";
import Todo from "../models/Todo";
import { getCurrentList, getList } from "../services/listServices";
import { priorityEnum } from "../enums/priorityEnum";

export default function TodoEditForm(selectedTodo) {
  const Form = document.createElement("form");
  const TitleLabel = document.createElement("label");
  const TitleInput = document.createElement("input");
  const DescriptionLabel = document.createElement("label");
  const DescriptionInput = document.createElement("input");
  const DueDateLabel = document.createElement("label");
  const DueDateInput = document.createElement("input");
  const PriorityLabel = document.createElement("label");
  const PrioritySelect = document.createElement("select");
  const LowOption = document.createElement("option");
  const MediumOption = document.createElement("option");
  const HighOption = document.createElement("option");
  const SubmitBtn = document.createElement("button");
  const alert = document.createElement("p");

  TitleLabel.textContent = "Title";
  DescriptionLabel.textContent = "Description";
  DueDateLabel.textContent = "Due Date";
  PriorityLabel.textContent = "Priority";
  SubmitBtn.textContent = "Update";

  Form.classList += "form todo-form";

  alert.id = "todo-alert";
  alert.textContent = "Please fill in the entire form.";
  alert.style.color = "red";
  alert.style.padding = "1rem";

  TitleInput.id = "todo-title";
  TitleInput.type = "text";
  DescriptionInput.id = "todo-desc";
  DescriptionInput.type = "text";
  DueDateInput.id = "todo-date";
  DueDateInput.type = "date";
  PrioritySelect.id = "priority-select";
  SubmitBtn.type = "submit";

  TitleInput.value = selectedTodo.title;
  DescriptionInput.value = selectedTodo.description;
  DueDateInput.value = getDateForInput(selectedTodo);

  LowOption.value = priorityEnum.LOW;
  LowOption.textContent = "Low";
  MediumOption.value = priorityEnum.MEDIUM;
  MediumOption.textContent = "Medium";
  HighOption.value = priorityEnum.HIGH;
  HighOption.textContent = "High";

  PrioritySelect.appendChild(LowOption);
  PrioritySelect.appendChild(MediumOption);
  PrioritySelect.appendChild(HighOption);

  PrioritySelect.childNodes.forEach((option) => {
    if (option.value == selectedTodo.priority) {
      option.setAttribute("selected", true);
    }
  });

  TitleLabel.appendChild(TitleInput);
  Form.appendChild(TitleLabel);
  DescriptionLabel.appendChild(DescriptionInput);
  Form.appendChild(DescriptionLabel);
  DueDateLabel.appendChild(DueDateInput);
  Form.appendChild(DueDateLabel);
  PriorityLabel.appendChild(PrioritySelect);
  Form.appendChild(PriorityLabel);
  Form.appendChild(SubmitBtn);

  Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let addedAlert = document.getElementById("todo-alert");
    if (addedAlert) Form.removeChild(addedAlert);

    TitleInput.value = TitleInput.value.trim();
    DescriptionInput.value = DescriptionInput.value.trim();

    if (
      TitleInput.value.length < 1 ||
      DescriptionInput.value.length < 1 ||
      DueDateInput.value.length < 1 ||
      PrioritySelect.value < 0
    ) {
      Form.appendChild(alert);
    } else {
      let listId = getCurrentList().id;
      let id = selectedTodo.id;
      let list = getList(listId);
      let title = TitleInput.value;
      let desc = DescriptionInput.value;
      let dueDate = new Date(DueDateInput.value);
      let priority = PrioritySelect.value;
      let done = selectedTodo.done;

      const newTodo = new Todo(id, list, title, desc, dueDate, priority, done);

      let todos = updateTodo(newTodo);
      todos = getListOrTodayTodos(todos, list);

      clearContent();
      updateContent(todos, "todo");

      TitleInput.value = "";
      DescriptionInput.value = "";
      DueDateInput.value = "";
      PrioritySelect.value = "";
    }
  });

  return Form;
}
