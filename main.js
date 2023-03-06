/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --header-bgc: #ea580c;\n  --sidebar-bgc: #d4d4d8;\n  --main-bgc: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --sidebar-hover-bgc: #a1a1aa;\n  --main-ff: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-rows: 5% 95%;\n}\n\n/* HEADER */\n\n.header {\n  grid-column: 1 / span 2;\n  min-height: 4rem;\n  background-color: var(--header-bgc);\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,\n    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,\n    rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  z-index: 3;\n  padding-left: 1rem;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.header-title {\n  font-size: 45px;\n  font-family: \"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  color: #1f1f1f;\n}\n\n#header-collapse-btn {\n  border: none;\n  padding: 10px 10px;\n  font-size: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n\n.header-logo,\n.change-theme-span {\n  font-family: \"Material Icons\";\n  font-size: 30px;\n  /* to align icons with text */\n  vertical-align: bottom;\n}\n\n.theme-and-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.project-title {\n  font-size: 33px;\n  font-family: \"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  color: #1f1f1f;\n  margin-right: auto;\n  margin-left: auto;\n  align-self: center;\n}\n\nbutton.open-todo-poppup {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  font-size: 40px;\n  padding: 15px;\n  transition: transform 0.6s ease-in-out;\n}\n\nbutton.open-todo-poppup:hover {\n  transform: rotate(180deg);\n}\n\n#change-theme {\n  border: none;\n  padding: 10px 10px;\n  font-size: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n\n.todo-poppup-header {\n  min-height: 50px;\n  width: 100%;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  background-color: var(--header-bgc);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  font-family: \"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 600;\n  color: #1f1f1f;\n  font-size: 25px;\n  padding: 10px;\n}\n\n.todo-poppup-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 300px;\n  /* border: 1px solid #ccc; */\n  border-radius: 8px;\n  background-color: var(--sidebar-bgc);\n  font-family: var(--main-ff);\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  visibility: hidden;\n  transform: scale(0.1);\n  transition: transform 0.4s;\n}\n\n.open-todo-container {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1);\n}\n\nform#add-todo {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nselect {\n  appearance: none;\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 18px;\n  width: 100%;\n}\n\n.header input[type=\"date\"] {\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 18px;\n  width: 100%;\n}\n\n.header input[type=\"text\"] {\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 18px;\n  width: 100%;\n}\n\ndiv.todo-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5rem;\n}\n\nbutton#add-todo-btn,\nbutton#cancel-todo-btn,\nbutton#edit-todo-btn {\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  width: 95px;\n  text-align: center;\n}\n\nbutton#add-todo-btn:hover,\nbutton#cancel-todo-btn:hover,\nbutton#edit-todo-btn:hover {\n  filter: opacity(55%);\n}\n\nbutton#add-todo-btn,\nbutton#edit-todo-btn {\n  background-color: #22c55e;\n}\n\nbutton#cancel-todo-btn {\n  background-color: #ef4444;\n}\n\n#description-label,\n#priority-label,\n#project-label,\n#date-label {\n  font-size: 13px;\n  padding-left: 2px;\n  color: #4b5563;\n}\n\n/* SIDEBAR */\n\n.sidebar {\n  background-color: var(--sidebar-bgc);\n  min-width: 300px;\n  padding-top: 3rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.default-projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n  padding: 10px;\n  text-align: left;\n  width: 100%;\n  font-family: var(--main-ff);\n  font-weight: 500;\n}\n\n.sidebar button:hover {\n  background-color: var(--sidebar-hover-bgc);\n  border-radius: 8px;\n}\n\ndiv.default-projects button {\n  display: flex;\n  align-items: center;\n}\n\n/* Icons */\n\ndiv.default-projects button::before,\ndiv.list-of-projects button::before {\n  font-family: \"Material Icons\";\n  padding-right: 10px;\n  font-size: 25px;\n}\ndiv.default-projects button:nth-child(1)::before {\n  content: \"\\e88a\";\n}\n\ndiv.default-projects button:nth-child(2)::before {\n  content: \"\\e935\";\n}\n\ndiv.default-projects button:nth-child(3)::before {\n  content: \"\\e916\";\n}\n\n.new-project-button::before {\n  /* content: \"\\f075\"; */\n  content: \"\\f0c5\";\n}\n\n/* Icons END */\n\n.projects .title {\n  font-size: 30px;\n  font-weight: 600;\n  padding-left: 10px;\n  margin-top: 5rem;\n  margin-bottom: 1rem;\n}\n\ndiv.list-of-projects button:first-child {\n  margin-top: 1rem;\n}\n\nbutton.open-project-poppup {\n  font-size: 20px;\n}\n\n.new-project-button {\n  margin-bottom: 0.5rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n  padding: 10px;\n}\n\n.new-project-button__pseudo {\n  position: absolute;\n  right: 5%;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateX(-50%);\n  transition: visibility 0s, opacity 0.2s;\n}\n\n.new-project-button:hover .new-project-button__pseudo {\n  visibility: visible;\n  opacity: 1;\n}\n\ndiv.project-poppup {\n  position: relative;\n}\n\nform#add-project {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\ndiv.project-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\nbutton#add-project-btn,\nbutton#cancel-project-btn {\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  width: 95px;\n  text-align: center;\n}\n\nbutton#add-project-btn:hover,\nbutton#cancel-project-btn:hover {\n  filter: opacity(55%);\n}\n\nbutton#add-project-btn {\n  background-color: #22c55e;\n}\n\nbutton#cancel-project-btn {\n  background-color: #ef4444;\n}\n\n.sidebar input[type=\"text\"] {\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 21px;\n  width: 100%;\n}\n/* MAIN */\n\n.main {\n  grid-column: 2 / span 1;\n  background-image: var(--main-bgc);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 50px;\n  gap: 2rem;\n  padding: 25px;\n}\n\n.todo-container {\n  border-bottom: 1px solid lightgray;\n  min-height: 70px;\n  min-width: 400px;\n}\n\n.todo-upper-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 20px;\n  font-family: var(--main-ff);\n}\n\n.todo-lower-row {\n  font-size: 12px;\n  padding-left: 2.4rem;\n}\n\n.todo-description-field {\n  overflow: hidden;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n}\n\ninput[type=\"checkbox\"] {\n  min-width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  border: 2px solid gray;\n  /* Adjusts the position of the checkboxes on the text baseline */\n  vertical-align: -2px;\n  outline: none;\n}\n\ninput[type=\"checkbox\"]::before {\n  display: block;\n  content: \" \";\n  width: 10px;\n  height: 10px;\n  border-radius: 6px;\n  background-color: var(--header-bgc);\n  font-size: 1.2em;\n  transform: translate(3px, 3px) scale(0);\n  transform-origin: center;\n  transition: all 0.3s ease-in;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translate(3px, 3px) scale(1);\n  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);\n}\n\n.todo-due-date {\n  margin-left: auto;\n  font-size: 17px;\n}\n\n.todo-edit,\n.todo-delete {\n  border: none;\n  padding: 10px 10px;\n  font-size: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n\n.todo-edit-span,\n.todo-delete-span {\n  font-family: \"Material Icons\";\n  font-size: 25px;\n  vertical-align: middle;\n}\n\n/* GENERAL */\n\n.visibility {\n  visibility: hidden;\n}\n\n.active {\n  color: var(--header-bgc);\n}\n\n.low-priority {\n  border: 2px solid lightgreen !important;\n}\n\n.medium-priority {\n  border: 2px solid salmon !important;\n}\n\n.high-priority {\n  border: 2px solid darkred !important;\n}\n\n.completed-todo {\n  text-decoration: line-through;\n  color: gray;\n  transition: text-decoration 0.5s ease-in-out;\n}\n\n.hide-sidebar{\n  display:none !important;\n}\n\n.expand-main {\n  grid-column: 1 / span 3;\n}\n\n/* MOBILE/TABLET */\n\n@media only screen and (max-width: 600px) {\n  #content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n  .header {\n    display: flex;\n    align-items: center;\n  }\n  .sidebar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  button#add-project-btn,\n  button#cancel-project-btn {\n    font-size: 15px;\n    font-weight: bold;\n    border: none;\n    border-radius: 8px;\n    padding: 5px 12px;\n    width: 68px;\n    text-align: center;\n  }\n  .sidebar input[type=\"text\"] {\n    font-size: 15px;\n  }\n  .main {\n    height: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --header-bgc: #ea580c;\n  --sidebar-bgc: #d4d4d8;\n  --main-bgc: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --sidebar-hover-bgc: #a1a1aa;\n  --main-ff: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-rows: 5% 95%;\n}\n\n/* HEADER */\n\n.header {\n  grid-column: 1 / span 2;\n  min-height: 4rem;\n  background-color: var(--header-bgc);\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,\n    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,\n    rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  z-index: 3;\n  padding-left: 1rem;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.header-title {\n  font-size: 45px;\n  font-family: \"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  color: #1f1f1f;\n}\n\n#header-collapse-btn {\n  border: none;\n  padding: 10px 10px;\n  font-size: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n\n.header-logo,\n.change-theme-span {\n  font-family: \"Material Icons\";\n  font-size: 30px;\n  /* to align icons with text */\n  vertical-align: bottom;\n}\n\n.theme-and-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.project-title {\n  font-size: 33px;\n  font-family: \"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  color: #1f1f1f;\n  margin-right: auto;\n  margin-left: auto;\n  align-self: center;\n}\n\nbutton.open-todo-poppup {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  font-size: 40px;\n  padding: 15px;\n  transition: transform 0.6s ease-in-out;\n}\n\nbutton.open-todo-poppup:hover {\n  transform: rotate(180deg);\n}\n\n#change-theme {\n  border: none;\n  padding: 10px 10px;\n  font-size: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n\n.todo-poppup-header {\n  min-height: 50px;\n  width: 100%;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  background-color: var(--header-bgc);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  font-family: \"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 600;\n  color: #1f1f1f;\n  font-size: 25px;\n  padding: 10px;\n}\n\n.todo-poppup-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 300px;\n  /* border: 1px solid #ccc; */\n  border-radius: 8px;\n  background-color: var(--sidebar-bgc);\n  font-family: var(--main-ff);\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  visibility: hidden;\n  transform: scale(0.1);\n  transition: transform 0.4s;\n}\n\n.open-todo-container {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1);\n}\n\nform#add-todo {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nselect {\n  appearance: none;\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 18px;\n  width: 100%;\n}\n\n.header input[type=\"date\"] {\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 18px;\n  width: 100%;\n}\n\n.header input[type=\"text\"] {\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 18px;\n  width: 100%;\n}\n\ndiv.todo-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5rem;\n}\n\nbutton#add-todo-btn,\nbutton#cancel-todo-btn,\nbutton#edit-todo-btn {\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  width: 95px;\n  text-align: center;\n}\n\nbutton#add-todo-btn:hover,\nbutton#cancel-todo-btn:hover,\nbutton#edit-todo-btn:hover {\n  filter: opacity(55%);\n}\n\nbutton#add-todo-btn,\nbutton#edit-todo-btn {\n  background-color: #22c55e;\n}\n\nbutton#cancel-todo-btn {\n  background-color: #ef4444;\n}\n\n#description-label,\n#priority-label,\n#project-label,\n#date-label {\n  font-size: 13px;\n  padding-left: 2px;\n  color: #4b5563;\n}\n\n/* SIDEBAR */\n\n.sidebar {\n  background-color: var(--sidebar-bgc);\n  min-width: 300px;\n  padding-top: 3rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.default-projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n  padding: 10px;\n  text-align: left;\n  width: 100%;\n  font-family: var(--main-ff);\n  font-weight: 500;\n}\n\n.sidebar button:hover {\n  background-color: var(--sidebar-hover-bgc);\n  border-radius: 8px;\n}\n\ndiv.default-projects button {\n  display: flex;\n  align-items: center;\n}\n\n/* Icons */\n\ndiv.default-projects button::before,\ndiv.list-of-projects button::before {\n  font-family: \"Material Icons\";\n  padding-right: 10px;\n  font-size: 25px;\n}\ndiv.default-projects button:nth-child(1)::before {\n  content: \"\\e88a\";\n}\n\ndiv.default-projects button:nth-child(2)::before {\n  content: \"\\e935\";\n}\n\ndiv.default-projects button:nth-child(3)::before {\n  content: \"\\e916\";\n}\n\n.new-project-button::before {\n  /* content: \"\\f075\"; */\n  content: \"\\f0c5\";\n}\n\n/* Icons END */\n\n.projects .title {\n  font-size: 30px;\n  font-weight: 600;\n  padding-left: 10px;\n  margin-top: 5rem;\n  margin-bottom: 1rem;\n}\n\ndiv.list-of-projects button:first-child {\n  margin-top: 1rem;\n}\n\nbutton.open-project-poppup {\n  font-size: 20px;\n}\n\n.new-project-button {\n  margin-bottom: 0.5rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n  padding: 10px;\n}\n\n.new-project-button__pseudo {\n  position: absolute;\n  right: 5%;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateX(-50%);\n  transition: visibility 0s, opacity 0.2s;\n}\n\n.new-project-button:hover .new-project-button__pseudo {\n  visibility: visible;\n  opacity: 1;\n}\n\ndiv.project-poppup {\n  position: relative;\n}\n\nform#add-project {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\ndiv.project-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\nbutton#add-project-btn,\nbutton#cancel-project-btn {\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  width: 95px;\n  text-align: center;\n}\n\nbutton#add-project-btn:hover,\nbutton#cancel-project-btn:hover {\n  filter: opacity(55%);\n}\n\nbutton#add-project-btn {\n  background-color: #22c55e;\n}\n\nbutton#cancel-project-btn {\n  background-color: #ef4444;\n}\n\n.sidebar input[type=\"text\"] {\n  background-image: #eee;\n  border: 1px solid #d6d9dc;\n  outline: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 21px;\n  width: 100%;\n}\n/* MAIN */\n\n.main {\n  grid-column: 2 / span 1;\n  background-image: var(--main-bgc);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 50px;\n  gap: 2rem;\n  padding: 25px;\n}\n\n.todo-container {\n  border-bottom: 1px solid lightgray;\n  min-height: 70px;\n  min-width: 400px;\n}\n\n.todo-upper-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 20px;\n  font-family: var(--main-ff);\n}\n\n.todo-lower-row {\n  font-size: 12px;\n  padding-left: 2.4rem;\n}\n\n.todo-description-field {\n  overflow: hidden;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n}\n\ninput[type=\"checkbox\"] {\n  min-width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  border: 2px solid gray;\n  /* Adjusts the position of the checkboxes on the text baseline */\n  vertical-align: -2px;\n  outline: none;\n}\n\ninput[type=\"checkbox\"]::before {\n  display: block;\n  content: \" \";\n  width: 10px;\n  height: 10px;\n  border-radius: 6px;\n  background-color: var(--header-bgc);\n  font-size: 1.2em;\n  transform: translate(3px, 3px) scale(0);\n  transform-origin: center;\n  transition: all 0.3s ease-in;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translate(3px, 3px) scale(1);\n  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);\n}\n\n.todo-due-date {\n  margin-left: auto;\n  font-size: 17px;\n}\n\n.todo-edit,\n.todo-delete {\n  border: none;\n  padding: 10px 10px;\n  font-size: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  background: none;\n  outline: none;\n}\n\n.todo-edit-span,\n.todo-delete-span {\n  font-family: \"Material Icons\";\n  font-size: 25px;\n  vertical-align: middle;\n}\n\n/* GENERAL */\n\n.visibility {\n  visibility: hidden;\n}\n\n.active {\n  color: var(--header-bgc);\n}\n\n.low-priority {\n  border: 2px solid lightgreen !important;\n}\n\n.medium-priority {\n  border: 2px solid salmon !important;\n}\n\n.high-priority {\n  border: 2px solid darkred !important;\n}\n\n.completed-todo {\n  text-decoration: line-through;\n  color: gray;\n  transition: text-decoration 0.5s ease-in-out;\n}\n\n.hide-sidebar{\n  display:none !important;\n}\n\n.expand-main {\n  grid-column: 1 / span 3;\n}\n\n/* MOBILE/TABLET */\n\n@media only screen and (max-width: 600px) {\n  #content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n  .header {\n    display: flex;\n    align-items: center;\n  }\n  .sidebar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  button#add-project-btn,\n  button#cancel-project-btn {\n    font-size: 15px;\n    font-weight: bold;\n    border: none;\n    border-radius: 8px;\n    padding: 5px 12px;\n    width: 68px;\n    text-align: center;\n  }\n  .sidebar input[type=\"text\"] {\n    font-size: 15px;\n  }\n  .main {\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfToday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfToday/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfToday)
/* harmony export */ });
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */

