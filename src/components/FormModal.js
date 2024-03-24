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

  Close.id = "close";
  Close.classList += "material-symbols-outlined close";
  Close.textContent = "close";

  Close.onclick = function () {
    let listForm = document.getElementById("list-form");
    let listEditForm = document.getElementById("list-edit-form");
    let addedAlert = document.getElementById("list-name-alert");
    if (addedAlert) {
      if (listForm) listForm.removeChild(addedAlert);
      else if (listEditForm) listEditForm.removeChild(addedAlert);
    }

    let todoForm = document.getElementById("todo-form");
    let todoEditForm = document.getElementById("todo-edit-form");
    let todoAlert = document.getElementById("todo-alert");
    if (todoAlert) {
      if (todoForm) todoForm.removeChild(todoAlert);
      else if (todoEditForm) todoEditForm.removeChild(todoAlert);
    }
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
    Title.textContent = "New List";
  } else if (type == "edit-list") {
    FormContainer.appendChild(ListEditForm(selected));
    Title.textContent = "Edit List";
  } else if (type == "todo") {
    FormContainer.appendChild(TodoForm);
    Title.textContent = "New Todo";
  } else if (type == "edit-todo") {
    FormContainer.appendChild(TodoEditForm(selected));
    Title.textContent = "Edit Todo";
  }
  Container.appendChild(FormContainer);
  FormModal.appendChild(Container);

  return FormModal;
}
