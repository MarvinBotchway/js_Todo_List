import "./styles.css";
import Todos from "./Todos.js";
import ActionArea from "./ActionArea.js";
import Lists from "./Lists.js";
import Nav from "./Nav.js";

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
