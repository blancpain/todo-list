import ToDo from "./todos";
import toDoContainer from "./toDoContainer";
import Project from "./projects";
import projectContainer from "./projectContainer";

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
    }
  };

  document.addEventListener("click", removeProject);
  projectPoppupBtn.addEventListener("click", openProjectPoppup);
  addProjectBtn.addEventListener("click", addProject);
  cancelProjectBtn.addEventListener("click", closeProjectPoppup);
})();

export { projectController };
