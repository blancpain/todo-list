import "./style.css";
import ToDo from "./todos";
import toDoContainer from "./toDoContainer";
import Project from "./projects";
import projectContainer from "./projectContainer";
import { projectController, toDoController } from "./graphicsController";
import { loadDefault, loadProject } from "./viewLoader";

const clearContent = () => {
  const mainView = document.querySelector(".main");
  while (mainView.hasChildNodes()) {
    mainView.removeChild(mainView.firstChild);
  }
  // tabChanger.homeLink.classList.remove("button-clicked");
  // tabChanger.menuLink.classList.remove("button-clicked");
  // tabChanger.contactLink.classList.remove("button-clicked");
};

const projectViewChanger = (() => {
  // select DOM elements
  const home = document.querySelector(".home");
  const today = document.querySelector(".today");
  const nextSevenDays = document.querySelector(".next-7-days");

  // event listeners
  home.addEventListener("click", (e) => {
    clearContent();
    loadDefault(e);
  });
  today.addEventListener("click", (e) => {
    clearContent();
    loadDefault(e);
  });
  nextSevenDays.addEventListener("click", (e) => {
    clearContent();
    loadDefault(e);
  });
})();
