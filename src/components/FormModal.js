import { clearPage, createPage, getCurrentList } from "../Page.js";
import {
  addList,
  addTodo,
  getList,
  getListTodos,
  getLists,
  getTodos,
} from "../Services.js";
import List from "../models/List.js";
import Todo from "../models/Todo.js";
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
    const numberOfLists = getLists().length + 1;
    const ListTitle = document.querySelector("#title");
    if (ListTitle) {
      let id = numberOfLists;
      let list = new List(id, ListTitle.value);
      let lists = addList(list);
      clearPage();
      createPage(lists, "list");
    }
  });

  TodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let listId = getCurrentList().id;
    let todos = getTodos();
    let id = todos.length + 1;
    let list = getList(listId);
    let titleElement = document.getElementById("todo-title");
    let descElement = document.getElementById("todo-desc");
    let dueDateElement = document.getElementById("todo-date");
    let priorityElement = document.getElementById("todo-priority");

    if (titleElement && descElement && dueDateElement && priorityElement) {
      let title = titleElement.value;
      let desc = descElement.value;
      let dueDate = new Date(dueDateElement.value);
      console.log(dueDate);
      let priority = priorityElement.value;

      const newTodo = new Todo(id, list, title, desc, dueDate, priority);

      addTodo(newTodo);
      let listTodos = getListTodos(list);
      console.log(listTodos);
      clearPage();
      createPage(listTodos, "todo");
    }
  });

  return FormModal;
}
