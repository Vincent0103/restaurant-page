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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHomeContent)\n/* harmony export */ });\n/* harmony import */ var _components_assets_base_tacos2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/assets/base-tacos2.png */ \"./src/components/assets/base-tacos2.png\");\n/* harmony import */ var _components_assets_tacos_restaurant2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/assets/tacos-restaurant2.jpg */ \"./src/components/assets/tacos-restaurant2.jpg\");\n\r\n\r\n\r\nfunction addHomeContent() {\r\n  const homeContent = document.querySelector(\"#content\");\r\n\r\n  const contentBg = document.createElement(\"div\");\r\n  contentBg.classList.add(\"content-bg\");\r\n  homeContent.appendChild(contentBg);\r\n\r\n  const sloganContainer = document.createElement(\"div\");\r\n  sloganContainer.classList.add(\"slogan-container\");\r\n\r\n  const descBg = new Image();\r\n  descBg.src = _components_assets_base_tacos2_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  const slogan = document.createElement(\"h2\");\r\n  slogan.innerHTML = \"Unleash the Flavor Fiesta:<br> Tacos Galore!\";\r\n\r\n  const leftDivRotation = document.createElement(\"div\");\r\n  leftDivRotation.classList.add(\"left-div-rotation\");\r\n\r\n  const descContainer = document.createElement(\"div\");\r\n  descContainer.classList.add(\"desc-container\");\r\n\r\n  const h2 = document.createElement(\"h2\");\r\n  h2.textContent = \"Welcome to Sachet\";\r\n\r\n  const descP = document.createElement(\"p\");\r\n  descP.innerHTML = \"- where authentic flavors meet modern innovation! Nestled in the heart of the bustling city, our tacos restaurant promises a delightful culinary journey that tantalizes your taste buds and leaves you craving for more.\";\r\n\r\n  const availableHoursAd = document.createElement(\"h2\");\r\n  availableHoursAd.textContent = \"So when are we available?\"\r\n\r\n  const hoursCardContainer = document.createElement(\"div\");\r\n  hoursCardContainer.classList.add(\"card-container\");\r\n  hoursCardContainer.classList.add(\"hours-container\");\r\n\r\n  const hoursHeading = document.createElement(\"h3\");\r\n  hoursHeading.textContent = \"Hours\";\r\n\r\n  const hoursTableContainer = addHoursTable();\r\n  const locationAd = document.createElement(\"h2\");\r\n  locationAd.textContent = \"Oh, and our location?\";\r\n\r\n  const locationCardContainer = document.createElement(\"div\");\r\n  locationCardContainer.classList.add(\"card-container\");\r\n  locationCardContainer.classList.add(\"location-container\");\r\n\r\n  const locationHeading = document.createElement(\"h3\");\r\n  locationHeading.textContent = \"Location\";\r\n\r\n  const locationMapContainer = document.createElement(\"div\");\r\n  locationMapContainer.classList.add(\"location-map-container\");\r\n\r\n  const locationMap = \"<iframe src=\\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410252477!2d2.2919063755032725!3d48.858373600708994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1691014322117!5m2!1sfr!2sfr\\\" width=\\\"400\\\" height=\\\"300\\\" style=\\\"border:0;\\\" allowfullscreen=\\\"\\\" loading=\\\"lazy\\\" referrerpolicy=\\\"no-referrer-when-downgrade\\\"></iframe>\"\r\n  locationMapContainer.innerHTML += locationMap;\r\n\r\n  const locationDesc = document.createElement(\"p\");\r\n  locationDesc.textContent = \"Tour Eiffel, 15 Avenue Anatole France, Paris\";\r\n  locationMapContainer.appendChild(locationDesc);\r\n\r\n  const menuFooterContainer = document.createElement(\"div\");\r\n  menuFooterContainer.classList.add(\"menu-footer-container\");\r\n\r\n  const restaurantImg = new Image();\r\n  restaurantImg.src = _components_assets_tacos_restaurant2_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n  const menuFooterLink = document.createElement(\"a\");\r\n  menuFooterLink.textContent = \"CHECK THE MENU!\";\r\n  menuFooterLink.classList.add(\"menu-footer-link\");\r\n\r\n  sloganContainer.append(descBg, slogan, leftDivRotation);\r\n  hoursCardContainer.append(hoursHeading, document.createElement(\"hr\"), hoursTableContainer);\r\n  locationCardContainer.append(locationHeading, locationMapContainer);\r\n  descContainer.append(h2, descP, availableHoursAd, hoursCardContainer, locationAd, locationCardContainer);\r\n  menuFooterContainer.append(restaurantImg, menuFooterLink);\r\n  contentBg.append(sloganContainer, descContainer, menuFooterContainer);\r\n\r\n  menuFooterLink.addEventListener(\"click\", () => {\r\n    homeContent.setAttribute(\"data-index\", \"2\");\r\n  })\r\n\r\n  return homeContent;\r\n}\r\n\r\nfunction addHoursTable() {\r\n  const hoursTableContainer = document.createElement(\"div\");\r\n  hoursTableContainer.classList.add(\"hours-table-container\");\r\n\r\n  const mondayDiv = document.createElement(\"div\");\r\n  mondayDiv.textContent = \"Monday\";\r\n  mondayDiv.classList.add(\"hoursTh\");\r\n  const tuesdayDiv = document.createElement(\"div\");\r\n  tuesdayDiv.textContent = \"Tuesday\";\r\n  tuesdayDiv.classList.add(\"hoursTh\");\r\n  const wednesdayDiv = document.createElement(\"div\");\r\n  wednesdayDiv.textContent = \"Wednesday\";\r\n  wednesdayDiv.classList.add(\"hoursTh\");\r\n  const thursdayDiv = document.createElement(\"div\");\r\n  thursdayDiv.textContent = \"Tuesday\";\r\n  thursdayDiv.classList.add(\"hoursTh\");\r\n  const fridayDiv = document.createElement(\"div\");\r\n  fridayDiv.textContent = \"Friday\";\r\n  fridayDiv.classList.add(\"hoursTh\");\r\n  const saturdayDiv = document.createElement(\"div\");\r\n  saturdayDiv.textContent = \"Saturday\";\r\n  saturdayDiv.classList.add(\"hoursTh\");\r\n  const sundayDiv = document.createElement(\"div\");\r\n  sundayDiv.textContent = \"Sunday\";\r\n  sundayDiv.classList.add(\"hoursTh\");\r\n  const availableAtDiv = document.createElement(\"div\");\r\n  availableAtDiv.textContent = \"Available at\";\r\n  availableAtDiv.classList.add(\"hoursTh\");\r\n  const mondayAvDiv = document.createElement(\"div\");\r\n  mondayAvDiv.textContent = \"6am - 6pm\";\r\n  const tuesdayAvDiv = document.createElement(\"div\");\r\n  tuesdayAvDiv.textContent = \"6am - 6pm\";\r\n  const wednesdayAvDiv = document.createElement(\"div\");\r\n  wednesdayAvDiv.textContent = \"6am - 6pm\";\r\n  const thursdayAvDiv = document.createElement(\"div\");\r\n  thursdayAvDiv.textContent = \"6am - 10pm\";\r\n  const fridayAvDiv = document.createElement(\"div\");\r\n  fridayAvDiv.textContent = \"6am - 10pm\";\r\n  const saturdayAvDiv = document.createElement(\"div\");\r\n  saturdayAvDiv.textContent = \"8am - 10pm\";\r\n  const sundayAvDiv = document.createElement(\"div\");\r\n  sundayAvDiv.textContent = \"8am - 8pm\";\r\n\r\n  hoursTableContainer.append(mondayDiv, tuesdayDiv, wednesdayDiv, thursdayDiv, fridayDiv, saturdayDiv, sundayDiv, availableAtDiv, mondayAvDiv, tuesdayAvDiv, wednesdayAvDiv, thursdayAvDiv, fridayAvDiv, saturdayAvDiv, sundayAvDiv);\r\n  return hoursTableContainer;\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/home.js?");

/***/ }),

/***/ "./src/components/assets/base-tacos2.png":
/*!***********************************************!*\
  !*** ./src/components/assets/base-tacos2.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b205fe4a3412a211fd1.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/base-tacos2.png?");

/***/ }),

/***/ "./src/components/assets/tacos-restaurant2.jpg":
/*!*****************************************************!*\
  !*** ./src/components/assets/tacos-restaurant2.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9004fe1a521b1aa7f5c0.jpg\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/tacos-restaurant2.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;