function endOfToday() {
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/graphicsController.js":
/*!***********************************!*\
  !*** ./src/graphicsController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController),
/* harmony export */   "toDoController": () => (/* binding */ toDoController)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _toDoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoContainer */ "./src/toDoContainer.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectContainer */ "./src/projectContainer.js");
/* harmony import */ var _viewLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewLoader */ "./src/viewLoader.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







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
        const newProject = new _projects__WEBPACK_IMPORTED_MODULE_2__["default"](userInput.value);
        _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProject);
        projectPoppup.setAttribute("style", "visibility:hidden;");
        createdDOMprojects.push(userInput.value);
        displayProject(userInput.value, newProject.index);
        // save in local storage
        (0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveInLocalStorage)(_projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].listProjects(), "project");
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
      for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listOfTodos().length; i++) {
        const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listOfTodos()[i];
        if (
          toDo.project ===
          selectedProject.substring(0, selectedProject.length - 1)
        ) {
          isProjectEmpty = false;
        }
      }
      if (isProjectEmpty) {
        _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject(selectedProject);
        targetedDomElem.remove();
        createdDOMprojects.splice(
          createdDOMprojects.indexOf(selectedProject),
          1
        );
        // update local storage to reflect removal
        (0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveInLocalStorage)(_projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].listProjects(), "project");

        (0,_viewLoader__WEBPACK_IMPORTED_MODULE_4__.loadHome)();
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

    for (let i = 0; i < _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].listProjects().length; i++) {
      const project = _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].listProjects()[i];

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
        const newToDo = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"](
          toDoDescription,
          convertedDate,
          toDoPriority,
          isToDoCompleted,
          toDoProject
        );
        _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].addToDo(newToDo);
        const newToDoIndex = newToDo.index;

        // save in local storage
        (0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveInLocalStorage)(_toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listOfTodos(), "todo");

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
      const targetedToDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].findToDo(targetedToDoIndex);
      targetedToDo.completed = !targetedToDo.completed;
      // update local storage to reflect completion
      (0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveInLocalStorage)(_toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listOfTodos(), "todo");
    }
  };

  // REFACTOR BELOW

  const openEditTodo = (e) => {
    if (e.target.matches(".todo-edit-span")) {
      const targetedToDoElem =
        e.target.parentElement.parentElement.parentElement;
      const targetedToDoIndex = targetedToDoElem.dataset.index;
      const correspondingToDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].findToDo(targetedToDoIndex);
      // apply the index created in displayTodo() above to differentiate edits
      const editSpanIndex = targetedToDoIndex;

      toDoPoppup.classList.add("open-todo-container");

      // fill out fields with corresponding todo details
      const toDoDescriptionField = document.querySelector("#description");
      toDoDescriptionField.value = correspondingToDo.description;
      // refresh projects and select current todo project
      clearProjectOptions();
      const projectSelectMenu = document.querySelector("#select-project");
      for (let i = 0; i < _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].listProjects().length; i++) {
        const project = _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].listProjects()[i];

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
        newEditBtn.textContent = "Submit";
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
      const toDoToBeEdited = _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].findToDo(toDoIndex);
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
        (0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveInLocalStorage)(_toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listOfTodos(), "todo");

        // reload page to display updated to-do(s)
        (0,_viewLoader__WEBPACK_IMPORTED_MODULE_4__.reloadPage)(currentProjectTitle);

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
      _toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].removeToDo(targetedToDoIndex);
      // update local storage to reflect removal
      (0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveInLocalStorage)(_toDoContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listOfTodos(), "todo");
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




/***/ }),

/***/ "./src/projectContainer.js":
/*!*********************************!*\
  !*** ./src/projectContainer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectContainer)
/* harmony export */ });
const listOfProjects = [];

class projectContainer {
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


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectContainer */ "./src/projectContainer.js");



class Project {
  static index = 0;

  constructor(project) {
    this.project = project;
    this.index = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }

  get project() {
    return this.currentProject;
  }

