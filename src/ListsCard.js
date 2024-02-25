export default function ListsCard(list) {
  const listCard = document.createElement("div");
  const title = document.createElement("h3");

  listCard.classList += "list-card";
  title.textContent = list.title;

  listCard.appendChild(title);
  return listCard;
}