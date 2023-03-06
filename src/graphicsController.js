import ToDo from "./todos";
import toDoContainer from "./toDoContainer";
import Project from "./projects";
import projectContainer from "./projectContainer";
import { loadHome, reloadPage } from "./viewLoader";
import { saveInLocalStorage } from "./storage";

const projectController = (() => {
  const projectPoppupBtn = document.querySelector(".open-project-poppup");
  const projectPoppup = document.querySelector("#add-project");
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

  const createProject = (e) => {
    const userInput = document.querySelector("#project-text");
    if (createdDOMprojects.includes(userInput.value)) {
      e.preventDefault();
      alert("Project already exists.");
      return;
    }
    if (userInput.value !== "") {
      if (userInput.value.length < 11) {
        e.preventDefault();
        const newProject = new Project(userInput.value);
        projectContainer.addProject(newProject);
        projectPoppup.setAttribute("style", "visibility:hidden;");
        createdDOMprojects.push(userInput.value);
        displayProject(userInput.value, newProject.index);
        // save in local storage
        saveInLocalStorage(projectContainer.listProjects(), "project");
        // clear project form
        userInput.value = "";
      } else {
        alert("Project name must not exceed 10 characters.");
      }
    }
  };

  const displayProject = (projectTitle, projectIndex) => {
    const listOfProjectsDOM = document.querySelector(".list-of-projects");
    const newDomProject = document.createElement("button");
    const removeBtn = document.createElement("div");
    // TODO - div for remove btn not good for accessbility, consider changing
    newDomProject.textContent = projectTitle;
    newDomProject.setAttribute("data-index", `${projectIndex}`);
    newDomProject.classList.add("new-project-button");
    removeBtn.classList.add("new-project-button__pseudo");
    removeBtn.textContent = "✖";
    newDomProject.appendChild(removeBtn);
    listOfProjectsDOM.appendChild(newDomProject);
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
        // update local storage to reflect removal
        saveInLocalStorage(projectContainer.listProjects(), "project");

        loadHome();
      } else {
        alert("This project still has some unfinished to-dos.");
      }
    }
  };

  document.addEventListener("click", removeProject);
  projectPoppupBtn.addEventListener("click", openProjectPoppup);
  addProjectBtn.addEventListener("click", createProject);
  cancelProjectBtn.addEventListener("click", closeProjectPoppup);

  return { displayProject };
})();

