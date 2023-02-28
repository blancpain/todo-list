const listOfProjects = [];

export default class projectContainer {
  static addProject(project) {
    if (!listOfProjects.includes(project)) {
      listOfProjects.push(project);
    }
  }

  static removeProject(project) {
    listOfProjects.splice(listOfProjects.indexOf(project), 1);
  }

  static listProjects() {
    return listOfProjects;
  }
}
