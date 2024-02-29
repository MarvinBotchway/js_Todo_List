export default (function ListForm() {
  const Form = document.createElement("form");
  const Label = document.createElement("label");
  const Input = document.createElement("input");
  const SubmitBtn = document.createElement("button");

  Label.textContent = "List Name";
  Form.classList += "form list-form";
  Form.action = "submit";
  Form.method = "post";
  Input.type = "text";
  SubmitBtn.type = "submit";
  SubmitBtn.textContent = "Add";

  Form.appendChild(Label);
  Form.appendChild(Input);
  Form.appendChild(SubmitBtn);

  return Form;
})();