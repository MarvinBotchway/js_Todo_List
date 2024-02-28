import FormModal from "./FormModal.js";

export default function ActionArea(type) {
  const Content = document.getElementById("content");
  const actionArea = document.createElement("div");
  const addBtn = document.createElement("button");
  let btnTxt = type;

  actionArea.id = "action-area";
  addBtn.classList += "add-btn";
  btnTxt = btnTxt == "list" ? "Add List" : "Add Todo";

  if (btnTxt == "Add List") addBtn.id = "add-list";
  else if (btnTxt == "Add Todo") addBtn.id = "add-todo";
  addBtn.textContent = btnTxt;

  addBtn.onclick = function () {
    Content.appendChild(FormModal(type));
  };

  actionArea.appendChild(addBtn);

  return actionArea;
}
