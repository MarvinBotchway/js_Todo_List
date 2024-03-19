import "./styles.css";
import Nav from "./components/Nav.js";
import { updateContent } from "./updateContent.js";
import Lists from "./data/Lists.js";

const Header = document.getElementById("header");

Header.appendChild(Nav.nav);

updateContent(Lists, "list");
