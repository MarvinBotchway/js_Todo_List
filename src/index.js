import html from "./index.html";

(function component() {
  const content = document.getElementById("content");
  const txt = document.createElement("p");

  txt.textContent = "Hello World!";
  content.appendChild(txt);
})();