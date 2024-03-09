export default (function Nav() {
  const nav = document.createElement("div");
  const listsBtn = document.createElement("button");
  const todayBtn = document.createElement("button");

  nav.id = "nav";
  listsBtn.id = "lists-btn";
  todayBtn.id = "current-btn";

  listsBtn.textContent = "Lists";
  todayBtn.textContent = "Today";
  listsBtn.classList += "active-button";

  nav.appendChild(listsBtn);
  nav.appendChild(todayBtn);

  return { nav, todayBtn };
})();
