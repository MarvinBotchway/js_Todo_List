import List from "./models/List.js";

let listsArray = [new List("Workout Goals"), new List("School")];

const addList = function (list) {
  listsArray.push(list);
  console.log(listsArray);
};

const getLists = (function () {
  return listsArray;
})();

export { addList, listsArray };
