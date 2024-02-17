import "./styles.css";
import Todo from "./Todo.js";

let todo = new Todo(
  "Cook",
  "I want to practice my cooking skills",
  new Date(2024, 18, 2),
  "high"
);

const Content = document.getElementById("content");
const Title = document.createElement("h3");
const Description = document.createElement("h3");
const TodoDate = document.createElement("h3");
const priority = document.createElement("h3");

Title.textContent = todo.title;
Description.textContent = todo.description;

Content.appendChild(Title);
Content.appendChild(Description);
