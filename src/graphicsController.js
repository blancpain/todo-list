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
    if (userInput.value !== "") {
      e.preventDefault();
      const newDomProject = document.createElement("button");
      const newProject = new Project(userInput.value);
      projectContainer.addProject(newProject);
      newDomProject.textContent = userInput.value;
      newDomProject.setAttribute("data-index", `${newProject.index}`);
      listOfProjectsDOM.appendChild(newDomProject);
      projectPoppup.setAttribute("style", "visibility:hidden;");
      userInput.value = "";
    }
  };

  const removeProject = (e) => { };

  projectPoppupBtn.addEventListener("click", openProjectPoppup);
  addProjectBtn.addEventListener("click", addProject);
  cancelProjectBtn.addEventListener("click", closeProjectPoppup);
})();

export { projectController };
