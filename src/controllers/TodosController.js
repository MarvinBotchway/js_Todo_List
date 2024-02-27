import TodoCard from "../components/TodoCard.js";
import Todos from "../Todos.js";

export default (function TodosController() {
  let todosArray = [];

  Todos.forEach((todo) => {
    todosArray.push(TodoCard(todo.getSummary()));
  });

  return todosArray;
})();
