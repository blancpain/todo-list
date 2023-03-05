import { isToday, endOfToday, isAfter } from "date-fns";
import toDoContainer from "./toDoContainer";
import projectContainer from "./projectContainer";
import { toDoController, projectController } from "./graphicsController";
import { getToDoFromLocalStorage, getProjectFromLocalStorage } from "./storage";
import ToDo from "./todos";
import Project from "./projects";

const home = document.querySelector("#home");
const today = document.querySelector("#today");
const later = document.querySelector("#next-7-days");
const main = document.querySelector(".main");
const projectTitle = document.querySelector(".project-title");

const clearContent = () => {
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
};

const initialLoad = () => {
  const storedTodos = getToDoFromLocalStorage();
  const storedProjects = getProjectFromLocalStorage();

  for (let i = 0; i < storedProjects.length; i++) {
    const project = storedProjects[i];
    const restoredProjectTitle = project.currentProject;
    const restoredProject = new Project(restoredProjectTitle);
    projectContainer.addProject(restoredProject);

    projectController.displayProject(
      restoredProject.project,
      restoredProject.index
    );
  }

  for (let j = 0; j < storedTodos.length; j++) {
    const toDo = storedTodos[j];
    const restoredToDoDescription = toDo.currentDescription;
    const restoredToDoDueDate = toDo.currentDueDate;
    // convert date to Date obj for date-fns functions to work
    const convertedDate = new Date(restoredToDoDueDate);
    const restoredToDoPriority = toDo.currentPriority;
    const restoredToDoCompleted = toDo.currentIsCompleted;
    const restoredToDoProject = toDo.currentProject;
    const restoredToDoIndex = toDo.index;

    const restoredToDo = new ToDo(
      restoredToDoDescription,
      convertedDate,
      restoredToDoPriority,
      restoredToDoCompleted,
      restoredToDoProject
    );

    toDoContainer.addToDo(restoredToDo);
    toDoController.displayToDo(
      restoredToDoDescription,
      convertedDate,
      restoredToDoProject,
      restoredToDoPriority,
      restoredToDoIndex,
      restoredToDoCompleted
    );
  }
};

const loadDefault = (e) => {
  const targetedDefaulProject = e.target;
  const targetedDefaultProjectValue = targetedDefaulProject.textContent;
  if (targetedDefaulProject.matches(".project-button")) {
    // testing
    initialLoad();
    // testing

    // remove highlight from any new project btns
    const allProjectButtons = document.querySelectorAll(".new-project-button");
    allProjectButtons.forEach((button) => button.classList.remove("active"));
    // add highlight to selected default project btn
    const allDefaultButton = document.querySelectorAll(".project-button");
    allDefaultButton.forEach((button) => {
      if (targetedDefaultProjectValue !== button.textContent) {
        button.classList.remove("active");
      } else {
        button.classList.add("active");
      }
    });
    clearContent();
    projectTitle.textContent = targetedDefaultProjectValue;

    if (targetedDefaultProjectValue === "Today") {
      for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
        const toDo = toDoContainer.listOfTodos()[i];
        const toDoDate = new Date(toDo.dueDate);
        const isDateRelated = true;

        if (isToday(toDoDate)) {
          toDoController.displayToDo(
            toDo.description,
            toDoDate,
            toDo.project,
            toDo.priority,
            toDo.index,
            toDo.completed,
            isDateRelated
          );
        }
      }
    } else if (targetedDefaultProjectValue === "Home") {
      for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
        const toDo = toDoContainer.listOfTodos()[i];

        if (
          toDo.project.toLowerCase() ===
          targetedDefaultProjectValue.toLowerCase()
        ) {
          toDoController.displayToDo(
            toDo.description,
            toDo.dueDate,
            toDo.project,
            toDo.priority,
            toDo.index,
            toDo.completed
          );
        }
      }
    } else if (targetedDefaultProjectValue === "Later") {
      for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
        const toDo = toDoContainer.listOfTodos()[i];
        const toDoDate = new Date(toDo.dueDate);
        const todaysDate = endOfToday();
        const isDateRelated = true;

        if (isAfter(toDoDate, todaysDate)) {
          toDoController.displayToDo(
            toDo.description,
            toDoDate,
            toDo.project,
            toDo.priority,
            toDo.index,
            toDo.completed,
            isDateRelated
          );
        }
      }
    }
  }
};

const loadHome = () => {
  projectTitle.textContent = "Home";
  home.classList.add("active");
  today.classList.remove("active");
  later.classList.remove("active");
  clearContent();
  for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
    const toDo = toDoContainer.listOfTodos()[i];
    if (toDo.project === "home") {
      toDoController.displayToDo(
        toDo.description,
        toDo.dueDate,
        toDo.project,
        toDo.priority,
        toDo.index,
        toDo.completed
      );
    }
  }
};

const loadProject = (e) => {
  if (e.target.matches(".new-project-button")) {
    const selectedProject = e.target.textContent;
    const selectedProjectValue = selectedProject.substring(
      0,
      selectedProject.length - 1
    );
    projectTitle.textContent = selectedProjectValue;
    clearContent();
    // remove any highlight from default buttons
    const allDefaultButton = document.querySelectorAll(".project-button");
    allDefaultButton.forEach((button) => button.classList.remove("active"));

    // add highlight to selected button
    const allProjectButtons = document.querySelectorAll(".new-project-button");
    allProjectButtons.forEach((button) => {
      if (selectedProject !== button.textContent) {
        button.classList.remove("active");
      } else {
        button.classList.add("active");
      }
    });

    for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
      const toDo = toDoContainer.listOfTodos()[i];

      if (toDo.project === projectTitle.textContent) {
        toDoController.displayToDo(
          toDo.description,
          toDo.dueDate,
          toDo.project,
          toDo.priority,
          toDo.index,
          toDo.completed
        );
      }
    }
  }
};

document.addEventListener("click", loadProject);
document.addEventListener("click", loadDefault);

export { loadDefault, loadProject, loadHome };
