import ToDo from "./todos";
import toDoContainer from "./toDoContainer";
import Project from "./projects";
import projectContainer from "./projectContainer";
import { loadHome, loadDefault, loadProject } from "./viewLoader";

const projectController = (() => {
  const projectPoppupBtn = document.querySelector(".open-project-poppup");
  const projectPoppup = document.querySelector("#add-project");
  const listOfProjectsDOM = document.querySelector(".list-of-projects");
  const addProjectBtn = document.querySelector("#add-project-btn");
  const cancelProjectBtn = document.querySelector("#cancel-project-btn");
  const createdDOMprojects = [];

  const openProjectPoppup = () => {
    projectPoppup.setAttribute("style", "visibility:visible;");
  };

  const closeProjectPoppup = (e) => {
    const userInput = document.querySelector("#project-text");
    userInput.value = "";
    e.preventDefault();
    projectPoppup.setAttribute("style", "visibility:hidden;");
  };

  const addProject = (e) => {
    const userInput = document.querySelector("#project-text");
    if (createdDOMprojects.includes(userInput.value)) {
      e.preventDefault();
      alert("Project already exists.");
      return;
    }
    if (userInput.value !== "") {
      e.preventDefault();
      const newDomProject = document.createElement("button");
      // TODO - div for remove btn not good for accessbility, consider changing
      const removeBtn = document.createElement("div");
      const newProject = new Project(userInput.value);
      projectContainer.addProject(newProject);
      newDomProject.textContent = userInput.value;
      newDomProject.setAttribute("data-index", `${newProject.index}`);
      newDomProject.classList.add("new-project-button");
      removeBtn.classList.add("new-project-button__pseudo");
      removeBtn.textContent = "✖";
      newDomProject.appendChild(removeBtn);
      listOfProjectsDOM.appendChild(newDomProject);
      projectPoppup.setAttribute("style", "visibility:hidden;");
      createdDOMprojects.push(userInput.value);
      userInput.value = "";
    }
  };

  const removeProject = (e) => {
    if (e.target.matches(".new-project-button__pseudo")) {
      const selectedProject = e.target.parentElement.textContent;
      const targetedDomElem = e.target.parentElement;
      let isProjectEmpty = true;
      for (let i = 0; i < toDoContainer.listOfTodos().length; i++) {
        const toDo = toDoContainer.listOfTodos()[i];
        if (
          toDo.project ===
          selectedProject.substring(0, selectedProject.length - 1)
        ) {
          isProjectEmpty = false;
        }
      }
      if (isProjectEmpty) {
        projectContainer.removeProject(selectedProject);
        targetedDomElem.remove();
        createdDOMprojects.splice(
          createdDOMprojects.indexOf(selectedProject),
          1
        );
        loadHome();
      } else {
        alert("This project still has some unfinished to-dos.");
      }
    }
  };

  document.addEventListener("click", removeProject);
  projectPoppupBtn.addEventListener("click", openProjectPoppup);
  addProjectBtn.addEventListener("click", addProject);
  cancelProjectBtn.addEventListener("click", closeProjectPoppup);
})();

