import "./styles.css";
import Nav from "./components/Nav.js";
import { updateContent } from "./updateContent.js";
import { addDefaultData, getLists } from "./Services.js";

const Header = document.getElementById("header");
let lists = [];
lists = getLists();

addDefaultData();

Header.appendChild(Nav.nav);

updateContent(lists, "list");
