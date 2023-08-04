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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Lostar.ttf */ \"./src/components/assets/Lostar.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Lostar\";\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\r\n  font-style: normal;\r\n}\r\n\r\n/* button template */\r\n/* {\r\n  background-color: #a52422;\r\n  border-radius: 5px;\r\n  border: 1px solid #791918;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n} */\r\n\r\n::selection {\r\n  background-color: #d62828;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  background-color: #fcbf49;\r\n  height: max(30px, 10vh);\r\n  width: 100vw;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n  z-index: 3;\r\n}\r\n\r\n.header > ul {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: center;\r\n  font-weight: 600;\r\n  margin: 0;\r\n}\r\n\r\n.header .navbar-links {\r\n  width: 100px;\r\n  height: 6vh;\r\n  font-size: 1.3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  cursor: pointer;\r\n  transition: all .2s;\r\n}\r\n\r\n.header .navbar-links:hover {\r\n  color: #d62828;\r\n  text-shadow: 0 0 5px rgba(214, 40, 40, .15);\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: #d62828;\r\n}\r\n\r\n#content {\r\n  padding-top: max(30px, 10vh);\r\n}\r\n\r\n.header h1 {\r\n  font-family: \"Lostar\";\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  margin: 0;\r\n}\r\n\r\n.content-bg {\r\n  background-color: #f77f00;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n  position: relative;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.slogan-container {\r\n  position: relative;\r\n  background-color: black;\r\n  overflow: hidden;\r\n}\r\n\r\n.slogan-container > img {\r\n  opacity: .3;\r\n  width: 100%;\r\n}\r\n\r\n.slogan-container > h2 {\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 30%;\r\n  font-size: 2.5rem;\r\n  left: calc(50% - 250px);\r\n  color: white;\r\n  text-shadow: 0 0 5px rgba(234, 226, 183, .4);\r\n  margin: 0;\r\n}\r\n\r\n.left-div-rotation {\r\n  position: absolute;\r\n  top: 90%;\r\n  left: -10%;\r\n  width: calc(100% + 500px);\r\n  height: 500px;\r\n  background-color: #f77f00;\r\n  box-shadow: 0 0 5px rgba(247, 127, 0, .5);\r\n  transform: rotate(5deg);\r\n  z-index: 0;\r\n}\r\n\r\n.desc-container {\r\n  position: relative;\r\n  z-index: 1;\r\n  background-image: linear-gradient(#f77f00, #ffb623);\r\n  box-shadow: 0 0 5px rgba(247, 127, 0, .5);\r\n  margin-top: -20px;\r\n  padding: 0px 20px 20px 20px;\r\n  border-bottom-left-radius: 5%;\r\n  border-bottom-right-radius: 5%;\r\n\r\n}\r\n\r\n.desc-container > p {\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.card-container {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  background-color: #eae2b7;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.hours-container > h3 {\r\n  font-family: \"Lostar\";\r\n  margin: 0;\r\n  margin-left: 20px;\r\n}\r\n\r\n.hours-container > hr {\r\n  border: 1px solid black;\r\n}\r\n\r\n.hours-table-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  justify-items: center;\r\n  gap: 10px 10px;\r\n}\r\n\r\n.hours-table-container > div:first-child {\r\n  grid-column: 2;\r\n}\r\n\r\n.hours-table-container > .hoursTh {\r\n  font-weight: bold;\r\n  font-size: .8rem;\r\n}\r\n\r\n.hours-table-container > *:not(.hoursTh) {\r\n  font-size: .8rem;\r\n}\r\n\r\n.location-container > h3 {\r\n  margin-top: 0;\r\n  font-family: \"Lostar\";\r\n  margin-left: 20px;\r\n}\r\n\r\n.location-map-container > iframe {\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.location-map-container {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.location-container {\r\n  border-bottom-left-radius: 30px;\r\n  border-bottom-right-radius: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.menu-footer-container {\r\n  position: relative;\r\n  z-index: 0;\r\n  background-color: black;\r\n  margin-top: -10%;\r\n}\r\n\r\n.menu-footer-container > img {\r\n  width: 100%;\r\n  opacity: .3;\r\n}\r\n\r\n.menu-footer-link {\r\n  position: absolute;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  bottom: 20%;\r\n  left: calc(50% - 150px);\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  text-shadow: 0 0 5px rgba(234, 226, 183, .4);\r\n  transition: all .2s;\r\n}\r\n\r\n.menu-footer-link:hover {\r\n  color: #d62828;\r\n  font-size: 2.1rem;\r\n  text-shadow: 0 0 5px rgba(214, 40, 40, .15);\r\n  transform: translateX(-2%);\r\n}\r\n\r\n.menu-content-bg {\r\n  padding: 40px 20px;\r\n  z-index: 0;\r\n  background-size: 200% 100%;\r\n  background-color: #3f2c19;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n\r\n.blend-content-bg {\r\n  background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .9));\r\n  margin: -40px -20px;\r\n  padding: 40px 20px;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  .menu-content-bg {\r\n    background-size: 240% 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .menu-content-bg {\r\n    background-size: 330% 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .menu-content-bg {\r\n    background-image: linear-gradient(#e27500, #d62828) !important;\r\n  }\r\n\r\n  .blend-content-bg {\r\n    background-image: none;\r\n  }\r\n}\r\n\r\n.menu-headings {\r\n  font-size: 2.5rem;\r\n  text-align: center;\r\n  margin-top: 80px;\r\n  color: rgba(0, 0, 0, 1);\r\n  font-family: \"Lostar\";\r\n  letter-spacing: 3px;\r\n  text-shadow: -.5px 0 0 #f77f00,\r\n  -.5px -.5px 0 #f77f00,\r\n  0 -.5px 0 #f77f00,\r\n  .5px -.5px 0 #f77f00,\r\n  .5px 0 0 #f77f00,\r\n  .5px .5px 0 #f77f00,\r\n  0 .5px 0 #f77f00,\r\n  -.5px .5px 0 #f77f00;\r\n}\r\n\r\n.menu-headings:first-child {\r\n  margin-top: 0;\r\n}\r\n\r\n.menu-container-cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.menu-card-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, .7);\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n  border: 2px solid #f77f00;\r\n  padding: 20px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.menu-card-container > img {\r\n  width: 80%;\r\n}\r\n\r\n.menu-card-container > p:last-child {\r\n  margin-top: 30px;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.menu-container-cards:last-child {\r\n  grid-template-rows: 500px;\r\n}\r\n\r\n.menu-container-cards:last-child > * > img {\r\n  margin: -20px 0;\r\n}\r\n\r\n.contact-content-bg {\r\n  background-image: linear-gradient(#f77f00, #ffb623);\r\n  border-radius: 20px;\r\n  margin: 30px;\r\n  padding: 20px;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .3);\r\n  text-align: center;\r\n}\r\n\r\n.contact-content-bg > h1:first-child {\r\n  margin: 0;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 3rem;\r\n}\r\n\r\n.contact-content-bg > h2 {\r\n  font-size: 2rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact-content-bg label {\r\n  font-weight: bold;\r\n}\r\n\r\n.first-nb-div,\r\n.second-nb-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  margin: 5px 0;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.contact-content-bg > h2 + p {\r\n  font-size: 1.5rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page_package/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHomeContent)\n/* harmony export */ });\n/* harmony import */ var _components_assets_base_tacos2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/assets/base-tacos2.png */ \"./src/components/assets/base-tacos2.png\");\n/* harmony import */ var _components_assets_tacos_restaurant2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/assets/tacos-restaurant2.jpg */ \"./src/components/assets/tacos-restaurant2.jpg\");\n\r\n\r\n\r\nfunction addHomeContent() {\r\n  const homeContent = document.querySelector(\"#content\");\r\n\r\n  const contentBg = document.createElement(\"div\");\r\n  contentBg.classList.add(\"content-bg\");\r\n  homeContent.appendChild(contentBg);\r\n\r\n  const sloganContainer = document.createElement(\"div\");\r\n  sloganContainer.classList.add(\"slogan-container\");\r\n\r\n  const descBg = new Image();\r\n  descBg.src = _components_assets_base_tacos2_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  const slogan = document.createElement(\"h2\");\r\n  slogan.innerHTML = \"Unleash the Flavor Fiesta:<br> Tacos Galore!\";\r\n\r\n  const leftDivRotation = document.createElement(\"div\");\r\n  leftDivRotation.classList.add(\"left-div-rotation\");\r\n\r\n  const descContainer = document.createElement(\"div\");\r\n  descContainer.classList.add(\"desc-container\");\r\n\r\n  const h2 = document.createElement(\"h2\");\r\n  h2.textContent = \"Welcome to Sachet\";\r\n\r\n  const descP = document.createElement(\"p\");\r\n  descP.innerHTML = \"- where authentic flavors meet modern innovation! Nestled in the heart of the bustling city, our tacos restaurant promises a delightful culinary journey that tantalizes your taste buds and leaves you craving for more.\";\r\n\r\n  const availableHoursAd = document.createElement(\"h2\");\r\n  availableHoursAd.textContent = \"So when are we available?\"\r\n\r\n  const hoursCardContainer = document.createElement(\"div\");\r\n  hoursCardContainer.classList.add(\"card-container\");\r\n  hoursCardContainer.classList.add(\"hours-container\");\r\n\r\n  const hoursHeading = document.createElement(\"h3\");\r\n  hoursHeading.textContent = \"Hours\";\r\n\r\n  const hoursTableContainer = addHoursTable();\r\n  const locationAd = document.createElement(\"h2\");\r\n  locationAd.textContent = \"Oh, and our location?\";\r\n\r\n  const locationCardContainer = document.createElement(\"div\");\r\n  locationCardContainer.classList.add(\"card-container\");\r\n  locationCardContainer.classList.add(\"location-container\");\r\n\r\n  const locationHeading = document.createElement(\"h3\");\r\n  locationHeading.textContent = \"Location\";\r\n\r\n  const locationMapContainer = document.createElement(\"div\");\r\n  locationMapContainer.classList.add(\"location-map-container\");\r\n\r\n  const locationMap = \"<iframe src=\\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410252477!2d2.2919063755032725!3d48.858373600708994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1691014322117!5m2!1sfr!2sfr\\\" width=\\\"400\\\" height=\\\"300\\\" style=\\\"border:0;\\\" allowfullscreen=\\\"\\\" loading=\\\"lazy\\\" referrerpolicy=\\\"no-referrer-when-downgrade\\\"></iframe>\"\r\n  locationMapContainer.innerHTML += locationMap;\r\n\r\n  const locationDesc = document.createElement(\"p\");\r\n  locationDesc.textContent = \"Tour Eiffel, 15 Avenue Anatole France, Paris\";\r\n  locationMapContainer.appendChild(locationDesc);\r\n\r\n  const menuFooterContainer = document.createElement(\"div\");\r\n  menuFooterContainer.classList.add(\"menu-footer-container\");\r\n\r\n  const restaurantImg = new Image();\r\n  restaurantImg.src = _components_assets_tacos_restaurant2_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n  const menuFooterLink = document.createElement(\"a\");\r\n  menuFooterLink.textContent = \"CHECK THE MENU!\";\r\n  menuFooterLink.classList.add(\"menu-footer-link\");\r\n\r\n  sloganContainer.append(descBg, slogan, leftDivRotation);\r\n  hoursCardContainer.append(hoursHeading, document.createElement(\"hr\"), hoursTableContainer);\r\n  locationCardContainer.append(locationHeading, locationMapContainer);\r\n  descContainer.append(h2, descP, availableHoursAd, hoursCardContainer, locationAd, locationCardContainer);\r\n  menuFooterContainer.append(restaurantImg, menuFooterLink);\r\n  contentBg.append(sloganContainer, descContainer, menuFooterContainer);\r\n\r\n  menuFooterLink.addEventListener(\"click\", () => {\r\n    homeContent.setAttribute(\"data-index\", \"2\");\r\n  })\r\n\r\n  return homeContent;\r\n}\r\n\r\nfunction addHoursTable() {\r\n  const hoursTableContainer = document.createElement(\"div\");\r\n  hoursTableContainer.classList.add(\"hours-table-container\");\r\n\r\n  const mondayDiv = document.createElement(\"div\");\r\n  mondayDiv.textContent = \"Monday\";\r\n  mondayDiv.classList.add(\"hoursTh\");\r\n  const tuesdayDiv = document.createElement(\"div\");\r\n  tuesdayDiv.textContent = \"Tuesday\";\r\n  tuesdayDiv.classList.add(\"hoursTh\");\r\n  const wednesdayDiv = document.createElement(\"div\");\r\n  wednesdayDiv.textContent = \"Wednesday\";\r\n  wednesdayDiv.classList.add(\"hoursTh\");\r\n  const thursdayDiv = document.createElement(\"div\");\r\n  thursdayDiv.textContent = \"Tuesday\";\r\n  thursdayDiv.classList.add(\"hoursTh\");\r\n  const fridayDiv = document.createElement(\"div\");\r\n  fridayDiv.textContent = \"Friday\";\r\n  fridayDiv.classList.add(\"hoursTh\");\r\n  const saturdayDiv = document.createElement(\"div\");\r\n  saturdayDiv.textContent = \"Saturday\";\r\n  saturdayDiv.classList.add(\"hoursTh\");\r\n  const sundayDiv = document.createElement(\"div\");\r\n  sundayDiv.textContent = \"Sunday\";\r\n  sundayDiv.classList.add(\"hoursTh\");\r\n  const availableAtDiv = document.createElement(\"div\");\r\n  availableAtDiv.textContent = \"Available at\";\r\n  availableAtDiv.classList.add(\"hoursTh\");\r\n  const mondayAvDiv = document.createElement(\"div\");\r\n  mondayAvDiv.textContent = \"6am - 6pm\";\r\n  const tuesdayAvDiv = document.createElement(\"div\");\r\n  tuesdayAvDiv.textContent = \"6am - 6pm\";\r\n  const wednesdayAvDiv = document.createElement(\"div\");\r\n  wednesdayAvDiv.textContent = \"6am - 6pm\";\r\n  const thursdayAvDiv = document.createElement(\"div\");\r\n  thursdayAvDiv.textContent = \"6am - 10pm\";\r\n  const fridayAvDiv = document.createElement(\"div\");\r\n  fridayAvDiv.textContent = \"6am - 10pm\";\r\n  const saturdayAvDiv = document.createElement(\"div\");\r\n  saturdayAvDiv.textContent = \"8am - 10pm\";\r\n  const sundayAvDiv = document.createElement(\"div\");\r\n  sundayAvDiv.textContent = \"8am - 8pm\";\r\n\r\n  hoursTableContainer.append(mondayDiv, tuesdayDiv, wednesdayDiv, thursdayDiv, fridayDiv, saturdayDiv, sundayDiv, availableAtDiv, mondayAvDiv, tuesdayAvDiv, wednesdayAvDiv, thursdayAvDiv, fridayAvDiv, saturdayAvDiv, sundayAvDiv);\r\n  return hoursTableContainer;\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  const elements = (0,_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  elements.forEach(element => {\r\n    document.body.appendChild(element);\r\n  })\r\n})\n\n//# sourceURL=webpack://restaurant_page_package/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addContent)\n/* harmony export */ });\n/* harmony import */ var _staticElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticElements */ \"./src/staticElements.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/style.css */ \"./src/components/style.css\");\n\r\n\r\n\r\n\r\nfunction addContent() {\r\n  const content = document.querySelector(\"#content\");\r\n  const headerNavbarElement = (0,_staticElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  let currentContent = (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  // event listener for when the content's data-index changes\r\n  let observer = new MutationObserver(function(mutations) {\r\n    mutations.forEach(function(mutation) {\r\n      if (mutation.type === \"attributes\") {\r\n        if (mutation.target.getAttribute(\"data-index\") == 1) {\r\n          content.innerHTML = \"\";\r\n          currentContent = (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        } else if (mutation.target.getAttribute(\"data-index\") == 2) {\r\n          __webpack_require__.e(/*! import() */ \"src_menu_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./menu */ \"./src/menu.js\")).then(module => {\r\n            const menuContent = module.default;\r\n            content.innerHTML = \"\";\r\n            currentContent = menuContent();\r\n          })\r\n        } else {\r\n          __webpack_require__.e(/*! import() */ \"src_contact_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./contact */ \"./src/contact.js\")).then(module => {\r\n            const contactContent = module.default;\r\n            content.innerHTML = \"\";\r\n            currentContent = contactContent();\r\n          })\r\n        }\r\n        window.scrollTo(0, 0);\r\n      }\r\n    });\r\n  });\r\n\r\n  observer.observe(content, {\r\n    attributes: true //configure it to listen to attribute changes\r\n  });\r\n\r\n  return [headerNavbarElement, currentContent];\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/pageload.js?");

