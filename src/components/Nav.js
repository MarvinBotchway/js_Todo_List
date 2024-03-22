import { getLists, getTodaysTodos } from "../Services";
import Lists from "../data/Lists";
import { clearContent, updateContent } from "../updateContent";

export default (function Nav() {
  const nav = document.createElement("div");
  const listsBtn = document.createElement("button");
  const todayBtn = document.createElement("button");

  nav.id = "nav";
  listsBtn.id = "lists-btn";
  todayBtn.id = "today-btn";

  listsBtn.textContent = "Lists";
  todayBtn.textContent = "Today";
  listsBtn.classList += "active-button";

  nav.appendChild(listsBtn);
  nav.appendChild(todayBtn);

  nav.childNodes.forEach((btn, i, btns) => {
    btn.addEventListener("click", () => {
      btns.forEach((btn) => {
        btn.classList = "";
      });
      btn.classList = "active-button";
      let todos = getTodaysTodos();
      let lists = getLists();

      clearContent();
      if (btn.id == "lists-btn") updateContent(lists, "list");
      else if (btn.id == "today-btn") updateContent(todos, "todo");
    });
  });

  return { nav, todayBtn };
})();