  set project(value) {
    if (!_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listProjects().includes(value)) {
      this.currentProject = value;
    }
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectFromLocalStorage": () => (/* binding */ getProjectFromLocalStorage),
/* harmony export */   "getToDoFromLocalStorage": () => (/* binding */ getToDoFromLocalStorage),
/* harmony export */   "saveInLocalStorage": () => (/* binding */ saveInLocalStorage)
/* harmony export */ });
const saveInLocalStorage = (list, type) => {
  if (type === "todo") {
    localStorage.setItem("todo", JSON.stringify(list));
  } else if (type === "project") {
    localStorage.setItem("project", JSON.stringify(list));
  }
};

const getToDoFromLocalStorage = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todo"));
  return storedTodos;
};

const getProjectFromLocalStorage = () => {
  const storedProjects = JSON.parse(localStorage.getItem("project"));
  return storedProjects;
};




/***/ }),

/***/ "./src/toDoContainer.js":
/*!******************************!*\
  !*** ./src/toDoContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoContainer)
/* harmony export */ });
const listOfTodos = [];

class toDoContainer {
  static addToDo(todo) {
    listOfTodos.push(todo);
  }

  static findToDo(toDoIndex) {
    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].index === toDoIndex) {
        return listOfTodos[i];
      }
    }
  }

  static removeToDo(toDoIndex) {
    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].index === toDoIndex) {
        listOfTodos.splice(listOfTodos.indexOf(listOfTodos[i]), 1);
      }
    }
  }

  static listOfTodos() {
    return listOfTodos;
  }
}


/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

// uuid ensures we have unique IDs across instances that persist

class ToDo {
  constructor(description, dueDate, priority, isCompleted, project = "Home") {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = isCompleted;
    this.project = project;
    this.index = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  get description() {
    return this.currentDescription;
  }

  set description(value) {
    this.currentDescription = value;
  }

  get dueDate() {
    return this.currentDueDate;
  }

  set dueDate(value) {
    this.currentDueDate = value;
  }

  get priority() {
    return this.currentPriority;
  }

  set priority(value) {
    this.currentPriority = value;
  }

  get completed() {
    return this.currentIsCompleted;
  }

  set completed(value) {
    this.currentIsCompleted = value;
  }

  get project() {
    return this.currentProject;
  }

  set project(value) {
    this.currentProject = value;
  }
}


/***/ }),

/***/ "./src/viewLoader.js":
/*!***************************!*\
  !*** ./src/viewLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad),
/* harmony export */   "loadDefault": () => (/* binding */ loadDefault),
/* harmony export */   "loadHome": () => (/* binding */ loadHome),
/* harmony export */   "loadProject": () => (/* binding */ loadProject),
/* harmony export */   "reloadPage": () => (/* binding */ reloadPage)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _toDoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoContainer */ "./src/toDoContainer.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectContainer */ "./src/projectContainer.js");
/* harmony import */ var _graphicsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphicsController */ "./src/graphicsController.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/projects.js");








const home = document.querySelector("#home");
const today = document.querySelector("#today");
const later = document.querySelector("#next-7-days");
const main = document.querySelector(".main");
const projectTitle = document.querySelector(".project-title");

const clearContent = () => {
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
};

const initialLoad = () => {
  const storedTodos = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoFromLocalStorage)();
  const storedProjects = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getProjectFromLocalStorage)();

  // restore stored projects
  if (storedProjects !== null) {
    for (let i = 0; i < storedProjects.length; i++) {
      const project = storedProjects[i];
      const restoredProjectTitle = project.currentProject;
      const restoredProject = new _projects__WEBPACK_IMPORTED_MODULE_5__["default"](restoredProjectTitle);
      _projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(restoredProject);

      _graphicsController__WEBPACK_IMPORTED_MODULE_2__.projectController.displayProject(
        restoredProject.project,
        restoredProject.index
      );
      // refresh localStorage to reflect new indices
      (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveInLocalStorage)(_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].listProjects(), "project");
    }
  }

  // restore stored to-dos
  if (storedTodos !== null) {
    for (let j = 0; j < storedTodos.length; j++) {
      const toDo = storedTodos[j];
      const restoredToDoDescription = toDo.currentDescription;
      const restoredToDoDueDate = toDo.currentDueDate;
      // convert date to Date obj for date-fns functions to work
      const convertedDate =
        restoredToDoDueDate === "" ? "" : new Date(restoredToDoDueDate);
      const restoredToDoPriority = toDo.currentPriority;
      const restoredToDoCompleted = toDo.currentIsCompleted;
      const restoredToDoProject = toDo.currentProject;

      const restoredToDo = new _todos__WEBPACK_IMPORTED_MODULE_4__["default"](
        restoredToDoDescription,
        convertedDate,
        restoredToDoPriority,
        restoredToDoCompleted,
        restoredToDoProject
      );
      const restoredToDoIndex = restoredToDo.index;

      _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].addToDo(restoredToDo);
      _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
        restoredToDoDescription,
        convertedDate,
        restoredToDoProject,
        restoredToDoPriority,
        restoredToDoIndex,
        restoredToDoCompleted
      );

      // refresh localStorage to reflect new indices
      (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveInLocalStorage)(_toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos(), "todo");
    }
  }
};

const loadDefault = (e) => {
  const targetedDefaulProject = e.target;
  const targetedDefaultProjectValue = targetedDefaulProject.textContent;
  if (targetedDefaulProject.matches(".project-button")) {
    // remove highlight from any new project btns
    const allProjectButtons = document.querySelectorAll(".new-project-button");
    allProjectButtons.forEach((button) => button.classList.remove("active"));
    // add highlight to selected default project btn
    const allDefaultButton = document.querySelectorAll(".project-button");
    allDefaultButton.forEach((button) => {
      if (targetedDefaultProjectValue !== button.textContent) {
        button.classList.remove("active");
      } else {
        button.classList.add("active");
      }
    });
    clearContent();
    projectTitle.textContent = targetedDefaultProjectValue;

    if (targetedDefaultProjectValue === "Today") {
      for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos().length; i++) {
        const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos()[i];
        const toDoDate = new Date(toDo.dueDate);
        const isDateRelated = true;

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(toDoDate)) {
          _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
            toDo.description,
            toDoDate,
            toDo.project,
            toDo.priority,
            toDo.index,
            toDo.completed,
            isDateRelated
          );
        }
      }
    } else if (targetedDefaultProjectValue === "Home") {
      for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos().length; i++) {
        const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos()[i];

        if (
          toDo.project.toLowerCase() ===
          targetedDefaultProjectValue.toLowerCase()
        ) {
          _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
            toDo.description,
            toDo.dueDate,
            toDo.project,
            toDo.priority,
            toDo.index,
            toDo.completed
          );
        }
      }
    } else if (targetedDefaultProjectValue === "Later") {
      for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos().length; i++) {
        const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos()[i];
        const toDoDate = new Date(toDo.dueDate);
        const todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])();
        const isDateRelated = true;

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(toDoDate, todaysDate)) {
          _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
            toDo.description,
            toDoDate,
            toDo.project,
            toDo.priority,
            toDo.index,
            toDo.completed,
            isDateRelated
          );
        }
      }
    }
  }
};

const loadHome = () => {
  projectTitle.textContent = "Home";
  home.classList.add("active");
  today.classList.remove("active");
  later.classList.remove("active");
  clearContent();
  for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos().length; i++) {
    const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos()[i];
    if (toDo.project === "home") {
      _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
        toDo.description,
        toDo.dueDate,
        toDo.project,
        toDo.priority,
        toDo.index,
        toDo.completed
      );
    }
  }
};

const reloadPage = (title) => {
  clearContent();
  for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos().length; i++) {
    const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos()[i];
    if (toDo.project === title) {
      _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
        toDo.description,
        toDo.dueDate,
        toDo.project,
        toDo.priority,
        toDo.index,
        toDo.completed
      );
    }
  }
};

const loadProject = (e) => {
  if (e.target.matches(".new-project-button")) {
    const selectedProject = e.target.textContent;
    const selectedProjectValue = selectedProject.substring(
      0,
      selectedProject.length - 1
    );
    projectTitle.textContent = selectedProjectValue;
    clearContent();
    // remove any highlight from default buttons
    const allDefaultButton = document.querySelectorAll(".project-button");
    allDefaultButton.forEach((button) => button.classList.remove("active"));

    // add highlight to selected button
    const allProjectButtons = document.querySelectorAll(".new-project-button");
    allProjectButtons.forEach((button) => {
      if (selectedProject !== button.textContent) {
        button.classList.remove("active");
      } else {
        button.classList.add("active");
      }
    });

    for (let i = 0; i < _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos().length; i++) {
      const toDo = _toDoContainer__WEBPACK_IMPORTED_MODULE_0__["default"].listOfTodos()[i];

      if (toDo.project === projectTitle.textContent) {
        _graphicsController__WEBPACK_IMPORTED_MODULE_2__.toDoController.displayToDo(
          toDo.description,
          toDo.dueDate,
          toDo.project,
          toDo.priority,
          toDo.index,
          toDo.completed
        );
      }
    }
  }
};

document.addEventListener("click", loadProject);
document.addEventListener("click", loadDefault);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _toDoContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoContainer */ "./src/toDoContainer.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectContainer */ "./src/projectContainer.js");
/* harmony import */ var _graphicsController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphicsController */ "./src/graphicsController.js");
/* harmony import */ var _viewLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewLoader */ "./src/viewLoader.js");








