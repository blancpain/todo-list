const home = document.querySelector(".home");
const today = document.querySelector(".today");
const later = document.querySelector(".next-7-days");
const main = document.querySelector(".main");
const projectTitle = document.querySelector(".project-title");

const clearContent = () => {
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
};

const loadDefault = (e) => {
  projectTitle.textContent = e.target.textContent;
};

const loadHome = () => {
  projectTitle.textContent = "Home";
  home.classList.add("active");
  // TODO - load HOME stuff and switch to home view....
};

const loadProject = (e) => {
  const selectedProject = e.target.textContent;
  if (e.target.matches(".new-project-button")) {
    clearContent();
    projectTitle.textContent = selectedProject.substring(
      0,
      selectedProject.length - 1
    );
  }
};
// maybe call clearContent inside loadDefault....
document.addEventListener("click", loadProject);
home.addEventListener("click", () => {
  clearContent();
  loadHome();
});
today.addEventListener("click", (e) => {
  clearContent();
  loadDefault(e);
});
later.addEventListener("click", (e) => {
  clearContent();
  loadDefault(e);
});

export { loadDefault, loadProject, loadHome };
