import List from "../models/List";
import { addList, getLists } from "../services/listServices";
import { clearContent, updateContent } from "../updateContent";

export default (function ListForm() {
  const Form = document.createElement("form");
  const Label = document.createElement("label");
  const Input = document.createElement("input");
  const SubmitBtn = document.createElement("button");
  const alert = document.createElement("p");

  Form.id = "list-form";
  Input.id = "title";
  Input.type = "text";
  Label.textContent = "* List Name";
  Label.htmlFor = "title";
  Form.classList += "form list-form";
  SubmitBtn.id = "list-submit";
  SubmitBtn.type = "submit";
  SubmitBtn.textContent = "Add";

  alert.id = "list-name-alert";
  alert.textContent = "Enter A Name For Your List!";
  alert.style.color = "red";
  alert.style.padding = "1rem";

  Input.value = "";

  Form.appendChild(Label);
  Form.appendChild(Input);
  Form.appendChild(SubmitBtn);

  Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let addedAlert = document.getElementById("list-name-alert");
    if (addedAlert) Form.removeChild(addedAlert);
    Input.value = Input.value.trim();

    if (Input.value.length < 1) {
      Form.appendChild(alert);
    } else {
      const numberOfLists = getLists().length;
      let lists = addList(new List(numberOfLists + 1, Input.value));
      clearContent();
      updateContent(lists, "list");

      Input.value = "";
    }
  });

  return Form;
})();