const startUp = (() => {
  // using PerformanceNavigationTiming to check if user has reloaded or opened up the app
  const perfTiming = performance.getEntriesByType("navigation")[0];

  if (perfTiming.type === "reload" || perfTiming.type === "navigate") {
    (0,_viewLoader__WEBPACK_IMPORTED_MODULE_6__.initialLoad)();
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFB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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ007QUFDTTtBQUNXO0FBQ007QUFDdUI7QUFDOUI7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQVc7QUFDZjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ncmFwaGljc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcHJvamVjdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3RvRG9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvdmlld0xvYWRlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0taGVhZGVyLWJnYzogI2VhNTgwYztcXG4gIC0tc2lkZWJhci1iZ2M6ICNkNGQ0ZDg7XFxuICAtLW1haW4tYmdjOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xcbiAgLS1zaWRlYmFyLWhvdmVyLWJnYzogI2ExYTFhYTtcXG4gIC0tbWFpbi1mZjogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNSUgOTUlO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZ2MpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDtcXG4gIHotaW5kZXg6IDM7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhcGhpayBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbn1cXG5cXG4jaGVhZGVyLWNvbGxhcHNlLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhlYWRlci1sb2dvLFxcbi5jaGFuZ2UtdGhlbWUtc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIC8qIHRvIGFsaWduIGljb25zIHdpdGggdGV4dCAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLnRoZW1lLWFuZC1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzNweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhcGhpayBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5vcGVuLXRvZG8tcG9wcHVwIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b24ub3Blbi10b2RvLXBvcHB1cDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4jY2hhbmdlLXRoZW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1wb3BwdXAtaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmdjKTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhcGhpayBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tcG9wcHVwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZ2MpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZmYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xcbn1cXG5cXG4ub3Blbi10b2RvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbmZvcm0jYWRkLXRvZG8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAjZWVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICNlZWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LnRvZG8tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuYnV0dG9uI2FkZC10b2RvLWJ0bixcXG5idXR0b24jY2FuY2VsLXRvZG8tYnRuLFxcbmJ1dHRvbiNlZGl0LXRvZG8tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgd2lkdGg6IDk1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiNhZGQtdG9kby1idG46aG92ZXIsXFxuYnV0dG9uI2NhbmNlbC10b2RvLWJ0bjpob3ZlcixcXG5idXR0b24jZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IG9wYWNpdHkoNTUlKTtcXG59XFxuXFxuYnV0dG9uI2FkZC10b2RvLWJ0bixcXG5idXR0b24jZWRpdC10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJjNTVlO1xcbn1cXG5cXG5idXR0b24jY2FuY2VsLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1sYWJlbCxcXG4jcHJpb3JpdHktbGFiZWwsXFxuI3Byb2plY3QtbGFiZWwsXFxuI2RhdGUtbGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICBjb2xvcjogIzRiNTU2MztcXG59XFxuXFxuLyogU0lERUJBUiAqL1xcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmdjKTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZmYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmdjKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuZGl2LmRlZmF1bHQtcHJvamVjdHMgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBJY29ucyAqL1xcblxcbmRpdi5kZWZhdWx0LXByb2plY3RzIGJ1dHRvbjo6YmVmb3JlLFxcbmRpdi5saXN0LW9mLXByb2plY3RzIGJ1dHRvbjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuZGl2LmRlZmF1bHQtcHJvamVjdHMgYnV0dG9uOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTg4YVxcXCI7XFxufVxcblxcbmRpdi5kZWZhdWx0LXByb2plY3RzIGJ1dHRvbjpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MzVcXFwiO1xcbn1cXG5cXG5kaXYuZGVmYXVsdC1wcm9qZWN0cyBidXR0b246bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTE2XFxcIjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NVxcXCI7ICovXFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzVcXFwiO1xcbn1cXG5cXG4vKiBJY29ucyBFTkQgKi9cXG5cXG4ucHJvamVjdHMgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuZGl2Lmxpc3Qtb2YtcHJvamVjdHMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmJ1dHRvbi5vcGVuLXByb2plY3QtcG9wcHVwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbl9fcHNldWRvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMnM7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIgLm5ldy1wcm9qZWN0LWJ1dHRvbl9fcHNldWRvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaXYucHJvamVjdC1wb3BwdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5mb3JtI2FkZC1wcm9qZWN0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYucHJvamVjdC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3QtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtcHJvamVjdC1idG4ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB3aWR0aDogOTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXG5idXR0b24jY2FuY2VsLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogb3BhY2l0eSg1NSUpO1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMmM1NWU7XFxufVxcblxcbmJ1dHRvbiNjYW5jZWwtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnNpZGViYXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICNlZWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLyogTUFJTiAqL1xcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbWFpbi1iZ2MpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDUwcHg7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIG1pbi1oZWlnaHQ6IDcwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4udG9kby11cHBlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mZik7XFxufVxcblxcbi50b2RvLWxvd2VyLXJvdyB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIuNHJlbTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24tZmllbGQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG1pbi13aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgLyogQWRqdXN0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGNoZWNrYm94ZXMgb24gdGhlIHRleHQgYmFzZWxpbmUgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmdjKTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDNweCkgc2NhbGUoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDNweCkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC4yNSwgMC41NiwgMik7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZWRpdC1zcGFuLFxcbi50b2RvLWRlbGV0ZS1zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogR0VORVJBTCAqL1xcblxcbi52aXNpYmlsaXR5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWJnYyk7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb21wbGV0ZWQtdG9kbyB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oaWRlLXNpZGViYXJ7XFxuICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmV4cGFuZC1tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4vKiBNT0JJTEUvVEFCTEVUICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBidXR0b24jYWRkLXByb2plY3QtYnRuLFxcbiAgYnV0dG9uI2NhbmNlbC1wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG4gICAgd2lkdGg6IDY4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5zaWRlYmFyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDZEQUE2RDtFQUM3RCw0QkFBNEI7RUFDNUIseURBQXlEO0VBQ3pELDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkM7O3FDQUVtQztFQUNuQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEVBQTBFO0VBQzFFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwRUFBMEU7RUFDMUUsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixr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QWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTs7SUFFRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0taGVhZGVyLWJnYzogI2VhNTgwYztcXG4gIC0tc2lkZWJhci1iZ2M6ICNkNGQ0ZDg7XFxuICAtLW1haW4tYmdjOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xcbiAgLS1zaWRlYmFyLWhvdmVyLWJnYzogI2ExYTFhYTtcXG4gIC0tbWFpbi1mZjogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNSUgOTUlO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZ2MpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDtcXG4gIHotaW5kZXg6IDM7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhcGhpayBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbn1cXG5cXG4jaGVhZGVyLWNvbGxhcHNlLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhlYWRlci1sb2dvLFxcbi5jaGFuZ2UtdGhlbWUtc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIC8qIHRvIGFsaWduIGljb25zIHdpdGggdGV4dCAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLnRoZW1lLWFuZC1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzNweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhcGhpayBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5vcGVuLXRvZG8tcG9wcHVwIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b24ub3Blbi10b2RvLXBvcHB1cDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4jY2hhbmdlLXRoZW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1wb3BwdXAtaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmdjKTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhcGhpayBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tcG9wcHVwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZ2MpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZmYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xcbn1cXG5cXG4ub3Blbi10b2RvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbmZvcm0jYWRkLXRvZG8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAjZWVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICNlZWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LnRvZG8tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuYnV0dG9uI2FkZC10b2RvLWJ0bixcXG5idXR0b24jY2FuY2VsLXRvZG8tYnRuLFxcbmJ1dHRvbiNlZGl0LXRvZG8tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgd2lkdGg6IDk1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiNhZGQtdG9kby1idG46aG92ZXIsXFxuYnV0dG9uI2NhbmNlbC10b2RvLWJ0bjpob3ZlcixcXG5idXR0b24jZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IG9wYWNpdHkoNTUlKTtcXG59XFxuXFxuYnV0dG9uI2FkZC10b2RvLWJ0bixcXG5idXR0b24jZWRpdC10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJjNTVlO1xcbn1cXG5cXG5idXR0b24jY2FuY2VsLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1sYWJlbCxcXG4jcHJpb3JpdHktbGFiZWwsXFxuI3Byb2plY3QtbGFiZWwsXFxuI2RhdGUtbGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICBjb2xvcjogIzRiNTU2MztcXG59XFxuXFxuLyogU0lERUJBUiAqL1xcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmdjKTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZmYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmdjKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuZGl2LmRlZmF1bHQtcHJvamVjdHMgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBJY29ucyAqL1xcblxcbmRpdi5kZWZhdWx0LXByb2plY3RzIGJ1dHRvbjo6YmVmb3JlLFxcbmRpdi5saXN0LW9mLXByb2plY3RzIGJ1dHRvbjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuZGl2LmRlZmF1bHQtcHJvamVjdHMgYnV0dG9uOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTg4YVxcXCI7XFxufVxcblxcbmRpdi5kZWZhdWx0LXByb2plY3RzIGJ1dHRvbjpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MzVcXFwiO1xcbn1cXG5cXG5kaXYuZGVmYXVsdC1wcm9qZWN0cyBidXR0b246bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTE2XFxcIjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NVxcXCI7ICovXFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzVcXFwiO1xcbn1cXG5cXG4vKiBJY29ucyBFTkQgKi9cXG5cXG4ucHJvamVjdHMgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuZGl2Lmxpc3Qtb2YtcHJvamVjdHMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmJ1dHRvbi5vcGVuLXByb2plY3QtcG9wcHVwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbl9fcHNldWRvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMnM7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIgLm5ldy1wcm9qZWN0LWJ1dHRvbl9fcHNldWRvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaXYucHJvamVjdC1wb3BwdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5mb3JtI2FkZC1wcm9qZWN0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYucHJvamVjdC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3QtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtcHJvamVjdC1idG4ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB3aWR0aDogOTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXG5idXR0b24jY2FuY2VsLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogb3BhY2l0eSg1NSUpO1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMmM1NWU7XFxufVxcblxcbmJ1dHRvbiNjYW5jZWwtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnNpZGViYXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICNlZWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLyogTUFJTiAqL1xcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbWFpbi1iZ2MpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDUwcHg7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIG1pbi1oZWlnaHQ6IDcwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4udG9kby11cHBlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mZik7XFxufVxcblxcbi50b2RvLWxvd2VyLXJvdyB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIuNHJlbTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24tZmllbGQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG1pbi13aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgLyogQWRqdXN0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGNoZWNrYm94ZXMgb24gdGhlIHRleHQgYmFzZWxpbmUgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmdjKTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDNweCkgc2NhbGUoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDNweCkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC4yNSwgMC41NiwgMik7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZWRpdC1zcGFuLFxcbi50b2RvLWRlbGV0ZS1zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogR0VORVJBTCAqL1xcblxcbi52aXNpYmlsaXR5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWJnYyk7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb21wbGV0ZWQtdG9kbyB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oaWRlLXNpZGViYXJ7XFxuICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmV4cGFuZC1tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4vKiBNT0JJTEUvVEFCTEVUICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBidXR0b24jYWRkLXByb2plY3QtYnRuLFxcbiAgYnV0dG9uI2NhbmNlbC1wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG4gICAgd2lkdGg6IDY4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5zaWRlYmFyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZlRvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIHRvZGF5LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIHRvZGF5LlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mVG9kYXkoKVxuICogLy89PiBNb24gT2N0IDYgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZlRvZGF5KCkge1xuICByZXR1cm4gZW5kT2ZEYXkoRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHRvRG9Db250YWluZXIgZnJvbSBcIi4vdG9Eb0NvbnRhaW5lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyIGZyb20gXCIuL3Byb2plY3RDb250YWluZXJcIjtcbmltcG9ydCB7IGxvYWRIb21lLCByZWxvYWRQYWdlIH0gZnJvbSBcIi4vdmlld0xvYWRlclwiO1xuaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RQb3BwdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tcHJvamVjdC1wb3BwdXBcIik7XG4gIGNvbnN0IHByb2plY3RQb3BwdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIik7XG4gIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1wcm9qZWN0LWJ0blwiKTtcbiAgY29uc3QgY3JlYXRlZERPTXByb2plY3RzID0gW107XG5cbiAgY29uc3Qgb3BlblByb2plY3RQb3BwdXAgPSAoKSA9PiB7XG4gICAgcHJvamVjdFBvcHB1cC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6dmlzaWJsZTtcIik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VQcm9qZWN0UG9wcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGV4dFwiKTtcbiAgICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0UG9wcHVwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTpoaWRkZW47XCIpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10ZXh0XCIpO1xuICAgIGlmIChjcmVhdGVkRE9NcHJvamVjdHMuaW5jbHVkZXModXNlcklucHV0LnZhbHVlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHVzZXJJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgaWYgKHVzZXJJbnB1dC52YWx1ZS5sZW5ndGggPCAxMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh1c2VySW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIHByb2plY3RQb3BwdXAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OmhpZGRlbjtcIik7XG4gICAgICAgIGNyZWF0ZWRET01wcm9qZWN0cy5wdXNoKHVzZXJJbnB1dC52YWx1ZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHVzZXJJbnB1dC52YWx1ZSwgbmV3UHJvamVjdC5pbmRleCk7XG4gICAgICAgIC8vIHNhdmUgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UocHJvamVjdENvbnRhaW5lci5saXN0UHJvamVjdHMoKSwgXCJwcm9qZWN0XCIpO1xuICAgICAgICAvLyBjbGVhciBwcm9qZWN0IGZvcm1cbiAgICAgICAgdXNlcklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIG11c3Qgbm90IGV4Y2VlZCAxMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdFRpdGxlLCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZQcm9qZWN0c0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1vZi1wcm9qZWN0c1wiKTtcbiAgICBjb25zdCBuZXdEb21Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIFRPRE8gLSBkaXYgZm9yIHJlbW92ZSBidG4gbm90IGdvb2QgZm9yIGFjY2Vzc2JpbGl0eSwgY29uc2lkZXIgY2hhbmdpbmdcbiAgICBuZXdEb21Qcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIG5ld0RvbVByb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBgJHtwcm9qZWN0SW5kZXh9YCk7XG4gICAgbmV3RG9tUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtYnV0dG9uX19wc2V1ZG9cIik7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCLinJZcIjtcbiAgICBuZXdEb21Qcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gICAgbGlzdE9mUHJvamVjdHNET00uYXBwZW5kQ2hpbGQobmV3RG9tUHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIubmV3LXByb2plY3QtYnV0dG9uX19wc2V1ZG9cIikpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0YXJnZXRlZERvbUVsZW0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGlzUHJvamVjdEVtcHR5ID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvRG8gPSB0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKClbaV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0RvLnByb2plY3QgPT09XG4gICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnN1YnN0cmluZygwLCBzZWxlY3RlZFByb2plY3QubGVuZ3RoIC0gMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXNQcm9qZWN0RW1wdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzUHJvamVjdEVtcHR5KSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICB0YXJnZXRlZERvbUVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIGNyZWF0ZWRET01wcm9qZWN0cy5zcGxpY2UoXG4gICAgICAgICAgY3JlYXRlZERPTXByb2plY3RzLmluZGV4T2Yoc2VsZWN0ZWRQcm9qZWN0KSxcbiAgICAgICAgICAxXG4gICAgICAgICk7XG4gICAgICAgIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHRvIHJlZmxlY3QgcmVtb3ZhbFxuICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UocHJvamVjdENvbnRhaW5lci5saXN0UHJvamVjdHMoKSwgXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlRoaXMgcHJvamVjdCBzdGlsbCBoYXMgc29tZSB1bmZpbmlzaGVkIHRvLWRvcy5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcbiAgcHJvamVjdFBvcHB1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RQb3BwdXApO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcbiAgY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0UG9wcHVwKTtcblxuICByZXR1cm4geyBkaXNwbGF5UHJvamVjdCB9O1xufSkoKTtcblxuY29uc3QgdG9Eb0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBvcGVuVG9Eb1BvcHB1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Blbi10b2RvLXBvcHB1cFwiKTtcbiAgY29uc3QgdG9Eb1BvcHB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wb3BwdXAtY29udGFpbmVyXCIpO1xuICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG9cIik7XG4gIGNvbnN0IGNhbmNlbFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC10b2RvLWJ0blwiKTtcbiAgY29uc3QgaGlkZVNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1sb2dvXCIpO1xuXG4gIGNvbnN0IGNsZWFyUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuYWRkZWQtcHJvamVjdC1vcHRpb25cIlxuICAgICk7XG4gICAgcHJvamVjdFNlbGVjdE1lbnUuZm9yRWFjaCgob3B0aW9uKSA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5Ub2RvUG9wcHVwID0gKCkgPT4ge1xuICAgIHRvRG9Gb3JtLnJlc2V0KCk7XG4gICAgdG9Eb1BvcHB1cC5jbGFzc0xpc3QuYWRkKFwib3Blbi10b2RvLWNvbnRhaW5lclwiKTtcbiAgICBjbGVhclByb2plY3RPcHRpb25zKCk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0XCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q29udGFpbmVyLmxpc3RQcm9qZWN0cygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdENvbnRhaW5lci5saXN0UHJvamVjdHMoKVtpXTtcblxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIGNvbnN0IG9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnByb2plY3QpO1xuICAgICAgbmV3T3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3Byb2plY3QucHJvamVjdH1gKTtcbiAgICAgIG5ld09wdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWRkZWQtcHJvamVjdC1vcHRpb25cIik7XG4gICAgICBwcm9qZWN0U2VsZWN0TWVudS5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIEVkaXQgYnV0dG9uIGhhcyBiZWVuIGNsaWNrIGFuZCBBZGQgYnRuIGhhcyBiZWVuIHJlbW92ZWQgLSBhZGQgaXQgYmFja1xuICAgIC8vIHdlIGNoZWNrIGNoaWxkcmVuWzBdIHNpbmNlIEFERCBidXR0b24gaXMgb3JpZ2luYWxseSBhdCB0aGUgMCBwb3NpdGlvbiBidXRcbiAgICAvLyBjaGFuZ2VzIHRvIFsxXSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBFZGl0IChmbGV4IHJvdy1yZXZlcnNlIGlzIHVzZWQpXG4gICAgY29uc3QgdG9Eb0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tYnV0dG9uc1wiKTtcbiAgICBpZiAodG9Eb0J0bnMuY2hpbGRyZW5bMF0uaWQgIT09IFwiYWRkLXRvZG8tYnRuXCIpIHtcbiAgICAgIHRvRG9CdG5zLmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xuICAgICAgY29uc3QgbmV3QWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld0FkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICBuZXdBZGRCdG4uaWQgPSBcImFkZC10b2RvLWJ0blwiO1xuICAgICAgdG9Eb0J0bnMuYXBwZW5kQ2hpbGQobmV3QWRkQnRuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xvc2VUb0RvUG9wcHVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9Eb1BvcHB1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi10b2RvLWNvbnRhaW5lclwiKTtcbiAgICB0b0RvRm9ybS5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvRG8gPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2FkZC10b2RvLWJ0blwiKSkge1xuICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gdG9Eb0Zvcm0uY2hpbGRyZW4uZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICBjb25zdCB0b0RvUHJpb3JpdHkgPVxuICAgICAgICB0b0RvRm9ybS5jaGlsZHJlbi5wcmlvcml0eS52YWx1ZSA9PT0gXCJub25lXCJcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IHRvRG9Gb3JtLmNoaWxkcmVuLnByaW9yaXR5LnZhbHVlO1xuICAgICAgY29uc3QgdG9Eb1Byb2plY3QgPVxuICAgICAgICB0b0RvRm9ybS5jaGlsZHJlbi5wcm9qZWN0LnZhbHVlID09PSBcIm5vbmVcIlxuICAgICAgICAgID8gXCJob21lXCJcbiAgICAgICAgICA6IHRvRG9Gb3JtLmNoaWxkcmVuLnByb2plY3QudmFsdWU7XG4gICAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IHRvRG9Gb3JtLmNoaWxkcmVuLmRhdGUudmFsdWU7XG4gICAgICBjb25zdCBjb252ZXJ0ZWREYXRlID0gdG9Eb0R1ZURhdGUgPT09IFwiXCIgPyBcIlwiIDogbmV3IERhdGUodG9Eb0R1ZURhdGUpO1xuICAgICAgY29uc3QgaXNUb0RvQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICBpZiAodG9Eb0Rlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IG5ldyBUb0RvKFxuICAgICAgICAgIHRvRG9EZXNjcmlwdGlvbixcbiAgICAgICAgICBjb252ZXJ0ZWREYXRlLFxuICAgICAgICAgIHRvRG9Qcmlvcml0eSxcbiAgICAgICAgICBpc1RvRG9Db21wbGV0ZWQsXG4gICAgICAgICAgdG9Eb1Byb2plY3RcbiAgICAgICAgKTtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hZGRUb0RvKG5ld1RvRG8pO1xuICAgICAgICBjb25zdCBuZXdUb0RvSW5kZXggPSBuZXdUb0RvLmluZGV4O1xuXG4gICAgICAgIC8vIHNhdmUgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UodG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpLCBcInRvZG9cIik7XG5cbiAgICAgICAgZGlzcGxheVRvRG8oXG4gICAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgIGNvbnZlcnRlZERhdGUsXG4gICAgICAgICAgdG9Eb1Byb2plY3QsXG4gICAgICAgICAgdG9Eb1ByaW9yaXR5LFxuICAgICAgICAgIG5ld1RvRG9JbmRleCxcbiAgICAgICAgICBpc1RvRG9Db21wbGV0ZWRcbiAgICAgICAgKTtcblxuICAgICAgICB0b0RvUG9wcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXRvZG8tY29udGFpbmVyXCIpO1xuICAgICAgfVxuICAgICAgdG9Eb0Zvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRvRG8gPSAoXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcm9qZWN0LFxuICAgIHByaW9yaXR5LFxuICAgIGluZGV4LFxuICAgIGlzVG9Eb0NvbXBsZXRlZCxcbiAgICBpc0RhdGVSZWxhdGVkXG4gICkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgY29uc3QgcHJvamV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG5cbiAgICAvLyBvbmx5IGRpc3BsYXkgdGhlIFRvRG8gaWYgdXNlciBpcyBjdXJyZW50bHkgaW5zaWRlIHRoZSByZWxldmFudCBwcm9qZWN0XG5cbiAgICBpZiAoXG4gICAgICBwcm9qZXRUaXRsZS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09PSBwcm9qZWN0LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgIGlzRGF0ZVJlbGF0ZWRcbiAgICApIHtcbiAgICAgIC8vIGNyZWF0aW5nIHRoZSBET00gZWxlbWVudHMgZm9yIHRoZSBUb0Rvc1xuICAgICAgY29uc3QgdG9Eb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdG9Eb1VwcGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvRG9Jc0NvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRvRG9Jc0NvbXBsZXRlZC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvRG9FZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHRvRG9FZGl0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgdG9Eb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCB0b0RvRGVsZXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgdG9Eb0xvd2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRvRG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgdG9Eb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9Eb1VwcGVyUm93KTtcbiAgICAgIHRvRG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvRG9Mb3dlclJvdyk7XG4gICAgICB0b0RvVXBwZXJSb3cuYXBwZW5kQ2hpbGQodG9Eb0lzQ29tcGxldGVkKTtcbiAgICAgIHRvRG9VcHBlclJvdy5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb24pO1xuICAgICAgdG9Eb1VwcGVyUm93LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcbiAgICAgIHRvRG9VcHBlclJvdy5hcHBlbmRDaGlsZCh0b0RvRWRpdEJ0bik7XG4gICAgICB0b0RvRWRpdEJ0bi5hcHBlbmRDaGlsZCh0b0RvRWRpdFNwYW4pO1xuICAgICAgdG9Eb1VwcGVyUm93LmFwcGVuZENoaWxkKHRvRG9EZWxldGVCdG4pO1xuICAgICAgdG9Eb0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZCh0b0RvRGVsZXRlU3Bhbik7XG4gICAgICB0b0RvTG93ZXJSb3cuYXBwZW5kQ2hpbGQodG9Eb1Byb2plY3QpO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvV3JhcHBlcik7XG5cbiAgICAgIC8vIGFkZGluZyBzdHlsZXMvaWRzXG4gICAgICB0b0RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG4gICAgICB0b0RvVXBwZXJSb3cuY2xhc3NMaXN0LmFkZChcInRvZG8tdXBwZXItcm93XCIpO1xuICAgICAgdG9Eb0xvd2VyUm93LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxvd2VyLXJvd1wiKTtcbiAgICAgIHRvRG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvbi1maWVsZFwiKTtcbiAgICAgIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuICAgICAgdG9Eb0VkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZWRpdFwiKTtcbiAgICAgIHRvRG9FZGl0U3Bhbi5jbGFzc0xpc3QuYWRkKFwidG9kby1lZGl0LXNwYW5cIik7XG4gICAgICB0b0RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICAgIHRvRG9EZWxldGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZS1zcGFuXCIpO1xuICAgICAgaWYgKGluZGV4ICE9PSBcIlwiKSB7XG4gICAgICAgIHRvRG9XcmFwcGVyLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgYCR7aW5kZXh9YCk7XG4gICAgICB9XG4gICAgICB0b0RvTG93ZXJSb3cuaWQgPSBwcm9qZWN0O1xuICAgICAgdG9Eb0lzQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1pZi1jb21wbGV0ZWRcIik7XG5cbiAgICAgIC8vIHBvcHVsYXRpbmcgZmllbGRzXG4gICAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID1cbiAgICAgICAgZHVlRGF0ZSA9PT0gXCJcIiA/IFwiXCIgOiBkdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgdG9Eb1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgdG9Eb0VkaXRTcGFuLnRleHRDb250ZW50ID0gXCJlZGl0X25vdGVcIjtcbiAgICAgIHRvRG9EZWxldGVTcGFuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcblxuICAgICAgLy8gYWRkIGRhdGEtaW5kZXh0IHRvIGVkaXQgYnRuIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIHRvRG9FZGl0U3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgIHRvRG9Jc0NvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0b0RvSXNDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRvRG9Jc0NvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RvRG9Db21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWQtdG9kb1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVUb0RvID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5jaGVjay1pZi1jb21wbGV0ZWRcIikpIHtcbiAgICAgIGNvbnN0IHRhcmdldFRvRG9EZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICBjb25zdCB0YXJnZXRlZFRvRG9JbmRleCA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGFyZ2V0VG9Eb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWQtdG9kb1wiKTtcbiAgICAgIGNvbnN0IHRhcmdldGVkVG9EbyA9IHRvRG9Db250YWluZXIuZmluZFRvRG8odGFyZ2V0ZWRUb0RvSW5kZXgpO1xuICAgICAgdGFyZ2V0ZWRUb0RvLmNvbXBsZXRlZCA9ICF0YXJnZXRlZFRvRG8uY29tcGxldGVkO1xuICAgICAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgdG8gcmVmbGVjdCBjb21wbGV0aW9uXG4gICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UodG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpLCBcInRvZG9cIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJFRkFDVE9SIEJFTE9XXG5cbiAgY29uc3Qgb3BlbkVkaXRUb2RvID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50b2RvLWVkaXQtc3BhblwiKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ZWRUb0RvRWxlbSA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdGFyZ2V0ZWRUb0RvSW5kZXggPSB0YXJnZXRlZFRvRG9FbGVtLmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBjb3JyZXNwb25kaW5nVG9EbyA9IHRvRG9Db250YWluZXIuZmluZFRvRG8odGFyZ2V0ZWRUb0RvSW5kZXgpO1xuICAgICAgLy8gYXBwbHkgdGhlIGluZGV4IGNyZWF0ZWQgaW4gZGlzcGxheVRvZG8oKSBhYm92ZSB0byBkaWZmZXJlbnRpYXRlIGVkaXRzXG4gICAgICBjb25zdCBlZGl0U3BhbkluZGV4ID0gdGFyZ2V0ZWRUb0RvSW5kZXg7XG5cbiAgICAgIHRvRG9Qb3BwdXAuY2xhc3NMaXN0LmFkZChcIm9wZW4tdG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIC8vIGZpbGwgb3V0IGZpZWxkcyB3aXRoIGNvcnJlc3BvbmRpbmcgdG9kbyBkZXRhaWxzXG4gICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgICB0b0RvRGVzY3JpcHRpb25GaWVsZC52YWx1ZSA9IGNvcnJlc3BvbmRpbmdUb0RvLmRlc2NyaXB0aW9uO1xuICAgICAgLy8gcmVmcmVzaCBwcm9qZWN0cyBhbmQgc2VsZWN0IGN1cnJlbnQgdG9kbyBwcm9qZWN0XG4gICAgICBjbGVhclByb2plY3RPcHRpb25zKCk7XG4gICAgICBjb25zdCBwcm9qZWN0U2VsZWN0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LXByb2plY3RcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RDb250YWluZXIubGlzdFByb2plY3RzKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RDb250YWluZXIubGlzdFByb2plY3RzKClbaV07XG5cbiAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QucHJvamVjdCk7XG4gICAgICAgIG5ld09wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25UZXh0KTtcbiAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3Byb2plY3QucHJvamVjdH1gKTtcbiAgICAgICAgbmV3T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZGRlZC1wcm9qZWN0LW9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHByb2plY3RTZWxlY3RNZW51LnZhbHVlID0gY29ycmVzcG9uZGluZ1RvRG8ucHJvamVjdDtcbiAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG4gICAgICBwcmlvcml0eVNlbGVjdE1lbnUudmFsdWUgPSBjb3JyZXNwb25kaW5nVG9Eby5wcmlvcml0eTtcbiAgICAgIGNvbnN0IHRvRG9EYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG4gICAgICB0b0RvRGF0ZUZpZWxkLnZhbHVlID1cbiAgICAgICAgY29ycmVzcG9uZGluZ1RvRG8uZHVlRGF0ZSA9PT0gXCJcIlxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogY29ycmVzcG9uZGluZ1RvRG8uZHVlRGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICAgICAgLy8gY3JlYXRlIGVkaXQgYnV0dG9uIGlmIG9uZSBkb2Vzbid0IGV4aXN0IGFuZCB1cGRhdGUgaXQncyBpbmRleFxuXG4gICAgICBjb25zdCB0b0RvQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1idXR0b25zXCIpO1xuICAgICAgaWYgKHRvRG9CdG5zLmNoaWxkcmVuWzFdLmlkICE9PSBcImVkaXQtdG9kby1idG5cIikge1xuICAgICAgICBjb25zdCBuZXdFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3RWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIG5ld0VkaXRCdG4uaWQgPSBcImVkaXQtdG9kby1idG5cIjtcbiAgICAgICAgbmV3RWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGVkaXRTcGFuSW5kZXgpO1xuICAgICAgICBuZXdFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJuZXctZWRpdC1idG5cIik7XG4gICAgICAgIGNvbnN0IG9sZEFkZFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWJ0blwiKTtcbiAgICAgICAgb2xkQWRkVG9Eb0J0bi5yZW1vdmUoKTtcbiAgICAgICAgdG9Eb0J0bnMuYXBwZW5kQ2hpbGQobmV3RWRpdEJ0bik7XG4gICAgICAgIHRvRG9CdG5zLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1wiKTtcbiAgICAgIH0gZWxzZSBpZiAodG9Eb0J0bnMuY2hpbGRyZW5bMV0uaWQgPT09IFwiZWRpdC10b2RvLWJ0blwiKSB7XG4gICAgICAgIHRvRG9CdG5zLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgZWRpdFNwYW5JbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGUpID0+IHtcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gbmV3IGVkaXQgYnRuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIubmV3LWVkaXQtYnRuXCIpKSB7XG4gICAgICBjb25zdCB0b0RvSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3QgdG9Eb1RvQmVFZGl0ZWQgPSB0b0RvQ29udGFpbmVyLmZpbmRUb0RvKHRvRG9JbmRleCk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gdG9Eb1RvQmVFZGl0ZWQucHJvamVjdDtcblxuICAgICAgLy8gdXBkYXRlIHZhbHVlcyBpZiBjaGFuZ2VkXG4gICAgICBpZiAodG9Eb0Zvcm0uY2hpbGRyZW4uZGVzY3JpcHRpb24udmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b0RvVG9CZUVkaXRlZC5kZXNjcmlwdGlvbiA9IHRvRG9Gb3JtLmNoaWxkcmVuLmRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICB0b0RvVG9CZUVkaXRlZC5wcmlvcml0eSA9XG4gICAgICAgICAgdG9Eb0Zvcm0uY2hpbGRyZW4ucHJpb3JpdHkudmFsdWUgPT09IFwibm9uZVwiXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogdG9Eb0Zvcm0uY2hpbGRyZW4ucHJpb3JpdHkudmFsdWU7XG4gICAgICAgIHRvRG9Ub0JlRWRpdGVkLnByb2plY3QgPSB0b0RvRm9ybS5jaGlsZHJlbi5wcm9qZWN0LnZhbHVlO1xuICAgICAgICB0b0RvVG9CZUVkaXRlZC5kdWVEYXRlID1cbiAgICAgICAgICB0b0RvRm9ybS5jaGlsZHJlbi5kYXRlLnZhbHVlID09PSBcIlwiXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogbmV3IERhdGUodG9Eb0Zvcm0uY2hpbGRyZW4uZGF0ZS52YWx1ZSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgdG8gcmVmbGVjdCBhbnkgY2hhbmdlc1xuICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UodG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpLCBcInRvZG9cIik7XG5cbiAgICAgICAgLy8gcmVsb2FkIHBhZ2UgdG8gZGlzcGxheSB1cGRhdGVkIHRvLWRvKHMpXG4gICAgICAgIHJlbG9hZFBhZ2UoY3VycmVudFByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgdG9Eb1BvcHB1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi10b2RvLWNvbnRhaW5lclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudG9kby1kZWxldGUtc3BhblwiKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ZWRUb0RvRWxlbSA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdGFyZ2V0ZWRUb0RvSW5kZXggPSB0YXJnZXRlZFRvRG9FbGVtLmRhdGFzZXQuaW5kZXg7XG4gICAgICB0YXJnZXRlZFRvRG9FbGVtLnJlbW92ZSgpO1xuICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVUb0RvKHRhcmdldGVkVG9Eb0luZGV4KTtcbiAgICAgIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHRvIHJlZmxlY3QgcmVtb3ZhbFxuICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKHRvRG9Db250YWluZXIubGlzdE9mVG9kb3MoKSwgXCJ0b2RvXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWRlU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZWJhclwiKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kLW1haW5cIik7XG4gIH07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvRG8pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29tcGxldGVUb0RvKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0VG9kbyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kbyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUb2RvKTtcbiAgb3BlblRvRG9Qb3BwdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Ub2RvUG9wcHVwKTtcbiAgY2FuY2VsVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUb0RvUG9wcHVwKTtcbiAgaGlkZVNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKTtcblxuICByZXR1cm4geyBkaXNwbGF5VG9EbyB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIHRvRG9Db250cm9sbGVyIH07XG4iLCJjb25zdCBsaXN0T2ZQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0Q29udGFpbmVyIHtcbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGlmICghbGlzdE9mUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgIGxpc3RPZlByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIGxpc3RPZlByb2plY3RzLnNwbGljZShsaXN0T2ZQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgfVxuXG4gIHN0YXRpYyBsaXN0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIGxpc3RPZlByb2plY3RzO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHByb2plY3RDb250YWluZXIgZnJvbSBcIi4vcHJvamVjdENvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIGluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmluZGV4ID0gdXVpZHY0KCk7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvamVjdDtcbiAgfVxuXG4gIHNldCBwcm9qZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFwcm9qZWN0Q29udGFpbmVyLmxpc3RQcm9qZWN0cygpLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2F2ZUluTG9jYWxTdG9yYWdlID0gKGxpc3QsIHR5cGUpID0+IHtcbiAgaWYgKHR5cGUgPT09IFwidG9kb1wiKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvXCIsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInByb2plY3RcIikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFRvRG9Gcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZWRUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvXCIpKTtcbiAgcmV0dXJuIHN0b3JlZFRvZG9zO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RcIikpO1xuICByZXR1cm4gc3RvcmVkUHJvamVjdHM7XG59O1xuXG5leHBvcnQge1xuICBzYXZlSW5Mb2NhbFN0b3JhZ2UsXG4gIGdldFRvRG9Gcm9tTG9jYWxTdG9yYWdlLFxuICBnZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSxcbn07XG4iLCJjb25zdCBsaXN0T2ZUb2RvcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b0RvQ29udGFpbmVyIHtcbiAgc3RhdGljIGFkZFRvRG8odG9kbykge1xuICAgIGxpc3RPZlRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICBzdGF0aWMgZmluZFRvRG8odG9Eb0luZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2ZUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RPZlRvZG9zW2ldLmluZGV4ID09PSB0b0RvSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RPZlRvZG9zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUb0RvKHRvRG9JbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9mVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0T2ZUb2Rvc1tpXS5pbmRleCA9PT0gdG9Eb0luZGV4KSB7XG4gICAgICAgIGxpc3RPZlRvZG9zLnNwbGljZShsaXN0T2ZUb2Rvcy5pbmRleE9mKGxpc3RPZlRvZG9zW2ldKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGxpc3RPZlRvZG9zKCkge1xuICAgIHJldHVybiBsaXN0T2ZUb2RvcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbi8vIHV1aWQgZW5zdXJlcyB3ZSBoYXZlIHVuaXF1ZSBJRHMgYWNyb3NzIGluc3RhbmNlcyB0aGF0IHBlcnNpc3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQsIHByb2plY3QgPSBcIkhvbWVcIikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IHV1aWR2NCgpO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnREZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuY3VycmVudERlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50RHVlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuY3VycmVudFByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRJc0NvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBjb21wbGV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnRJc0NvbXBsZXRlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2plY3Q7XG4gIH1cblxuICBzZXQgcHJvamVjdCh2YWx1ZSkge1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNUb2RheSwgZW5kT2ZUb2RheSwgaXNBZnRlciB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHRvRG9Db250YWluZXIgZnJvbSBcIi4vdG9Eb0NvbnRhaW5lclwiO1xuaW1wb3J0IHByb2plY3RDb250YWluZXIgZnJvbSBcIi4vcHJvamVjdENvbnRhaW5lclwiO1xuaW1wb3J0IHsgdG9Eb0NvbnRyb2xsZXIsIHByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vZ3JhcGhpY3NDb250cm9sbGVyXCI7XG5pbXBvcnQge1xuICBzYXZlSW5Mb2NhbFN0b3JhZ2UsXG4gIGdldFRvRG9Gcm9tTG9jYWxTdG9yYWdlLFxuICBnZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG5jb25zdCBsYXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dC03LWRheXNcIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gIHdoaWxlIChtYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFRvZG9zID0gZ2V0VG9Eb0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBnZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gIC8vIHJlc3RvcmUgc3RvcmVkIHByb2plY3RzXG4gIGlmIChzdG9yZWRQcm9qZWN0cyAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBzdG9yZWRQcm9qZWN0c1tpXTtcbiAgICAgIGNvbnN0IHJlc3RvcmVkUHJvamVjdFRpdGxlID0gcHJvamVjdC5jdXJyZW50UHJvamVjdDtcbiAgICAgIGNvbnN0IHJlc3RvcmVkUHJvamVjdCA9IG5ldyBQcm9qZWN0KHJlc3RvcmVkUHJvamVjdFRpdGxlKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuYWRkUHJvamVjdChyZXN0b3JlZFByb2plY3QpO1xuXG4gICAgICBwcm9qZWN0Q29udHJvbGxlci5kaXNwbGF5UHJvamVjdChcbiAgICAgICAgcmVzdG9yZWRQcm9qZWN0LnByb2plY3QsXG4gICAgICAgIHJlc3RvcmVkUHJvamVjdC5pbmRleFxuICAgICAgKTtcbiAgICAgIC8vIHJlZnJlc2ggbG9jYWxTdG9yYWdlIHRvIHJlZmxlY3QgbmV3IGluZGljZXNcbiAgICAgIHNhdmVJbkxvY2FsU3RvcmFnZShwcm9qZWN0Q29udGFpbmVyLmxpc3RQcm9qZWN0cygpLCBcInByb2plY3RcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzdG9yZSBzdG9yZWQgdG8tZG9zXG4gIGlmIChzdG9yZWRUb2RvcyAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RvcmVkVG9kb3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRvRG8gPSBzdG9yZWRUb2Rvc1tqXTtcbiAgICAgIGNvbnN0IHJlc3RvcmVkVG9Eb0Rlc2NyaXB0aW9uID0gdG9Eby5jdXJyZW50RGVzY3JpcHRpb247XG4gICAgICBjb25zdCByZXN0b3JlZFRvRG9EdWVEYXRlID0gdG9Eby5jdXJyZW50RHVlRGF0ZTtcbiAgICAgIC8vIGNvbnZlcnQgZGF0ZSB0byBEYXRlIG9iaiBmb3IgZGF0ZS1mbnMgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgIGNvbnN0IGNvbnZlcnRlZERhdGUgPVxuICAgICAgICByZXN0b3JlZFRvRG9EdWVEYXRlID09PSBcIlwiID8gXCJcIiA6IG5ldyBEYXRlKHJlc3RvcmVkVG9Eb0R1ZURhdGUpO1xuICAgICAgY29uc3QgcmVzdG9yZWRUb0RvUHJpb3JpdHkgPSB0b0RvLmN1cnJlbnRQcmlvcml0eTtcbiAgICAgIGNvbnN0IHJlc3RvcmVkVG9Eb0NvbXBsZXRlZCA9IHRvRG8uY3VycmVudElzQ29tcGxldGVkO1xuICAgICAgY29uc3QgcmVzdG9yZWRUb0RvUHJvamVjdCA9IHRvRG8uY3VycmVudFByb2plY3Q7XG5cbiAgICAgIGNvbnN0IHJlc3RvcmVkVG9EbyA9IG5ldyBUb0RvKFxuICAgICAgICByZXN0b3JlZFRvRG9EZXNjcmlwdGlvbixcbiAgICAgICAgY29udmVydGVkRGF0ZSxcbiAgICAgICAgcmVzdG9yZWRUb0RvUHJpb3JpdHksXG4gICAgICAgIHJlc3RvcmVkVG9Eb0NvbXBsZXRlZCxcbiAgICAgICAgcmVzdG9yZWRUb0RvUHJvamVjdFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3RvcmVkVG9Eb0luZGV4ID0gcmVzdG9yZWRUb0RvLmluZGV4O1xuXG4gICAgICB0b0RvQ29udGFpbmVyLmFkZFRvRG8ocmVzdG9yZWRUb0RvKTtcbiAgICAgIHRvRG9Db250cm9sbGVyLmRpc3BsYXlUb0RvKFxuICAgICAgICByZXN0b3JlZFRvRG9EZXNjcmlwdGlvbixcbiAgICAgICAgY29udmVydGVkRGF0ZSxcbiAgICAgICAgcmVzdG9yZWRUb0RvUHJvamVjdCxcbiAgICAgICAgcmVzdG9yZWRUb0RvUHJpb3JpdHksXG4gICAgICAgIHJlc3RvcmVkVG9Eb0luZGV4LFxuICAgICAgICByZXN0b3JlZFRvRG9Db21wbGV0ZWRcbiAgICAgICk7XG5cbiAgICAgIC8vIHJlZnJlc2ggbG9jYWxTdG9yYWdlIHRvIHJlZmxlY3QgbmV3IGluZGljZXNcbiAgICAgIHNhdmVJbkxvY2FsU3RvcmFnZSh0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKCksIFwidG9kb1wiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGxvYWREZWZhdWx0ID0gKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ZWREZWZhdWxQcm9qZWN0ID0gZS50YXJnZXQ7XG4gIGNvbnN0IHRhcmdldGVkRGVmYXVsdFByb2plY3RWYWx1ZSA9IHRhcmdldGVkRGVmYXVsUHJvamVjdC50ZXh0Q29udGVudDtcbiAgaWYgKHRhcmdldGVkRGVmYXVsUHJvamVjdC5tYXRjaGVzKFwiLnByb2plY3QtYnV0dG9uXCIpKSB7XG4gICAgLy8gcmVtb3ZlIGhpZ2hsaWdodCBmcm9tIGFueSBuZXcgcHJvamVjdCBidG5zXG4gICAgY29uc3QgYWxsUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBhbGxQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAvLyBhZGQgaGlnaGxpZ2h0IHRvIHNlbGVjdGVkIGRlZmF1bHQgcHJvamVjdCBidG5cbiAgICBjb25zdCBhbGxEZWZhdWx0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBhbGxEZWZhdWx0QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKHRhcmdldGVkRGVmYXVsdFByb2plY3RWYWx1ZSAhPT0gYnV0dG9uLnRleHRDb250ZW50KSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGFyZ2V0ZWREZWZhdWx0UHJvamVjdFZhbHVlO1xuXG4gICAgaWYgKHRhcmdldGVkRGVmYXVsdFByb2plY3RWYWx1ZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9Db250YWluZXIubGlzdE9mVG9kb3MoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b0RvID0gdG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpW2ldO1xuICAgICAgICBjb25zdCB0b0RvRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZHVlRGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzRGF0ZVJlbGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChpc1RvZGF5KHRvRG9EYXRlKSkge1xuICAgICAgICAgIHRvRG9Db250cm9sbGVyLmRpc3BsYXlUb0RvKFxuICAgICAgICAgICAgdG9Eby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRvRG9EYXRlLFxuICAgICAgICAgICAgdG9Eby5wcm9qZWN0LFxuICAgICAgICAgICAgdG9Eby5wcmlvcml0eSxcbiAgICAgICAgICAgIHRvRG8uaW5kZXgsXG4gICAgICAgICAgICB0b0RvLmNvbXBsZXRlZCxcbiAgICAgICAgICAgIGlzRGF0ZVJlbGF0ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXJnZXRlZERlZmF1bHRQcm9qZWN0VmFsdWUgPT09IFwiSG9tZVwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9Db250YWluZXIubGlzdE9mVG9kb3MoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b0RvID0gdG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpW2ldO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0b0RvLnByb2plY3QudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICB0YXJnZXRlZERlZmF1bHRQcm9qZWN0VmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICApIHtcbiAgICAgICAgICB0b0RvQ29udHJvbGxlci5kaXNwbGF5VG9EbyhcbiAgICAgICAgICAgIHRvRG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0b0RvLmR1ZURhdGUsXG4gICAgICAgICAgICB0b0RvLnByb2plY3QsXG4gICAgICAgICAgICB0b0RvLnByaW9yaXR5LFxuICAgICAgICAgICAgdG9Eby5pbmRleCxcbiAgICAgICAgICAgIHRvRG8uY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWREZWZhdWx0UHJvamVjdFZhbHVlID09PSBcIkxhdGVyXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvRG8gPSB0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKClbaV07XG4gICAgICAgIGNvbnN0IHRvRG9EYXRlID0gbmV3IERhdGUodG9Eby5kdWVEYXRlKTtcbiAgICAgICAgY29uc3QgdG9kYXlzRGF0ZSA9IGVuZE9mVG9kYXkoKTtcbiAgICAgICAgY29uc3QgaXNEYXRlUmVsYXRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGlzQWZ0ZXIodG9Eb0RhdGUsIHRvZGF5c0RhdGUpKSB7XG4gICAgICAgICAgdG9Eb0NvbnRyb2xsZXIuZGlzcGxheVRvRG8oXG4gICAgICAgICAgICB0b0RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdG9Eb0RhdGUsXG4gICAgICAgICAgICB0b0RvLnByb2plY3QsXG4gICAgICAgICAgICB0b0RvLnByaW9yaXR5LFxuICAgICAgICAgICAgdG9Eby5pbmRleCxcbiAgICAgICAgICAgIHRvRG8uY29tcGxldGVkLFxuICAgICAgICAgICAgaXNEYXRlUmVsYXRlZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB0b2RheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBsYXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBjbGVhckNvbnRlbnQoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKCkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b0RvID0gdG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpW2ldO1xuICAgIGlmICh0b0RvLnByb2plY3QgPT09IFwiaG9tZVwiKSB7XG4gICAgICB0b0RvQ29udHJvbGxlci5kaXNwbGF5VG9EbyhcbiAgICAgICAgdG9Eby5kZXNjcmlwdGlvbixcbiAgICAgICAgdG9Eby5kdWVEYXRlLFxuICAgICAgICB0b0RvLnByb2plY3QsXG4gICAgICAgIHRvRG8ucHJpb3JpdHksXG4gICAgICAgIHRvRG8uaW5kZXgsXG4gICAgICAgIHRvRG8uY29tcGxldGVkXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcmVsb2FkUGFnZSA9ICh0aXRsZSkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKCkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b0RvID0gdG9Eb0NvbnRhaW5lci5saXN0T2ZUb2RvcygpW2ldO1xuICAgIGlmICh0b0RvLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICB0b0RvQ29udHJvbGxlci5kaXNwbGF5VG9EbyhcbiAgICAgICAgdG9Eby5kZXNjcmlwdGlvbixcbiAgICAgICAgdG9Eby5kdWVEYXRlLFxuICAgICAgICB0b0RvLnByb2plY3QsXG4gICAgICAgIHRvRG8ucHJpb3JpdHksXG4gICAgICAgIHRvRG8uaW5kZXgsXG4gICAgICAgIHRvRG8uY29tcGxldGVkXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgbG9hZFByb2plY3QgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5uZXctcHJvamVjdC1idXR0b25cIikpIHtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RWYWx1ZSA9IHNlbGVjdGVkUHJvamVjdC5zdWJzdHJpbmcoXG4gICAgICAwLFxuICAgICAgc2VsZWN0ZWRQcm9qZWN0Lmxlbmd0aCAtIDFcbiAgICApO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdFZhbHVlO1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIC8vIHJlbW92ZSBhbnkgaGlnaGxpZ2h0IGZyb20gZGVmYXVsdCBidXR0b25zXG4gICAgY29uc3QgYWxsRGVmYXVsdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIik7XG4gICAgYWxsRGVmYXVsdEJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcblxuICAgIC8vIGFkZCBoaWdobGlnaHQgdG8gc2VsZWN0ZWQgYnV0dG9uXG4gICAgY29uc3QgYWxsUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBhbGxQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFByb2plY3QgIT09IGJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRvRG8gPSB0b0RvQ29udGFpbmVyLmxpc3RPZlRvZG9zKClbaV07XG5cbiAgICAgIGlmICh0b0RvLnByb2plY3QgPT09IHByb2plY3RUaXRsZS50ZXh0Q29udGVudCkge1xuICAgICAgICB0b0RvQ29udHJvbGxlci5kaXNwbGF5VG9EbyhcbiAgICAgICAgICB0b0RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHRvRG8uZHVlRGF0ZSxcbiAgICAgICAgICB0b0RvLnByb2plY3QsXG4gICAgICAgICAgdG9Eby5wcmlvcml0eSxcbiAgICAgICAgICB0b0RvLmluZGV4LFxuICAgICAgICAgIHRvRG8uY29tcGxldGVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFByb2plY3QpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWREZWZhdWx0KTtcblxuZXhwb3J0IHsgbG9hZERlZmF1bHQsIGxvYWRQcm9qZWN0LCBsb2FkSG9tZSwgaW5pdGlhbExvYWQsIHJlbG9hZFBhZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB0b0RvQ29udGFpbmVyIGZyb20gXCIuL3RvRG9Db250YWluZXJcIjtcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyIGZyb20gXCIuL3Byb2plY3RDb250YWluZXJcIjtcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyLCB0b0RvQ29udHJvbGxlciB9IGZyb20gXCIuL2dyYXBoaWNzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi92aWV3TG9hZGVyXCI7XG5cbmNvbnN0IHN0YXJ0VXAgPSAoKCkgPT4ge1xuICAvLyB1c2luZyBQZXJmb3JtYW5jZU5hdmlnYXRpb25UaW1pbmcgdG8gY2hlY2sgaWYgdXNlciBoYXMgcmVsb2FkZWQgb3Igb3BlbmVkIHVwIHRoZSBhcHBcbiAgY29uc3QgcGVyZlRpbWluZyA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpWzBdO1xuXG4gIGlmIChwZXJmVGltaW5nLnR5cGUgPT09IFwicmVsb2FkXCIgfHwgcGVyZlRpbWluZy50eXBlID09PSBcIm5hdmlnYXRlXCIpIHtcbiAgICBpbml0aWFsTG9hZCgpO1xuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9