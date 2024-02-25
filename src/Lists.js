import List from "./List.js";
import ListsCard from "./ListsCard.js";

export default (function Lists() {
  let List1 = new List("Workout Goals");
  let List2 = new List("School");

  let List1Card = ListsCard(List1);
  let List2Card = ListsCard(List2);

  return [List1Card, List2Card];
})();
