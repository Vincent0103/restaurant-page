/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addContactContent)\n/* harmony export */ });\nfunction addContactContent() {\r\n  const contactContent = document.querySelector(\"#content\");\r\n  const contentBg = document.createElement(\"div\");\r\n  contentBg.classList.add(\"contact-content-bg\");\r\n  contactContent.appendChild(contentBg);\r\n\r\n  const contactUsHeading = document.createElement(\"h1\");\r\n  contactUsHeading.textContent = \"CONTACT US\";\r\n\r\n  const tel = document.createElement(\"h2\");\r\n  tel.textContent = \"Phones\";\r\n\r\n  const firstNbDiv = document.createElement(\"div\");\r\n  firstNbDiv.classList.add(\"first-nb-div\");\r\n\r\n  const firstNbLabel = document.createElement(\"label\");\r\n  firstNbLabel.setAttribute(\"for\", \"first-nb\");\r\n  firstNbLabel.textContent = \"Local: \";\r\n\r\n  const firstNb = document.createElement(\"p\");\r\n  firstNb.setAttribute(\"id\", \"first-nb\");\r\n  firstNb.textContent = \"873-239-2398\";\r\n\r\n\r\n  const secondNbDiv = document.createElement(\"div\");\r\n  secondNbDiv.classList.add(\"second-nb-div\");\r\n\r\n  const secondNbLabel = document.createElement(\"label\");\r\n  secondNbLabel.setAttribute(\"for\", \"second-nb\");\r\n  secondNbLabel.textContent = \"Fix: \";\r\n\r\n  const secondNb = document.createElement(\"p\");\r\n  secondNb.setAttribute(\"id\", \"second-nb\")\r\n  secondNb.textContent = \"574-240-2404\";\r\n\r\n  const emailHeading = document.createElement(\"h2\");\r\n  emailHeading.textContent = \"Email\";\r\n\r\n  const emailP = document.createElement(\"p\");\r\n  emailP.textContent = \"sachet27@fsure.tui\";\r\n\r\n\r\n  firstNbDiv.append(firstNbLabel, firstNb);\r\n  secondNbDiv.append(secondNbLabel, secondNb);\r\n  contentBg.append(contactUsHeading, tel, firstNbDiv, secondNbDiv, emailHeading, emailP);\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/contact.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;