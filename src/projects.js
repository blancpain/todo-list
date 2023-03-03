import projectContainer from "./projectContainer";

export default class Project {
  static index = 0;

  constructor(project) {
    this.project = project;
    this.index = Project.index++;
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

// const defaultProject = new Project("Home");
// projectContainer.addProject(defaultProject);
