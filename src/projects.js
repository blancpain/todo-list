import { v4 as uuidv4 } from "uuid";
import projectContainer from "./projectContainer";

export default class Project {
  static index = 0;

  constructor(project) {
    this.project = project;
    this.index = uuidv4();
  }

  get project() {
    return this.currentProject;
  }

  set project(value) {
    if (!projectContainer.listProjects().includes(value)) {
      this.currentProject = value;
    }
  }
}
