import ListCard from "./ListCard.js";
import TodoCard from "./TodoCard.js";

export default function Cards(items, type) {
  let cards = [];
  items.forEach((item) => {
    if (type == "list") cards.push(ListCard(item));
    else cards.push(TodoCard(item));
  });

  return cards;
}
