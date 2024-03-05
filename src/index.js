import "./styles.css";
import Nav from "./components/Nav.js";
import ActionArea from "./components/ActionArea.js";
import { changePage, createListCards } from "./Services.js";
import Lists from "./data/Lists.js";

const Header = document.getElementById("header");
const Content = document.getElementById("content");

Header.appendChild(Nav);
Content.appendChild(ActionArea("list"));

createListCards(Lists).forEach((listCard) => {
  Content.appendChild(listCard);
});

Nav.childNodes.forEach((btn, i, btns) => {
  btn.addEventListener("click", () => changePage(btn, btns));
});
