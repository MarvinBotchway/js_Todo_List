import FormModal from "./FormModal.js";
import Nav from "./Nav.js";

export default function ActionArea(type) {
  const Content = document.getElementById("content");
  const actionArea = document.createElement("div");
  const addBtn = document.createElement("button");
  const TimeHeading = document.createElement("h2");
  const TodayButton = Nav.todayBtn;
  let btnTxt = type;

  TimeHeading.textContent = new Date().toDateString();
  TimeHeading.classList = "date";
  actionArea.id = "action-area";
  addBtn.classList += "add-btn";
  btnTxt = btnTxt == "list" ? "Add List" : "Add Todo";

  if (btnTxt == "Add List") addBtn.id = "add-list";
  else if (btnTxt == "Add Todo") addBtn.id = "add-todo";
  addBtn.textContent = btnTxt;

  addBtn.onclick = function () {
    Content.appendChild(FormModal(type));
  };

  if (TodayButton.classList != "active-button") {
    actionArea.appendChild(addBtn);
  } else {
    actionArea.appendChild(TimeHeading);
  }

  console.log(TodayButton);

  return actionArea;
}
