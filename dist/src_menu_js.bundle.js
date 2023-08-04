"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page_package"] = self["webpackChunkrestaurant_page_package"] || []).push([["src_menu_js"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addMenuContent)\n/* harmony export */ });\n/* harmony import */ var _components_assets_chef_cooking_cropped_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/assets/chef-cooking-cropped.jpg */ \"./src/components/assets/chef-cooking-cropped.jpg\");\n/* harmony import */ var _components_assets_dishes_basic_tacos_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/assets/dishes/basic-tacos.png */ \"./src/components/assets/dishes/basic-tacos.png\");\n/* harmony import */ var _components_assets_dishes_theBurgur_tacos_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/assets/dishes/theBurgur-tacos.png */ \"./src/components/assets/dishes/theBurgur-tacos.png\");\n/* harmony import */ var _components_assets_dishes_theFondu_tacos_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/assets/dishes/theFondu-tacos.png */ \"./src/components/assets/dishes/theFondu-tacos.png\");\n/* harmony import */ var _components_assets_dishes_friesTheBase_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/assets/dishes/friesTheBase.png */ \"./src/components/assets/dishes/friesTheBase.png\");\n/* harmony import */ var _components_assets_dishes_fries_nbacon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/assets/dishes/fries'nbacon.png */ \"./src/components/assets/dishes/fries'nbacon.png\");\n/* harmony import */ var _components_assets_dishes_fries_ncheese_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/assets/dishes/fries'ncheese.png */ \"./src/components/assets/dishes/fries'ncheese.png\");\n/* harmony import */ var _components_assets_dishes_oasis_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/assets/dishes/oasis.png */ \"./src/components/assets/dishes/oasis.png\");\n/* harmony import */ var _components_assets_dishes_schweppes_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/assets/dishes/schweppes.png */ \"./src/components/assets/dishes/schweppes.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addMenuContent() {\r\n  const menuContent = document.querySelector(\"#content\");\r\n  const contentBg = document.createElement(\"div\");\r\n  contentBg.classList.add(\"menu-content-bg\");\r\n  contentBg.style.backgroundImage = `url(${_components_assets_chef_cooking_cropped_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n  menuContent.appendChild(contentBg);\r\n\r\n  const blendContentBg = document.createElement(\"div\");\r\n  blendContentBg.classList.add(\"blend-content-bg\");\r\n  contentBg.appendChild(blendContentBg);\r\n\r\n  const menuHeading = document.createElement(\"h2\");\r\n  menuHeading.classList.add(\"menu-headings\");\r\n  menuHeading.textContent = \"MENU\";\r\n\r\n  const containerCards = document.createElement(\"div\");\r\n  containerCards.classList.add(\"menu-container-cards\");\r\n\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.classList.add(\"menu-card-container\");\r\n\r\n  const basicTacosImg = new Image();\r\n  basicTacosImg.src = _components_assets_dishes_basic_tacos_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n  const basicTacosName = document.createElement(\"h2\");\r\n  basicTacosName.textContent = \"Basic Tacos\";\r\n\r\n  const basicTacosDesc = document.createElement(\"p\");\r\n  basicTacosDesc.textContent = \"Taste the essence of Mexico in every bite with our Basic Tacos - tender fillings nestled in soft corn tortillas, a fiesta for your taste buds!\";\r\n\r\n  const basicTacosPrice = document.createElement(\"p\");\r\n  basicTacosPrice.textContent = \"4$\";\r\n\r\n  const cardContainer2 = document.createElement(\"div\");\r\n  cardContainer2.classList.add(\"menu-card-container\");\r\n\r\n  const theBurgurTacosImg = new Image();\r\n  theBurgurTacosImg.src = _components_assets_dishes_theBurgur_tacos_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  theBurgurTacosImg.style.margin = \"30px 0\";\r\n\r\n  const theBurgurTacosName = document.createElement(\"h2\");\r\n  theBurgurTacosName.textContent = \"Theburgur Tacos\";\r\n\r\n  const theBurgurTacosDesc = document.createElement(\"p\");\r\n  theBurgurTacosDesc.textContent = \"Experience a delightful fusion of flavors with \\\"theBurgur Tacos\\\" - where juicy burger-inspired fillings meet the traditional embrace of soft tortillas, a unique twist on taco perfection!\";\r\n\r\n  const theBurgurTacosPrice = document.createElement(\"p\");\r\n  theBurgurTacosPrice.textContent = \"7$\";\r\n\r\n  const cardContainer3 = document.createElement(\"div\");\r\n  cardContainer3.classList.add(\"menu-card-container\");\r\n\r\n  const theFonduTacosImg = new Image();\r\n  theFonduTacosImg.src = _components_assets_dishes_theFondu_tacos_png__WEBPACK_IMPORTED_MODULE_3__;\r\n  theFonduTacosImg.style.margin = \"\"\r\n\r\n  const theFonduTacosName = document.createElement(\"h2\");\r\n  theFonduTacosName.textContent = \"Thefondu Tacos\";\r\n\r\n  const TheFonduTacosDesc = document.createElement(\"p\");\r\n  TheFonduTacosDesc.textContent = \"Embark on a flavor adventure with \\\"theFondu Tacos\\\" - a tantalizing blend of melted cheese goodness and savory fillings, redefining taco indulgence! Melt your taste buds away with every bite.\";\r\n\r\n  const theFonduTacosPrice = document.createElement(\"p\");\r\n  theFonduTacosPrice.textContent = \"6$\";\r\n\r\n  const sidesHeading = document.createElement(\"h2\");\r\n  sidesHeading.textContent = \"SIDES\";\r\n  sidesHeading.classList.add(\"menu-headings\");\r\n\r\n  const sidesContainerCards = document.createElement(\"div\");\r\n  sidesContainerCards.classList.add(\"menu-container-cards\");\r\n\r\n  const sidesCardContainer = document.createElement(\"div\");\r\n  sidesCardContainer.classList.add(\"menu-card-container\");\r\n\r\n  const friesTheBaseImg = new Image();\r\n  friesTheBaseImg.src = _components_assets_dishes_friesTheBase_png__WEBPACK_IMPORTED_MODULE_4__;\r\n  friesTheBaseImg.style.margin = \"20px 0\";\r\n\r\n  const friesTheBaseName = document.createElement(\"h2\");\r\n  friesTheBaseName.textContent = \"Fries, theBase\";\r\n\r\n  const friesTheBaseDesc = document.createElement(\"p\");\r\n  friesTheBaseDesc.textContent = \"Elevating your taste buds with perfectly seasoned and crispy French fries, the ultimate comfort food.\";\r\n\r\n  const friesTheBasePrice = document.createElement(\"p\");\r\n  friesTheBasePrice.textContent = \"2$\";\r\n\r\n  const sidesCardContainer2 = document.createElement(\"div\");\r\n  sidesCardContainer2.classList.add(\"menu-card-container\");\r\n\r\n  const friesNBaconImg = new Image();\r\n  friesNBaconImg.src = _components_assets_dishes_fries_nbacon_png__WEBPACK_IMPORTED_MODULE_5__;\r\n  friesNBaconImg.style.marginTop = \"-30px\";\r\n\r\n  const friesNBaconName = document.createElement(\"h2\");\r\n  friesNBaconName.textContent = \"Fries'n Bacon\";\r\n\r\n  const friesNBaconDesc = document.createElement(\"p\");\r\n  friesNBaconDesc.textContent = \"A scrumptious indulgence, combining the irresistible flavors of crispy French fries with savory, smoky bacon, delivering a delightful fusion that guarantees a taste sensation like no other.\";\r\n\r\n  const friesNBaconPrice = document.createElement(\"p\");\r\n  friesNBaconPrice.textContent = \"3.50$\";\r\n\r\n  const sidesCardContainer3 = document.createElement(\"div\");\r\n  sidesCardContainer3.classList.add(\"menu-card-container\");\r\n\r\n  const friesNCheeseImg = new Image();\r\n  friesNCheeseImg.src = _components_assets_dishes_fries_ncheese_png__WEBPACK_IMPORTED_MODULE_6__;\r\n  friesNCheeseImg.style.margin = \"10px 0\";\r\n\r\n  const friesNCheeseName = document.createElement(\"h2\");\r\n  friesNCheeseName.textContent = \"Fries'n Cheese\";\r\n\r\n  const friesNCheeseDesc = document.createElement(\"p\");\r\n  friesNCheeseDesc.textContent = \"A delightful combo of golden fries smothered in a rich, gooey cheese sauce, creating an irresistible treat for cheese lovers.\";\r\n\r\n  const friesNCheesePrice = document.createElement(\"p\");\r\n  friesNCheesePrice.textContent = \"2.50$\";\r\n\r\n  const drinksHeading = document.createElement(\"h2\");\r\n  drinksHeading.textContent = \"DRINKS ?\";\r\n  drinksHeading.classList.add(\"menu-headings\");\r\n\r\n  const drinksContainerCards = document.createElement(\"div\");\r\n  drinksContainerCards.classList.add(\"menu-container-cards\");\r\n\r\n  const drinksCardContainer = document.createElement(\"div\");\r\n  drinksCardContainer.classList.add(\"menu-card-container\");\r\n\r\n  const oasisImg = new Image();\r\n  oasisImg.src = _components_assets_dishes_oasis_png__WEBPACK_IMPORTED_MODULE_7__;\r\n\r\n  const oasisName = document.createElement(\"h2\");\r\n  oasisName.textContent = \"Oasis\";\r\n\r\n  const oasisDesc = document.createElement(\"p\");\r\n  oasisDesc.textContent = \"The tropical 🌊\";\r\n\r\n  const oasisPrice = document.createElement(\"p\");\r\n  oasisPrice.textContent = \"1$\";\r\n\r\n  const drinksCardContainer2 = document.createElement(\"div\");\r\n  drinksCardContainer2.classList.add(\"menu-card-container\");\r\n\r\n  const schweppesImg = new Image();\r\n  schweppesImg.src = _components_assets_dishes_schweppes_png__WEBPACK_IMPORTED_MODULE_8__;\r\n  schweppesImg.style.width = \"60%\";\r\n  schweppesImg.style.margin = \"-40px 0\";\r\n\r\n  const schweppesName = document.createElement(\"h2\");\r\n  schweppesName.textContent = \"Schweppes\";\r\n\r\n  const schweppesDesc = document.createElement(\"p\");\r\n  schweppesDesc.textContent = \"The Chill 🤙\";\r\n\r\n  const schweppesPrice = document.createElement(\"p\");\r\n  schweppesPrice.textContent = \"1$\";\r\n\r\n  cardContainer.append(basicTacosImg, basicTacosName, basicTacosDesc, basicTacosPrice);\r\n  cardContainer2.append(theBurgurTacosImg, theBurgurTacosName, theBurgurTacosDesc, theBurgurTacosPrice);\r\n  cardContainer3.append(theFonduTacosImg, theFonduTacosName, TheFonduTacosDesc, theFonduTacosPrice);\r\n\r\n  sidesCardContainer.append(friesTheBaseImg, friesTheBaseName, friesTheBaseDesc, friesTheBasePrice);\r\n  sidesCardContainer2.append(friesNBaconImg, friesNBaconName, friesNBaconDesc, friesNBaconPrice);\r\n  sidesCardContainer3.append(friesNCheeseImg, friesNCheeseName, friesNCheeseDesc, friesNCheesePrice);\r\n\r\n  drinksCardContainer.append(oasisImg, oasisName, oasisDesc, oasisPrice);\r\n  drinksCardContainer2.append(schweppesImg, schweppesName, schweppesDesc, schweppesPrice);\r\n\r\n  drinksContainerCards.append(drinksCardContainer, drinksCardContainer2);\r\n  sidesContainerCards.append(sidesCardContainer, sidesCardContainer2, sidesCardContainer3);\r\n  containerCards.append(cardContainer, cardContainer2, cardContainer3);\r\n  blendContentBg.append(menuHeading, containerCards, sidesHeading, sidesContainerCards, drinksHeading, drinksContainerCards);\r\n  return menuContent;\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/menu.js?");

