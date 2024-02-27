import "./styles.css";
import Todos from "./controllers/TodosController.js";
import ActionArea from "./components/ActionArea.js";
import Lists from "./controllers/ListsController.js";
import Nav from "./components/Nav.js";
import ListFormModal from "./components/ListFormModal.js";

const Content = document.getElementById("content");
const Header = document.getElementById("header");

Header.appendChild(Nav);

Content.appendChild(ActionArea("list"));

Lists.forEach((listCard) => {
  Content.appendChild(listCard);
});

Nav.childNodes.forEach((btn, i, btns) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList = "";
    });
    btn.classList = "active-button";
    showPage(btn.id);
  });
});

function showPage(id) {
  while (Content.firstChild) {
    Content.firstChild.remove();
  }
  if (id == "lists-btn") {
    Content.appendChild(ActionArea("list"));

    Lists.forEach((listCard) => {
      Content.appendChild(listCard);
    });
  } else if (id == "current-btn") {
    Content.appendChild(ActionArea("todo"));

    Todos.forEach((todoCard) => {
      Content.appendChild(todoCard);
    });
  }
}

const addBtn = document.getElementById("add-list");

addBtn.addEventListener("click", () => {
  Content.appendChild(ListFormModal);

  const Close = document.getElementById("close");
  const Modal = document.querySelector(".modal");

  Close.onclick = function () {
    Content.removeChild(ListFormModal);
  };

  window.onclick = function (e) {
    if (e.target == Modal) {
      Content.removeChild(ListFormModal);
    }
  };
});
