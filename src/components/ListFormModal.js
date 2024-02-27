import List from "../models/List";

export default (function ListFormModal() {
  const FormModal = document.createElement("div");
  const Container = document.createElement("div");
  const FormContainer = document.createElement("div");
  const Close = document.createElement("span");
  const Title = document.createElement("h2");
  const ListForm = document.createElement("form");
  const Label = document.createElement("label");
  const Input = document.createElement("input");
  const SubmitBtn = document.createElement("button");

  FormModal.classList += "modal";
  Container.classList += "container";
  FormContainer.classList += "form-container";
  Title.textContent = "New List";
  Close.id = "close";
  Close.classList += "material-symbols-outlined close";
  Close.textContent = "close";
  Label.textContent = "List Name";
  ListForm.classList += "list-form";
  ListForm.action = "submit";
  ListForm.method = "post";
  Input.type = "text";
  SubmitBtn.type = "submit";
  SubmitBtn.textContent = "Add";

  Container.appendChild(Close);
  Container.appendChild(Title);
  FormContainer.appendChild(ListForm);
  ListForm.appendChild(Label);
  ListForm.appendChild(Input);
  ListForm.appendChild(SubmitBtn);
  Container.appendChild(FormContainer);
  FormModal.appendChild(Container);

  return FormModal;
})();