const toDoController = (() => {
  const openToDoPoppupBtn = document.querySelector(".open-todo-poppup");
  const toDoPoppup = document.querySelector(".todo-poppup-container");
  const toDoForm = document.querySelector("#add-todo");
  const addToDoBtn = document.querySelector("#add-todo-btn");
  const cancelToDoBtn = document.querySelector("#cancel-todo-btn");

  const clearProjectOptions = () => {
    const projectSelectMenu = document.querySelectorAll(
      ".added-project-option"
    );
    projectSelectMenu.forEach((option) => option.remove());
  };

  const openTodoPoppup = () => {
    toDoPoppup.classList.add("open-todo-container");
    clearProjectOptions();
    const projectSelectMenu = document.querySelector("#select-project");

    for (let i = 0; i < projectContainer.listProjects().length; i++) {
      const project = projectContainer.listProjects()[i];

      const newOption = document.createElement("option");
      const optionText = document.createTextNode(project.project);
      newOption.appendChild(optionText);
      newOption.setAttribute("value", `${project.project}`);
      newOption.classList.add("added-project-option");
      projectSelectMenu.appendChild(newOption);
    }
  };

  const closeToDoPoppup = (e) => {
    e.preventDefault();
    toDoPoppup.classList.remove("open-todo-container");
    toDoForm.reset();
  };

  const createToDo = (e) => {
    const toDoDescription = toDoForm.children.description.value;
    const toDoPriority =
      toDoForm.children.priority.value === "none"
        ? ""
        : toDoForm.children.priority.value;
    const toDoProject =
      toDoForm.children.project.value === "none"
        ? "home"
        : toDoForm.children.project.value;
    const toDoDueDate = toDoForm.children.date.value;
    const isToDoCompleted = false;
    if (toDoDescription !== "") {
      e.preventDefault();
      const newToDo = new ToDo(
        toDoDescription,
        toDoDueDate,
        toDoPriority,
        isToDoCompleted,
        toDoProject
      );
      toDoContainer.addToDo(newToDo);
      const newToDoIndex = newToDo.index;
      displayToDo(
        toDoDescription,
        toDoDueDate,
        toDoProject,
        toDoPriority,
        newToDoIndex,
        isToDoCompleted
      );

      toDoPoppup.classList.remove("open-todo-container");
    }
    toDoForm.reset();
  };

  const displayToDo = (
    description,
    dueDate,
    project,
    priority,
    index,
    isToDoCompleted
  ) => {
    const main = document.querySelector(".main");
    const projetTitle = document.querySelector(".project-title");

    // only display the ToDo if user is currently inside the relevant project

    if (projetTitle.textContent.toLowerCase() === project.toLowerCase()) {
      // creating the DOM elements for the ToDos
      const toDoWrapper = document.createElement("div");
      const toDoUpperRow = document.createElement("div");
      const toDoIsCompleted = document.createElement("input");
      toDoIsCompleted.type = "checkbox";
      const toDoDescription = document.createElement("div");
      const toDoDueDate = document.createElement("div");
      const toDoEditBtn = document.createElement("button");
      const toDoEditSpan = document.createElement("span");
      const toDoDeleteBtn = document.createElement("button");
      const toDoDeleteSpan = document.createElement("span");
      const toDoLowerRow = document.createElement("div");
      const toDoProject = document.createElement("div");

      toDoWrapper.appendChild(toDoUpperRow);
      toDoWrapper.appendChild(toDoLowerRow);
      toDoUpperRow.appendChild(toDoIsCompleted);
      toDoUpperRow.appendChild(toDoDescription);
      toDoUpperRow.appendChild(toDoDueDate);
      toDoUpperRow.appendChild(toDoEditBtn);
      toDoEditBtn.appendChild(toDoEditSpan);
      toDoUpperRow.appendChild(toDoDeleteBtn);
      toDoDeleteBtn.appendChild(toDoDeleteSpan);
      toDoLowerRow.appendChild(toDoProject);
      main.appendChild(toDoWrapper);

      // adding styles/ids
      toDoWrapper.classList.add("todo-container");
      toDoUpperRow.classList.add("todo-upper-row");
      toDoLowerRow.classList.add("todo-lower-row");
      toDoDueDate.classList.add("todo-due-date");
      toDoEditBtn.classList.add("todo-edit");
      toDoEditSpan.classList.add("todo-edit-span");
      toDoDeleteBtn.classList.add("todo-delete");
      toDoDeleteSpan.classList.add("todo-delete-span");
      if (index !== "") {
        toDoWrapper.setAttribute("data-index", `${index}`);
      }
      toDoLowerRow.id = project;
      toDoIsCompleted.classList.add("check-if-completed");

      // populating fields
      toDoDescription.textContent = description;
      toDoDueDate.textContent = dueDate;
      toDoProject.textContent = project;
      toDoEditSpan.textContent = "edit_note";
      toDoDeleteSpan.textContent = "delete";

      if (priority === "low") {
        toDoIsCompleted.classList.add("low-priority");
      } else if (priority === "medium") {
        toDoIsCompleted.classList.add("medium-priority");
      } else if (priority === "high") {
        toDoIsCompleted.classList.add("high-priority");
      }
      if (isToDoCompleted === true) {
        toDoDescription.classList.add("completed-todo");
      }
    }
  };

  const completeToDo = (e) => {
    if (e.target.matches(".check-if-completed")) {
      const targetToDoDescription = e.target.parentElement.children[1];
      const targetedToDoIndex = Number(
        e.target.parentElement.parentElement.dataset.index
      );
      targetToDoDescription.classList.toggle("completed-todo");
      const targetedToDo = toDoContainer.findToDo(targetedToDoIndex);
      targetedToDo.completed = !targetedToDo.completed;
    }
  };

  const removeTodo = (e) => {
    if (e.target.matches(".todo-delete-span")) {
      const targetedToDoElem =
        e.target.parentElement.parentElement.parentElement;
      const targetedToDoIndex = Number(targetedToDoElem.dataset.index);
      targetedToDoElem.remove();
      toDoContainer.removeToDo(targetedToDoIndex);
    }
  };

  document.addEventListener("click", completeToDo);
  document.addEventListener("click", removeTodo);
  openToDoPoppupBtn.addEventListener("click", openTodoPoppup);
  cancelToDoBtn.addEventListener("click", closeToDoPoppup);
  addToDoBtn.addEventListener("click", createToDo);

  return { displayToDo };
})();

export { projectController, toDoController };
