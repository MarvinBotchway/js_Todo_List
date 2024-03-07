import Todo from "../models/Todo.js";
import Lists from "./Lists.js";

export default (function Todos() {
  let todosArray = [
    new Todo(
      0,
      Lists[0],
      "Cook",
      "I want to practice my cooking skills",
      new Date(2024, 18, 2),
      "high"
    ),
    new Todo(
      1,
      Lists[0],
      "Read",
      "Read a really interesing new book",
      new Date(2024, 18, 2),
      "high"
    ),
    new Todo(
      2,
      Lists[1],
      "Dance",
      "Learn a new dance",
      new Date(2024, 18, 2),
      "low"
    ),
  ];

  return todosArray;
})();
