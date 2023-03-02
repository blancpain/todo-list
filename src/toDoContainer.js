const listOfTodos = [];

export default class toDoContainer {
  static addToDo(todo) {
    listOfTodos.push(todo);
  }

  static findToDo(toDoIndex) {
    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].index === toDoIndex) {
        return listOfTodos[i];
      }
    }
  }

  static removeToDo(toDoIndex) {
    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].index === toDoIndex) {
        listOfTodos.splice(listOfTodos.indexOf(listOfTodos[i]), 1);
      }
    }
  }

  static listOfTodos() {
    return listOfTodos;
  }
}
