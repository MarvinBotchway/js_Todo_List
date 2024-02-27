import ListsCard from "../components/ListsCard.js";
import Lists from "../Lists.js";

export default (function ListsController() {
  let listsArray = [];

  Lists.forEach((list) => {
    listsArray.push(ListsCard(list));
  });

  return listsArray;
})();
