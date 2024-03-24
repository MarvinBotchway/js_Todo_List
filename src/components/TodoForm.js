import { clearContent, updateContent } from "../updateContent";
import Todo from "../models/Todo";
import { getCurrentList, getList } from "../services/listServices";
import { addTodo, getListTodos, getTodos } from "../services/todoServices";
import { priorityEnum } from "../enums/priorityEnum";

export default (function TodoForm() {
  const Form = document.createElement("form");
  const TitleLabel = document.createElement("label");
  const TitleInput = document.createElement("input");
  const DescriptionLabel = document.createElement("label");
  const DescriptionInput = document.createElement("input");
  const DueDateLabel = document.createElement("label");
  const DueDateInput = document.createElement("input");
  const PriorityLabel = document.createElement("label");
  const PrioritySelect = document.createElement("select");
  const SubmitBtn = document.createElement("button");

  const SeletOption = document.createElement("option");
  const LowOption = document.createElement("option");
  const MediumOption = document.createElement("option");
  const HighOption = document.createElement("option");
  const alert = document.createElement("p");

  TitleLabel.textContent = "Title";
  DescriptionLabel.textContent = "Description";
  DueDateLabel.textContent = "Due Date";
  PriorityLabel.textContent = "Priority";
  SubmitBtn.textContent = "Add";

  Form.classList += "form todo-form";

  Form.id = "todo-form";
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

  SeletOption.value = -1;
  SeletOption.textContent = "-- select a priority --";
  LowOption.value = priorityEnum.LOW;
  LowOption.textContent = "Low";
  MediumOption.value = priorityEnum.MEDIUM;
  MediumOption.textContent = "Medium";
  HighOption.value = priorityEnum.HIGH;
  HighOption.textContent = "High";

  PrioritySelect.appendChild(SeletOption);
  PrioritySelect.appendChild(LowOption);
  PrioritySelect.appendChild(MediumOption);
  PrioritySelect.appendChild(HighOption);

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
      let todos = getTodos();
      let id = todos.length + 1;
      let list = getList(listId);
      let title = TitleInput.value;
      let desc = DescriptionInput.value;
      let dueDate = new Date(DueDateInput.value);
      let priority = PrioritySelect.value;
      let done = false;

      const newTodo = new Todo(id, list, title, desc, dueDate, priority, done);

      let newTodos = addTodo(newTodo);
      let listTodos = getListTodos(newTodos, list);
      clearContent();
      updateContent(listTodos, "todo");

      TitleInput.value = "";
      DescriptionInput.value = "";
      DueDateInput.value = "";
      PrioritySelect.value = priorityEnum.LOW;
    }
  });

  return Form;
})();
