const saveInLocalStorage = (list, type) => {
  if (type === "todo") {
    localStorage.setItem("todo", JSON.stringify(list));
  } else if (type === "project") {
    localStorage.setItem("project", JSON.stringify(list));
  }
};

const getToDoFromLocalStorage = () => {
  const retrievedTodo = JSON.parse(localStorage.getItem("todo"));
  console.log(retrievedTodo);
};

const getProjectFromLocalStorage = () => {
  const retrievedListOfProjects = JSON.parse(localStorage.getItem("project"));
};

export {
  saveInLocalStorage,
  getToDoFromLocalStorage,
  getProjectFromLocalStorage,
};
