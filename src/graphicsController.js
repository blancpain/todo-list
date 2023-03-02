import ToDo from "./todos";
import toDoContainer from "./toDoContainer";
import Project from "./projects";
import projectContainer from "./projectContainer";
import { loadHome } from "./viewLoader";

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
    const selectedProject = e.target.parentElement.textContent;
    const targetedDomElem = e.target.parentElement;
    if (e.target.matches(".new-project-button__pseudo")) {
      projectContainer.removeProject(selectedProject);
      targetedDomElem.remove();
      createdDOMprojects.splice(createdDOMprojects.indexOf(selectedProject), 1);
      loadHome();
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
  const main = document.querySelector(".main");

  const openTodoPoppup = () => {
    toDoPoppup.classList.add("open-todo-container");
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
      displayToDo(toDoDescription, toDoDueDate, toDoProject, toDoPriority);

      toDoPoppup.classList.remove("open-todo-container");
    }
    toDoForm.reset();
  };

  const displayToDo = (description, dueDate, project, priority) => {
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

    // adding styles

    toDoWrapper.classList.add("todo-container");
    toDoUpperRow.classList.add("todo-upper-row");
    toDoLowerRow.classList.add("todo-lower-row");
    toDoDueDate.classList.add("todo-due-date");
    toDoEditBtn.classList.add("todo-edit");
    toDoEditSpan.classList.add("todo-edit-span");
    toDoDeleteBtn.classList.add("todo-delete");
    toDoDeleteBtn.classList.add("todo-delete-span");

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
  };

  openToDoPoppupBtn.addEventListener("click", openTodoPoppup);
  cancelToDoBtn.addEventListener("click", closeToDoPoppup);
  addToDoBtn.addEventListener("click", createToDo);
})();

export { projectController, toDoController };
