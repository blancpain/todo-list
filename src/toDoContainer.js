const listOfTodos = [];

export default class toDoContainer {
  static addToDo(todo) {
    listOfTodos.push(todo);
  }

  static removeToDo(todo) {
    listOfTodos.splice(listOfTodos.indexOf(todo), 1);
  }

  static listOfTodos() {
    return listOfTodos;
  }
}
