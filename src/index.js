import "./styles.css";
import Nav from "./components/Nav.js";
import { updateContent } from "./updateContent.js";
import { getLists } from "./services/listServices.js";
import { addDefaultData } from "./services/localStorageService.js";

const Header = document.getElementById("header");
let lists = [];
lists = getLists();

Header.appendChild(Nav.nav);

updateContent(lists, "list");
