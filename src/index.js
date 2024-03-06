import "./styles.css";
import Nav from "./components/Nav.js";
import { changePage, createPage } from "./Services.js";
import Lists from "./data/Lists.js";

const Header = document.getElementById("header");

Header.appendChild(Nav);

createPage(Lists, "list");

Nav.childNodes.forEach((btn, i, btns) => {
  btn.addEventListener("click", () => changePage(btn, btns));
});
