import {
  addList,
  addTodo,
  getListTodos,
  getLists,
  getTodaysTodos,
} from "../Services";
import { clearContent, updateContent } from "../updateContent";
import Nav from "./Nav";

export default function AlertBar(item, type) {
  const Bar = document.createElement("div");
  const Message = document.createElement("h3");
  const UndoBtn = document.createElement("button");

  Bar.id = "alert";
  Message.innerText = `${item.title} Deleted`;
  UndoBtn.innerText = "Undo";

  Bar.appendChild(Message);
  Bar.appendChild(UndoBtn);

  UndoBtn.addEventListener("click", () => {
    if (type == "todo") {
      let deletedTodo = item;
      let todos = addTodo(deletedTodo);

      if (Nav.todayBtn.className == "active-button") {
        todos = getTodaysTodos();
      } else {
        todos = getListTodos(todos, deletedTodo.list);
      }

      clearContent();
      updateContent(todos, "todo");
    } else if (type == "list") {
      let lists = addList(item);

      clearContent();
      updateContent(lists, "list");
    }
  });

  return Bar;
}
