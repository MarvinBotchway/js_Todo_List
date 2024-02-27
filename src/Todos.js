import Todo from "./models/Todo.js";

export default (function Todos() {
  let todosArray = [
    new Todo(
      "Cook",
      "I want to practice my cooking skills",
      new Date(2024, 18, 2),
      "high"
    ),
    new Todo(
      "Read",
      "Read a really interesing new book",
      new Date(2024, 18, 2),
      "high"
    ),
    new Todo("Dance", "Learn a new dance", new Date(2024, 18, 2), "low"),
  ];

  return todosArray;
})();
