export default (function ActionArea() {
  const actionArea = document.createElement("div");
  const addTodo = document.createElement("button");

  actionArea.id = "action-area";
  addTodo.id = "add-todo";
  addTodo.textContent = "Add Todo";

  actionArea.appendChild(addTodo);

  return actionArea;
})();
