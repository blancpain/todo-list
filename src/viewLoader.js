import toDoContainer from "./toDoContainer";
import projectContainer from "./projectContainer";
import { toDoController } from "./graphicsController";

const home = document.querySelector(".home");
const today = document.querySelector(".today");
const later = document.querySelector(".next-7-days");
const main = document.querySelector(".main");
const projectTitle = document.querySelector(".project-title");

const clearContent = () => {
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
};

const loadDefault = (e) => {
  projectTitle.textContent = e.target.textContent;
};

const loadHome = () => {
  projectTitle.textContent = "Home";
  home.classList.add("active");
  clearContent();

  for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
    const toDo = toDoContainer.listOfTodos()[i];

    if (toDo.project === "home") {
      toDoController.displayToDo(
        toDo.description,
        toDo.dueDate,
        toDo.project,
        toDo.priority,
        ""
      );
    }
  }
};

const loadProject = (e) => {
  const selectedProject = e.target.textContent;
  if (e.target.matches(".new-project-button")) {
    clearContent();
    projectTitle.textContent = selectedProject.substring(
      0,
      selectedProject.length - 1
    );

    for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
      const toDo = toDoContainer.listOfTodos()[i];

      if (toDo.project === selectedProject) {
        toDoController.displayToDo(
          toDo.description,
          toDo.dueDate,
          toDo.project,
          toDo.priority
        );
      }
    }
  }
};

// maybe call clearContent inside loadDefault....
document.addEventListener("click", loadProject);
home.addEventListener("click", loadHome);
today.addEventListener("click", (e) => {
  clearContent();
  loadDefault(e);
});
later.addEventListener("click", (e) => {
  clearContent();
  loadDefault(e);
});

export { loadDefault, loadProject, loadHome };