/***/ }),

/***/ "./src/staticElements.js":
/*!*******************************!*\
  !*** ./src/staticElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHeader)\n/* harmony export */ });\nfunction addHeader() {\r\n    let headerLinks = [];\r\n    const headerNavbar = document.createElement(\"div\");\r\n    headerNavbar.classList.add(\"header\");\r\n\r\n    const brandName = document.createElement(\"h1\");\r\n    brandName.classList.add(\"brand-name\");\r\n    brandName.textContent = \"Sachet\";\r\n\r\n    const ul = document.createElement(\"ul\");\r\n\r\n    const homeLink = document.createElement(\"li\");\r\n    homeLink.classList.add(\"navbar-links\");\r\n    headerLinks.push(homeLink);\r\n    homeLink.textContent = \"Home\";\r\n\r\n    const menuLink = document.createElement(\"li\");\r\n    menuLink.classList.add(\"navbar-links\");\r\n    headerLinks.push(menuLink);\r\n    menuLink.textContent = \"Menu\";\r\n\r\n    const contactLink = document.createElement(\"li\");\r\n    contactLink.classList.add(\"navbar-links\");\r\n    headerLinks.push(contactLink);\r\n    contactLink.textContent = \"Contact\";\r\n\r\n    ul.append(homeLink, menuLink, contactLink);\r\n    headerNavbar.appendChild(brandName);\r\n    headerNavbar.appendChild(ul);\r\n\r\n    const content = document.querySelector(\"#content\");\r\n    headerLinks.forEach(link => {\r\n        link.addEventListener(\"click\", () => {\r\n            if (link.textContent === \"Home\") {\r\n                content.setAttribute(\"data-index\", 1);\r\n            } else if (link.textContent === \"Menu\") {\r\n                content.setAttribute(\"data-index\", 2);\r\n            } else {\r\n                content.setAttribute(\"data-index\", 3);\r\n            }\r\n        })\r\n    })\r\n    return headerNavbar;\r\n}\n\n//# sourceURL=webpack://restaurant_page_package/./src/staticElements.js?");

/***/ }),

/***/ "./src/components/assets/Lostar.ttf":
/*!******************************************!*\
  !*** ./src/components/assets/Lostar.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5d796b48cccb20757de.ttf\";\n\n//# sourceURL=webpack://restaurant_page_package/./src/components/assets/Lostar.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant_page_package:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_page_package"] = self["webpackChunkrestaurant_page_package"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;