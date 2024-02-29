export default (function TodoForm() {
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
  SubmitBtn.textContent = "Add";

  Form.classList += "form todo-form";
  Form.action = "submit";
  Form.method = "post";

  TitleInput.type = "text";
  DescriptionInput.type = "text";
  DueDateInput.type = "date";
  PriorityInput.type = "text";
  SubmitBtn.type = "submit";

  TitleLabel.appendChild(TitleInput);
  Form.appendChild(TitleLabel);
  DescriptionLabel.appendChild(DescriptionInput);
  Form.appendChild(DescriptionLabel);
  DueDateLabel.appendChild(DueDateInput);
  Form.appendChild(DueDateLabel);
  PriorityLabel.appendChild(PriorityInput);
  Form.appendChild(PriorityLabel);
  Form.appendChild(SubmitBtn);

  return Form;
})();
