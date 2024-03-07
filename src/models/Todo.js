export default class Todo {
  constructor(id, list, title, description, dueDate, priority) {
    this.id = id;
    this.list = list;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getSummary() {
    let id = this.id;
    let title = this.title;
    let description = this.description;
    let dueDate = this.dueDate;
    let priority = this.priority;

    description = `${description.substring(0, 50)}...`;
    dueDate = dueDate.toDateString();

    return { id, title, description, dueDate, priority };
  }
}
