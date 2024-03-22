import List from "../models/List";
import { updateList } from "../services/listServices";
import { clearContent, updateContent } from "../updateContent";

export default function ListEditForm(selectedList) {
  const Form = document.createElement("form");
  const Label = document.createElement("label");
  const Input = document.createElement("input");
  const SubmitBtn = document.createElement("button");

  Label.textContent = "List Name";
  Form.classList += "form list-form";
  Input.type = "text";
  Input.id = "title";
  SubmitBtn.id = "list-submit";
  SubmitBtn.type = "submit";
  SubmitBtn.textContent = "Edit";

  Input.value = selectedList.title;

  Form.appendChild(Label);
  Form.appendChild(Input);
  Form.appendChild(SubmitBtn);

  let id = selectedList.id;

  Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let lists = updateList(new List(id, Input.value));
    clearContent();
    updateContent(lists, "list");

    Input.value = "";
  });

  return Form;
}
