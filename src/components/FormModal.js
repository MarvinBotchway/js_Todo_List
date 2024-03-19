import ListEditForm from "./ListEditForm.js";
import ListForm from "./ListForm.js";
import TodoEditForm from "./TodoEditForm.js";
import TodoForm from "./TodoForm.js";

export default function FormModal(type, selected = null) {
  const Content = document.getElementById("content");
  const FormModal = document.createElement("div");
  const Container = document.createElement("div");
  const Close = document.createElement("span");
  const Title = document.createElement("h2");
  const FormContainer = document.createElement("div");

  FormModal.classList += "modal";
  Container.classList += "container";
  FormContainer.classList += "form-container";
  Title.textContent = "New List";
  Close.id = "close";
  Close.classList += "material-symbols-outlined close";
  Close.textContent = "close";

  Close.onclick = function () {
    Content.removeChild(FormModal);
  };

  window.onclick = function (e) {
    if (e.target.classList == "modal") {
      Content.removeChild(FormModal);
    }
  };

  Container.appendChild(Close);
  Container.appendChild(Title);

  if (type == "list") {
    FormContainer.appendChild(ListForm);
  } else if (type == "edit-list") {
    FormContainer.appendChild(ListEditForm(selected));
  } else if (type == "todo") {
    FormContainer.appendChild(TodoForm);
  } else if (type == "edit-todo") {
    FormContainer.appendChild(TodoEditForm(selected));
  }
  Container.appendChild(FormContainer);
  FormModal.appendChild(Container);

  return FormModal;
}
