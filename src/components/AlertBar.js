import { addTodo, getListTodos, getTodaysTodos } from "../Services";
import { clearContent, updateContent } from "../updateContent";
import Nav from "./Nav";

export default function AlertBar(deletedTodo) {
  const Bar = document.createElement("div");
  const Message = document.createElement("h3");
  const UndoBtn = document.createElement("button");

  Bar.id = "alert";
  Message.innerText = "Todo Deleted";
  UndoBtn.innerText = "Undo";

  Bar.appendChild(Message);
  Bar.appendChild(UndoBtn);

  UndoBtn.addEventListener("click", () => {
    let todos = addTodo(deletedTodo);

    if (Nav.todayBtn.className == "active-button") {
      todos = getTodaysTodos();
    } else {
      todos = getListTodos(todos, deletedTodo.list);
    }

    clearContent();
    updateContent(todos, "todo");
  });

  return Bar;
}