/***/ }),

/***/ "./src/components/assets/chef-cooking-cropped.jpg":
/*!********************************************************!*\
  !*** ./src/components/assets/chef-cooking-cropped.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae04bc25a09d9fa906ca.jpg\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/chef-cooking-cropped.jpg?");

/***/ }),

/***/ "./src/components/assets/dishes/basic-tacos.png":
/*!******************************************************!*\
  !*** ./src/components/assets/dishes/basic-tacos.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b735d0ba3accff90f85.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/basic-tacos.png?");

/***/ }),

/***/ "./src/components/assets/dishes/fries'nbacon.png":
/*!*******************************************************!*\
  !*** ./src/components/assets/dishes/fries'nbacon.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"504d7a72e3c1cce6d769.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/fries'nbacon.png?");

/***/ }),

/***/ "./src/components/assets/dishes/fries'ncheese.png":
/*!********************************************************!*\
  !*** ./src/components/assets/dishes/fries'ncheese.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39588a27bca036b8f300.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/fries'ncheese.png?");

/***/ }),

/***/ "./src/components/assets/dishes/friesTheBase.png":
/*!*******************************************************!*\
  !*** ./src/components/assets/dishes/friesTheBase.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0aa54c6d3be942f6a6cb.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/friesTheBase.png?");

/***/ }),

/***/ "./src/components/assets/dishes/oasis.png":
/*!************************************************!*\
  !*** ./src/components/assets/dishes/oasis.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b26d6e3d23cf0af15b60.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/oasis.png?");

/***/ }),

/***/ "./src/components/assets/dishes/schweppes.png":
/*!****************************************************!*\
  !*** ./src/components/assets/dishes/schweppes.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45eb77533eaad3d353e2.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/schweppes.png?");

/***/ }),

/***/ "./src/components/assets/dishes/theBurgur-tacos.png":
/*!**********************************************************!*\
  !*** ./src/components/assets/dishes/theBurgur-tacos.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71672eb173495a04fe26.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/theBurgur-tacos.png?");

/***/ }),

/***/ "./src/components/assets/dishes/theFondu-tacos.png":
/*!*********************************************************!*\
  !*** ./src/components/assets/dishes/theFondu-tacos.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8cf9d3dd2c68d3c2ae65.png\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/dishes/theFondu-tacos.png?");

/***/ })

}]);