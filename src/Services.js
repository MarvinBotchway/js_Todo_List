import Lists from "./data/Lists.js";
import Todos from "./data/Todos.js";

const addList = function (list) {
  Lists.push(list);
  return Lists;
};

const getListTodos = function (list) {
  let todos = [];
  Todos.forEach((todo) => {
    if (todo.list == list) {
      todos.push(todo);
    }
  });
  return todos;
};

export { addList, getListTodos };
