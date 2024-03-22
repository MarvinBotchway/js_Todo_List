import Lists from "./Lists";
import Todos from "./Todos";

function addDefaultDataToLocalStorage() {
  if (!localStorage.getItem("Lists") && !localStorage.getItem("Todos")) {
    let strigifiedLists = JSON.stringify(Lists);
    let strigifiedTodos = JSON.stringify(Todos);

    localStorage.setItem("Lists", strigifiedLists);

    localStorage.setItem("Todos", strigifiedTodos);
  }
}

function updateDataInLocalStorage(data, type) {
  if (type == "list") {
    let strigifiedLists = JSON.stringify(data);
    localStorage.setItem("Lists", strigifiedLists);
  } else if (type == "todo") {
    let strigifiedTodos = JSON.stringify(data);
    localStorage.setItem("Todos", strigifiedTodos);
  }
}

function getDataFromLocalStorage(type) {
  let data = [];
  if (type == "list") {
    console.log(localStorage.getItem("Lists"));
    data = JSON.parse(localStorage.getItem("Lists"));
  } else if (type == "todo") {
    data = JSON.parse(localStorage.getItem("Todos"));
  }

  return data;
}

export {
  addDefaultDataToLocalStorage,
  updateDataInLocalStorage,
  getDataFromLocalStorage,
};
