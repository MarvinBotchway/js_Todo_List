import "./styles.css";
import Todo from "./Todo.js";
import TodoCard from "./TodoCard.js";
import ActionArea from "./ActionArea.js";
import Nav from "./Nav.js";

let todo = new Todo(
  "Cook",
  "I want to practice my cooking skills",
  new Date(2024, 18, 2),
  "high"
);

let todo1 = new Todo(
  "Read",
  "Read a really interesing new book",
  new Date(2024, 18, 2),
  "high"
);

let todo2 = new Todo(
  "Dance",
  "Learn a new dance",
  new Date(2024, 18, 2),
  "low"
);

const Content = document.getElementById("content");
const Header = document.getElementById("header");

const todoCard = TodoCard(todo.getSummary());
const todoCard1 = TodoCard(todo1.getSummary());
const todoCard2 = TodoCard(todo2.getSummary());

Header.appendChild(Nav);

Content.appendChild(ActionArea);
Content.appendChild(todoCard);
Content.appendChild(todoCard1);
Content.appendChild(todoCard2);
