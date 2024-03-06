import Lists from "./data/Lists.js";

const addList = function (list) {
  Lists.push(list);
  return Lists;
};

export { addList };
