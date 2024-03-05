export default (function Nav() {
  const nav = document.createElement("div");
  const listsBtn = document.createElement("button");
  const currentBtn = document.createElement("button");
  const Content = document.getElementById("content");

  nav.id = "nav";
  listsBtn.id = "lists-btn";
  currentBtn.id = "current-btn";

  listsBtn.textContent = "Lists";
  currentBtn.textContent = "Current";
  listsBtn.classList += "active-button";

  nav.appendChild(listsBtn);
  nav.appendChild(currentBtn);

  return nav;
})();
