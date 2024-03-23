import List from "../models/List";
import { updateList } from "../services/listServices";
import { clearContent, updateContent } from "../updateContent";

export default function ListEditForm(selectedList) {
  const Form = document.createElement("form");
  const Label = document.createElement("label");
  const Input = document.createElement("input");
  const SubmitBtn = document.createElement("button");
  const alert = document.createElement("p");

  Form.id = "list-edit-form";
  Input.id = "title";
  Input.type = "text";
  Label.textContent = "* List Name";
  Label.htmlFor = "title";
  Form.classList += "form list-form";
  SubmitBtn.id = "list-submit";
  SubmitBtn.type = "submit";
  SubmitBtn.textContent = "Edit";

  alert.id = "list-name-alert";
  alert.textContent = "Enter A Name For Your List!";
  alert.style.color = "red";
  alert.style.padding = "1rem";

  Input.value = selectedList.title;

  Form.appendChild(Label);
  Form.appendChild(Input);
  Form.appendChild(SubmitBtn);

  let id = selectedList.id;

  Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let addedAlert = document.getElementById("list-name-alert");
    if (addedAlert) Form.removeChild(addedAlert);
    Input.value = Input.value.trim();

    if (Input.value.length < 1) {
      Form.appendChild(alert);
    } else {
      let lists = updateList(new List(id, Input.value));
      clearContent();
      updateContent(lists, "list");

      Input.value = "";
    }
  });

  return Form;
}
