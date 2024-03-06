import "./styles.css";
import { addNav, createPage } from "./Page.js";
import Lists from "./data/Lists.js";

addNav();
createPage(Lists, "list");