const toDoController = (() => {
  const openToDoPoppupBtn = document.querySelector(".open-todo-poppup");
  const toDoPoppup = document.querySelector(".todo-poppup-container");
  const toDoForm = document.querySelector("#add-todo");
  const cancelToDoBtn = document.querySelector("#cancel-todo-btn");
  const hideSidebarBtn = document.querySelector(".header-logo");

  const clearProjectOptions = () => {
    const projectSelectMenu = document.querySelectorAll(
      ".added-project-option"
    );
    projectSelectMenu.forEach((option) => option.remove());
  };

  const openTodoPoppup = () => {
    toDoForm.reset();
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

    // check if Edit button has been click and Add btn has been removed - add it back
    // we check children[0] since ADD button is originally at the 0 position but
    // changes to [1] when the user clicks Edit (flex row-reverse is used)
    const toDoBtns = document.querySelector(".todo-buttons");
    if (toDoBtns.children[0].id !== "add-todo-btn") {
      toDoBtns.children[1].remove();
      const newAddBtn = document.createElement("button");
      newAddBtn.textContent = "Add";
      newAddBtn.id = "add-todo-btn";
      toDoBtns.appendChild(newAddBtn);
    }
  };

  const closeToDoPoppup = (e) => {
    e.preventDefault();
    toDoPoppup.classList.remove("open-todo-container");
    toDoForm.reset();
  };

  const createToDo = (e) => {
    if (e.target.matches("#add-todo-btn")) {
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
      const convertedDate = toDoDueDate === "" ? "" : new Date(toDoDueDate);
      const isToDoCompleted = false;
      if (toDoDescription !== "") {
        e.preventDefault();
        const newToDo = new ToDo(
          toDoDescription,
          convertedDate,
          toDoPriority,
          isToDoCompleted,
          toDoProject
        );
        toDoContainer.addToDo(newToDo);
        const newToDoIndex = newToDo.index;

        // save in local storage
        saveInLocalStorage(toDoContainer.listOfTodos(), "todo");

        displayToDo(
          toDoDescription,
          convertedDate,
          toDoProject,
          toDoPriority,
          newToDoIndex,
          isToDoCompleted
        );

        toDoPoppup.classList.remove("open-todo-container");
      }
      toDoForm.reset();
    }
  };

  const displayToDo = (
    description,
    dueDate,
    project,
    priority,
    index,
    isToDoCompleted,
    isDateRelated
  ) => {
    const main = document.querySelector(".main");
    const projetTitle = document.querySelector(".project-title");

    // only display the ToDo if user is currently inside the relevant project

    if (
      projetTitle.textContent.toLowerCase() === project.toLowerCase() ||
      isDateRelated
    ) {
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
      toDoDescription.classList.add("todo-description-field");
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
      toDoDueDate.textContent =
        dueDate === "" ? "" : dueDate.toLocaleDateString();
      toDoProject.textContent = project;
      toDoEditSpan.textContent = "edit_note";
      toDoDeleteSpan.textContent = "delete";

      // add data-indext to edit btn to differentiate
      toDoEditSpan.setAttribute("data-index", index);

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
      const targetedToDoIndex =
        e.target.parentElement.parentElement.dataset.index;
      targetToDoDescription.classList.toggle("completed-todo");
      const targetedToDo = toDoContainer.findToDo(targetedToDoIndex);
      targetedToDo.completed = !targetedToDo.completed;
      // update local storage to reflect completion
      saveInLocalStorage(toDoContainer.listOfTodos(), "todo");
    }
  };

  // REFACTOR BELOW

  const openEditTodo = (e) => {
    if (e.target.matches(".todo-edit-span")) {
      const targetedToDoElem =
        e.target.parentElement.parentElement.parentElement;
      const targetedToDoIndex = targetedToDoElem.dataset.index;
      const correspondingToDo = toDoContainer.findToDo(targetedToDoIndex);
      // apply the index created in displayTodo() above to differentiate edits
      const editSpanIndex = targetedToDoIndex;

      toDoPoppup.classList.add("open-todo-container");

      // fill out fields with corresponding todo details
      const toDoDescriptionField = document.querySelector("#description");
      toDoDescriptionField.value = correspondingToDo.description;
      // refresh projects and select current todo project
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
      projectSelectMenu.value = correspondingToDo.project;
      const prioritySelectMenu = document.querySelector("#priority");
      prioritySelectMenu.value = correspondingToDo.priority;
      const toDoDateField = document.querySelector("#date");
      toDoDateField.value =
        correspondingToDo.dueDate === ""
          ? ""
          : correspondingToDo.dueDate.toISOString().slice(0, 10);

      // create edit button if one doesn't exist and update it's index

      const toDoBtns = document.querySelector(".todo-buttons");
      if (toDoBtns.children[1].id !== "edit-todo-btn") {
        const newEditBtn = document.createElement("button");
        newEditBtn.textContent = "Edit";
        newEditBtn.id = "edit-todo-btn";
        newEditBtn.setAttribute("data-index", editSpanIndex);
        newEditBtn.classList.add("new-edit-btn");
        const oldAddToDoBtn = document.querySelector("#add-todo-btn");
        oldAddToDoBtn.remove();
        toDoBtns.appendChild(newEditBtn);
        toDoBtns.setAttribute("style", "flex-direction: row-reverse;");
      } else if (toDoBtns.children[1].id === "edit-todo-btn") {
        toDoBtns.children[1].setAttribute("data-index", editSpanIndex);
      }
    }
  };

  const editTodo = (e) => {
    // add event listener to new edit btn
    if (e.target.matches(".new-edit-btn")) {
      const toDoIndex = e.target.dataset.index;
      const toDoToBeEdited = toDoContainer.findToDo(toDoIndex);
      const currentProjectTitle = toDoToBeEdited.project;

      // update values if changed
      if (toDoForm.children.description.value !== "") {
        e.preventDefault();
        toDoToBeEdited.description = toDoForm.children.description.value;
        toDoToBeEdited.priority =
          toDoForm.children.priority.value === "none"
            ? ""
            : toDoForm.children.priority.value;
        toDoToBeEdited.project = toDoForm.children.project.value;
        toDoToBeEdited.dueDate =
          toDoForm.children.date.value === ""
            ? ""
            : new Date(toDoForm.children.date.value);

        // update local storage to reflect any changes
        saveInLocalStorage(toDoContainer.listOfTodos(), "todo");

        // reload page to display updated to-do(s)
        reloadPage(currentProjectTitle);

        toDoPoppup.classList.remove("open-todo-container");
      }
    }
  };

  const removeTodo = (e) => {
    if (e.target.matches(".todo-delete-span")) {
      const targetedToDoElem =
        e.target.parentElement.parentElement.parentElement;
      const targetedToDoIndex = targetedToDoElem.dataset.index;
      targetedToDoElem.remove();
      toDoContainer.removeToDo(targetedToDoIndex);
      // update local storage to reflect removal
      saveInLocalStorage(toDoContainer.listOfTodos(), "todo");
    }
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main");
    sidebar.classList.toggle("hide-sidebar");
    mainContent.classList.toggle("expand-main");
  };

  document.addEventListener("click", createToDo);
  document.addEventListener("click", completeToDo);
  document.addEventListener("click", openEditTodo);
  document.addEventListener("click", editTodo);
  document.addEventListener("click", removeTodo);
  openToDoPoppupBtn.addEventListener("click", openTodoPoppup);
  cancelToDoBtn.addEventListener("click", closeToDoPoppup);
  hideSidebarBtn.addEventListener("click", hideSidebar);

  return { displayToDo };
})();

export { projectController, toDoController };
