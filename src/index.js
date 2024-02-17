import "./styles.css";
import Todo from "./Todo.js";
import TodoCard from "./TodoCard.js";

let todo = new Todo(
  "Cook",
  "I want to practice my cooking skills",
  new Date(2024, 18, 2),
  "high"
);

const Content = document.getElementById("content");
const todoCard = TodoCard(todo);

Content.appendChild(todoCard);
