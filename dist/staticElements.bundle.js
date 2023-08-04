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

/***/ "./src/staticElements.js":
/*!*******************************!*\
  !*** ./src/staticElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHeader)\n/* harmony export */ });\nfunction addHeader() {\r\n    let headerLinks = [];\r\n    const headerNavbar = document.createElement(\"div\");\r\n    headerNavbar.classList.add(\"header\");\r\n\r\n    const brandName = document.createElement(\"h1\");\r\n    brandName.classList.add(\"brand-name\");\r\n    brandName.textContent = \"Sachet\";\r\n\r\n    const ul = document.createElement(\"ul\");\r\n\r\n    const homeLink = document.createElement(\"li\");\r\n    homeLink.classList.add(\"navbar-links\");\r\n    headerLinks.push(homeLink);\r\n    homeLink.textContent = \"Home\";\r\n\r\n    const menuLink = document.createElement(\"li\");\r\n    menuLink.classList.add(\"navbar-links\");\r\n    headerLinks.push(menuLink);\r\n    menuLink.textContent = \"Menu\";\r\n\r\n    const contactLink = document.createElement(\"li\");\r\n    contactLink.classList.add(\"navbar-links\");\r\n    headerLinks.push(contactLink);\r\n    contactLink.textContent = \"Contact\";\r\n\r\n    ul.append(homeLink, menuLink, contactLink);\r\n    headerNavbar.appendChild(brandName);\r\n    headerNavbar.appendChild(ul);\r\n\r\n    const content = document.querySelector(\"#content\");\r\n    headerLinks.forEach(link => {\r\n        link.addEventListener(\"click\", () => {\r\n            if (link.textContent === \"Home\") {\r\n                content.setAttribute(\"data-index\", 1);\r\n            } else if (link.textContent === \"Menu\") {\r\n                content.setAttribute(\"data-index\", 2);\r\n            } else {\r\n                content.setAttribute(\"data-index\", 3);\r\n            }\r\n        })\r\n    })\r\n    return headerNavbar;\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/staticElements.js?");

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
/******/ 	__webpack_modules__["./src/staticElements.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;