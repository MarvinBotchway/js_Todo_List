import { clearPage, createPage } from "../Page.js";
import { addList } from "../Services.js";
import List from "../models/List.js";
import ListForm from "./ListForm.js";
import TodoForm from "./TodoForm.js";

export default function FormModal(type) {
  const Content = document.getElementById("content");
  const FormModal = document.createElement("div");
  const Container = document.createElement("div");
  const Close = document.createElement("span");
  const Title = document.createElement("h2");
  const FormContainer = document.createElement("div");
  const addBtn = document.querySelector(".add-btn");

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

  if (type == "list") FormContainer.appendChild(ListForm);
  else FormContainer.appendChild(TodoForm);

  Container.appendChild(FormContainer);
  FormModal.appendChild(Container);

  ListForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ListTitle = document.querySelector("#title");
    if (ListTitle) {
      let list = new List(ListTitle.value);
      let lists = addList(list);
      clearPage();
      createPage(lists, "list");
    }
  });

  return FormModal;
}
