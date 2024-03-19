import ActionArea from "./components/ActionArea.js";
import Cards from "./components/Cards.js";

const Content = document.getElementById("content");

function updateContent(currentContent, type) {
  Content.appendChild(ActionArea(type));
  Cards(currentContent, type).forEach((card) => {
    Content.appendChild(card);
  });
}

function clearContent() {
  while (Content.firstChild) Content.firstChild.remove();
}

export { updateContent, clearContent };
