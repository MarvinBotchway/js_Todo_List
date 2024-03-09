import { getLists } from "../Services";

export default (function TodoForm() {
  const Form = document.createElement("form");

  const ListLabel = document.createElement("label");
  const ListSelect = document.createElement("select");

  const TitleLabel = document.createElement("label");
  const TitleInput = document.createElement("input");

  const DescriptionLabel = document.createElement("label");
  const DescriptionInput = document.createElement("input");

  const DueDateLabel = document.createElement("label");
  const DueDateInput = document.createElement("input");

  const PriorityLabel = document.createElement("label");
  const PriorityInput = document.createElement("input");

  const SubmitBtn = document.createElement("button");

  getLists().forEach((list) => {
    let listOption = document.createElement("option");
    listOption.value = list.id;
    listOption.text = list.title;
    ListSelect.add(listOption);
  });
  ListLabel.textContent = "List";

  TitleLabel.textContent = "Title";
  DescriptionLabel.textContent = "Description";
  DueDateLabel.textContent = "Due Date";
  PriorityLabel.textContent = "Priority";
  SubmitBtn.textContent = "Add";

  Form.classList += "form todo-form";

  ListSelect.id = "todo-list";
  ListSelect.value = 1;

  TitleInput.id = "todo-title";
  TitleInput.type = "text";

  DescriptionInput.id = "todo-desc";
  DescriptionInput.type = "text";

  DueDateInput.id = "todo-date";
  DueDateInput.type = "date";

  PriorityInput.id = "todo-priority";
  PriorityInput.type = "text";

  SubmitBtn.type = "submit";

  ListLabel.appendChild(ListSelect);
  Form.appendChild(ListLabel);
  TitleLabel.appendChild(TitleInput);
  Form.appendChild(TitleLabel);
  DescriptionLabel.appendChild(DescriptionInput);
  Form.appendChild(DescriptionLabel);
  DueDateLabel.appendChild(DueDateInput);
  Form.appendChild(DueDateLabel);
  PriorityLabel.appendChild(PriorityInput);
  Form.appendChild(PriorityLabel);
  Form.appendChild(SubmitBtn);

  return { Form, ListSelect };
})();
