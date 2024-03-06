export default class Todo {
  constructor(list, title, description, dueDate, priority) {
    this.list = list;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getSummary() {
    let title = this.title;
    let description = this.description;
    let dueDate = this.dueDate;
    let priority = this.priority;

    description = `${description.substring(0, 50)}...`;
    dueDate = dueDate.toDateString();

    return { title, description, dueDate, priority };
  }
}
