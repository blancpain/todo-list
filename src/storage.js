const saveInLocalStorage = (list, type) => {
  if (type === "todo") {
    localStorage.setItem("todo", JSON.stringify(list));
  } else if (type === "project") {
    localStorage.setItem("project", JSON.stringify(list));
  }
};

const getToDoFromLocalStorage = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todo"));
  return storedTodos;
};

const getProjectFromLocalStorage = () => {
  const storedProjects = JSON.parse(localStorage.getItem("project"));
  return storedProjects;
};

export {
  saveInLocalStorage,
  getToDoFromLocalStorage,
  getProjectFromLocalStorage,
};
