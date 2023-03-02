export default class ToDo {
  static index = 0;

  constructor(description, dueDate, priority, isCompleted, project = "Home") {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = isCompleted;
    this.project = project;
    this.index = ToDo.index++;
  }

  get description() {
    return this.currentDescription;
  }

  set description(value) {
    this.currentDescription = value;
  }

  get dueDate() {
    return this.currentDueDate;
  }

  set dueDate(value) {
    this.currentDueDate = value;
  }

  get priority() {
    return this.currentPriority;
  }

  set priority(value) {
    this.currentPriority = value;
  }

  get completed() {
    return this.currentIsCompleted;
  }

  set completed(value) {
    this.currentIsCompleted = value;
  }

  get project() {
    return this.currentProject;
  }

  set project(value) {
    this.currentProject = value;
  }
}
