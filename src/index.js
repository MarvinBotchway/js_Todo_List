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

Content.appendChild(ActionArea("todo"));

Todos.forEach((todoCard) => {
  Content.appendChild(todoCard);
});
