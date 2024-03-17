import { clearPage, createPage } from "../Page";
import { addList, getLists } from "../Services";
import List from "../models/List";

export default (function ListForm() {
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
  SubmitBtn.textContent = "Add";

  Input.value = "";

  Form.appendChild(Label);
  Form.appendChild(Input);
  Form.appendChild(SubmitBtn);

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOfLists = getLists().length;
    let lists = addList(new List(numberOfLists + 1, Input.value));
    clearPage();
    createPage(lists, "list");

    Input.value = "";
  });

  return Form;
})();
