import "./style.css";
import ToDo from "./todos";
import Project from "./projects";
import toDoContainer from "./toDoContainer";
import projectContainer from "./projectContainer";
import { projectController, toDoController } from "./graphicsController";
import { initialLoad } from "./viewLoader";

const startUp = (() => {
  // using PerformanceNavigationTiming to check if user has reloaded or opened up the app
  const perfTiming = performance.getEntriesByType("navigation")[0];

  if (perfTiming.type === "reload" || perfTiming.type === "navigate") {
    initialLoad();
  }
})();
