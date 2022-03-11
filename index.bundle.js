/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/expand_more.svg */ "./src/images/expand_more.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/date.svg */ "./src/images/date.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50%;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-top: 50px;\n    margin-bottom: 40px;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div,\n.select_div,\n.textarea_div,\n.dueDate_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.input_div input,\n.select_div select,\n.textarea_div textarea,\n.dueDate_div input {\n    width: 60%;\n    /* height: 40px; */\n    font: inherit;\n    color: #707070;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n\n    box-sizing: border-box;\n}\n\n.more_option,\n.less_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    color: #707070;\n\n    margin-bottom: 20px;\n}\n\n.less_option {\n    display: none;\n}\n\n.more_option img,\n.less_option img {\n    width: 40px;\n}\n\n.select_div select {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: calc(100% - 3px) center;\n    background-size: 35px;\n}\n\n.textarea_div textarea {\n    height: 100px;\n}\n\ninput[type=\"date\"]:before {\n    content: attr(placeholder) !important;\n    margin-right: 0.5em;\n  }\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n    content: \"\";\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.hidden {\n    display: none;\n    opacity: 0;\n}\n\n.hidden.open {\n    display: block;\n    opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50%;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-top: 50px;\n    margin-bottom: 40px;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div,\n.select_div,\n.textarea_div,\n.dueDate_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.input_div input,\n.select_div select,\n.textarea_div textarea,\n.dueDate_div input {\n    width: 60%;\n    /* height: 40px; */\n    font: inherit;\n    color: #707070;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n\n    box-sizing: border-box;\n}\n\n.more_option,\n.less_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    color: #707070;\n\n    margin-bottom: 20px;\n}\n\n.less_option {\n    display: none;\n}\n\n.more_option img,\n.less_option img {\n    width: 40px;\n}\n\n.select_div select {\n    appearance: none;\n    background-image: url('../images/expand_more.svg');\n    background-repeat: no-repeat;\n    background-position: calc(100% - 3px) center;\n    background-size: 35px;\n}\n\n.textarea_div textarea {\n    height: 100px;\n}\n\ninput[type=\"date\"]:before {\n    content: attr(placeholder) !important;\n    margin-right: 0.5em;\n  }\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n    content: \"\";\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-image: url('../images/date.svg');\n}\n\n.hidden {\n    display: none;\n    opacity: 0;\n}\n\n.hidden.open {\n    display: block;\n    opacity: 1;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "openAddTodoForm": () => (/* binding */ openAddTodoForm),
/* harmony export */   "openEditForm": () => (/* binding */ openEditForm)
/* harmony export */ });
/* harmony import */ var _images_close_form_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/close_form.svg */ "./src/images/close_form.svg");
/* harmony import */ var _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/expand_more.svg */ "./src/images/expand_more.svg");
/* harmony import */ var _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/expand_less.svg */ "./src/images/expand_less.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoItem.js */ "./src/todoItem.js");






function openProjectForm() {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(projectForm());

    appendPopup(popup);
}

function openAddTodoForm(project, projectBtn) {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(todoForm(project, projectBtn));

    appendPopup(popup);
}

function openEditForm(project, todo, index, projectBtn) {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(editForm(project, todo, index, projectBtn));

    appendPopup(popup);
}

function appendPopup(popup) {
    const mainContent = document.querySelector("#content");
    mainContent.appendChild(popup);
    popup.classList.add("open");
    // add overlay
    mainContent.appendChild(openOverlay());
}

function createPopupStructure() {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup");

    const formCloseIcon = new Image();
    formCloseIcon.src = _images_close_form_svg__WEBPACK_IMPORTED_MODULE_0__;

    const content = document.createElement("div");
    content.classList.add("form_content");

    popupContainer.appendChild(formCloseIcon);
    popupContainer.appendChild(content);

    formCloseIcon.addEventListener("click", function(e) {
        closeForm();
    });
    return popupContainer;
}

function projectForm() {

    const addProject = document.createElement("div");
    addProject.classList.add("add_project");
    const form = document.createElement("form");
    form.classList.add("add_project_form");
    addProject.appendChild(form);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Project name…"
    input.name = "projectName";
    input.required = true;
    inputDiv.appendChild(input)

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "ADD";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const projectName = form.elements['projectName'].value;
        (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.createNewProject)(projectName);
        closeForm();
        location.reload();
    })

    form.appendChild(inputDiv);
    form.appendChild(btnDiv);

    return form;
}

function createForm() {
    const addTodo = document.createElement("div");
    addTodo.classList.add("add_todo");
    const form = document.createElement("form");
    form.classList.add("add_todo_form");
    addTodo.appendChild(form);
    return form;
}

function createTaskInput(value) {
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task ..."
    input.name = "title";
    input.value = value;
    input.required = true;
    inputDiv.appendChild(input)
    return inputDiv;
}

function createOptionalDiv() {
    const optionalDiv = document.createElement("div");
    // more options
    const moreOptionDiv = document.createElement("div");
    moreOptionDiv.classList.add("more_option");
    moreOptionDiv.textContent = "SHOW MORE OPTIONS";
    const expandMoreIcon = new Image();
    expandMoreIcon.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_1__;
    moreOptionDiv.appendChild(expandMoreIcon);
    optionalDiv.appendChild(moreOptionDiv);
    // less options
    const lessOptionDiv = document.createElement("div");
    lessOptionDiv.classList.add("less_option");
    lessOptionDiv.textContent = "SHOW LESS OPTIONS";
    const expandLessIcon = new Image();
    expandLessIcon.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_2__;
    lessOptionDiv.appendChild(expandLessIcon);
    optionalDiv.appendChild(lessOptionDiv);

    expandMoreIcon.addEventListener("click", function(e) {
        document.querySelector(".more_option").style.display = 'none';
        document.querySelector(".less_option").style.display = 'flex';
        expandHiddenFields();
    })

    expandLessIcon.addEventListener("click", function(e) {
        document.querySelector(".more_option").style.display = 'flex';
        document.querySelector(".less_option").style.display = 'none';
        hideFields();
    })

    return optionalDiv;

}

function createHiddenForm(projectName, priority, description, hiddenByDefault) {
    const hiddenForm = document.createElement("div");
    if (hiddenByDefault) {
        hiddenForm.classList.add("hidden");
    }
    // project drop down
    const selectProjDiv = document.createElement("div");
    selectProjDiv.classList.add("select_div");
    const selectProject = document.createElement("select");
    selectProject.name = "project";

    const option = document.createElement("option");
    option.value = "";
    option.disabled = true;
    option.selected = true;
    option.textContent = "Select project";
    selectProject.appendChild(option);

    const projects = (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getAllProjects)();
    projects.forEach(p => {
        const option = document.createElement("option");
        option.value = p.val.name;
        option.textContent = p.val.name;

        if (p.val.name === projectName) {
            option.selected = "true";
        }

        selectProject.appendChild(option);
    })

    selectProjDiv.appendChild(selectProject);
    hiddenForm.appendChild(selectProjDiv);

    // priority drop down
    const selectPriorityDiv = document.createElement("div");
    selectPriorityDiv.classList.add("select_div");
    const selectPriority = document.createElement("select");
    selectPriority.name = "priority";

    const priorityOption = document.createElement("option");
    priorityOption.value = "";
    priorityOption.disabled = true;
    priorityOption.selected = true;
    priorityOption.textContent = "Select priority";
    selectPriority.appendChild(priorityOption);

    const allPriorities = ["Low", "Medium", "High"]
    allPriorities.forEach((p, index) => {
        const option = document.createElement("option");
        option.value = p;
        option.textContent = p;

        if (p === priority) {
            option.selected = "true";
        }

        selectPriority.appendChild(option);
    })

    selectPriorityDiv.appendChild(selectPriority);
    hiddenForm.appendChild(selectPriorityDiv);

    // due date
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDate_div");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "dueDate";
    dateInput.placeholder = "Due date"
    dueDateDiv.appendChild(dateInput);
    hiddenForm.appendChild(dueDateDiv);

    // textarea
    const textareaDiv = document.createElement("div");
    textareaDiv.classList.add("textarea_div");
    const textarea = document.createElement("textarea");
    textarea.name = "description";
    textarea.placeholder = "Add description …";
    textarea.value = description;
    textareaDiv.appendChild(textarea);
    hiddenForm.appendChild(textareaDiv);

    return hiddenForm;
}
 
function todoForm(project, projectBtn) {
    const form = createForm();

    const inputDiv = createTaskInput("");
    form.appendChild(inputDiv);

    const optionalDiv = createOptionalDiv();
    form.appendChild(optionalDiv);

    // more fields - hidden by default
    const hiddenForm = createHiddenForm("", "", "", true);
    form.appendChild(hiddenForm);

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "SAVE";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const title = form.elements['title'].value;
        const projectName = form.elements['project'].value !== "" ? form.elements['project'].value : project.name;
        const priority = form.elements['priority'].value !== "" ? form.elements['priority'].value : "";
        const description = form.elements['description'].value !== "" ? form.elements['description'].value : "";
        // title, dueDate, priority, description, project, complete
        const todo = new _todoItem_js__WEBPACK_IMPORTED_MODULE_4__.TodoItem(title, "", priority, description, projectName, false); 
        (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.saveTodoItemInProject)(projectName, todo)
        
        closeForm();
        projectBtn.click();
    })

    form.appendChild(btnDiv);
    return form;
}

function editForm(project, todo, index, projectBtn) {

    // title, dueDate, priority, description, project, complete
    const title = todo.title;
    const dueDate = todo.dueDate;
    const priority = todo.priority;
    const description = todo.description;
    const projectName = todo.project;
    const complete = false;

    const form = createForm();

    const inputDiv = createTaskInput(title);
    form.appendChild(inputDiv);

    const hiddenForm = createHiddenForm(projectName, priority, description, false);
    form.appendChild(hiddenForm);

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "SAVE";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        
        const title = form.elements['title'].value;
        const updatedProjectName = form.elements['project'].value !== "" ? form.elements['project'].value : project.name;
        const priority = form.elements['priority'].value !== "" ? form.elements['priority'].value : "";
        const description = form.elements['description'].value !== "" ? form.elements['description'].value : "";

        if (projectName !== updatedProjectName) {
            (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.deleteTodoItem)(projectName, index);
        }
        // title, dueDate, priority, description, project, complete
        const todo = new _todoItem_js__WEBPACK_IMPORTED_MODULE_4__.TodoItem(title, "", priority, description, updatedProjectName, complete); 
        (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.updateTodoItem)(updatedProjectName, todo, index)
        
        closeForm();
        projectBtn.click();
    })

    form.appendChild(btnDiv);
    return form;
}

// to darken content
function createOverlay() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    return overlay;
}

function openOverlay() {
    const overlay = createOverlay();
    overlay.classList.add("open");
    return overlay;
}

function closeForm() {
    const popup = document.querySelector(".popup");
    popup.remove();
    const overlay = document.querySelector(".overlay");
    overlay.remove();
}

function expandHiddenFields() {
    const hiddenForm = document.querySelector(".hidden");
    hiddenForm.classList.add("open");
}

function hideFields() {
    const hiddenForm = document.querySelector(".hidden");
    hiddenForm.classList.remove("open");
}


/***/ }),

/***/ "./src/loadFrontPage.js":
/*!******************************!*\
  !*** ./src/loadFrontPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader),
/* harmony export */   "loadBody": () => (/* binding */ loadBody)
/* harmony export */ });
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _images_project_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/project_add.svg */ "./src/images/project_add.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _menuContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuContent.js */ "./src/menuContent.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.js */ "./src/form.js");






function loadHeader() {

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = "Tue Feb 22 2022"; // TODO - change to use today's date

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = "TODO LIST";

    headerDiv.appendChild(dateDiv);
    headerDiv.appendChild(titleDiv);

    return headerDiv;

}

// body has menu and menu content
function loadBody() {

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("content_body");
    const menuDiv = loadMenu();
    const menuContentDiv = loadMenuContent();
    bodyDiv.appendChild(menuDiv);
    bodyDiv.appendChild(menuContentDiv);

    return bodyDiv;  
}

function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("project");
    titleDiv.textContent = "PROJECT";

    // add icon
    const projectAddIcon = new Image();
    projectAddIcon.src = _images_project_add_svg__WEBPACK_IMPORTED_MODULE_1__;
    titleDiv.appendChild(projectAddIcon);

    projectAddIcon.addEventListener("click", function(e) {
        (0,_form_js__WEBPACK_IMPORTED_MODULE_4__.openProjectForm)();
    })


    const projectListDiv = document.createElement("div");
    projectListDiv.classList.add("project_list");
    // default project always shows up
    const defaultProjBtn = document.createElement("button");
    defaultProjBtn.classList.add("proj_btn");
    defaultProjBtn.classList.add("default");
    defaultProjBtn.textContent = "Default Project";
    projectListDiv.appendChild(defaultProjBtn);

    defaultProjBtn.addEventListener("click", function(e) {
        const defaultProj = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateProject)("default");
        resetMenuState();
        defaultProjBtn.classList.add("active");
        loadContent(defaultProj, defaultProjBtn);
    })

    //load all project from localStorage
    const projects = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)();
    projects.filter(p => p.val.name !== "default").forEach(p => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("proj_btn");
        projectBtn.textContent = p.val.name;
        projectListDiv.appendChild(projectBtn);

        projectBtn.addEventListener("click", function(e) {
            // ensure to get new content from project
            const proj = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getProject)(p.val.name);
            resetMenuState();
            projectBtn.classList.add("active");
            loadContent(proj, projectBtn);
        })
    })   

    menuDiv.appendChild(titleDiv);
    menuDiv.appendChild(projectListDiv);

    return menuDiv;

}

function loadContent(project, projectBtn) {
    clearMenuContent();
    const projectContent = (0,_menuContent_js__WEBPACK_IMPORTED_MODULE_3__.loadProjectContent)(project, projectBtn);
    const menuContent = document.querySelector(".menu_content");
    menuContent.appendChild(projectContent);
}

function clearMenuContent() {
    const menuContent = document.querySelector(".menu_content .content");
    if (menuContent !== null) {
        menuContent.remove();
    }
}

function resetMenuState() {
    const activeMenu = document.querySelector(".proj_btn.active");
    if (activeMenu !== null) {
        activeMenu.classList.remove("active");
    }
}

function loadMenuContent() {
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu_content");
    return menuContent;
}


/***/ }),

/***/ "./src/menuContent.js":
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjectContent": () => (/* binding */ loadProjectContent)
/* harmony export */ });
/* harmony import */ var _images_add_todo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/add_todo.svg */ "./src/images/add_todo.svg");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItem.js */ "./src/todoItem.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





function loadProjectContent(project, projectBtn) {

    const content = document.createElement("div");
    content.classList.add("content");

    const todos = project.todoItems;
    if (todos.length === 0) {
        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.textContent = 'Start by creating a TODO.';
        content.appendChild(textDiv);

        const todoAddIcon = new Image();
        todoAddIcon.src = _images_add_todo_svg__WEBPACK_IMPORTED_MODULE_0__;
        content.appendChild(todoAddIcon);

        todoAddIcon.addEventListener("click", function(e) {
            (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.openAddTodoForm)(project, projectBtn);
        });
    } else {
        const todoContent = loadTodos(project, projectBtn);
        content.appendChild(todoContent);
    }
    return content;
}

function loadTodos(project, projectBtn) {
    const todoContent = document.createElement("div");
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("heading");

    const projectName = project.name;

    const todoAddIcon = new Image();
    todoAddIcon.src = _images_add_todo_svg__WEBPACK_IMPORTED_MODULE_0__;
    headingDiv.appendChild(todoAddIcon);

    todoAddIcon.addEventListener("click", function(e) {
        (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.openAddTodoForm)(project, projectBtn);
    });
    const headingTextDiv = document.createElement("div");
    headingTextDiv.classList.add("text");
    headingTextDiv.textContent = projectName;
    headingDiv.appendChild(headingTextDiv);
    todoContent.appendChild(headingDiv);

    // todos Div
    const todosDiv = loadTodosDiv(project, projectBtn);
    todoContent.appendChild(todosDiv);

    return todoContent;
}

function loadTodosDiv(project, projectBtn) {
    const todosDiv = document.createElement("div");
    todosDiv.classList.add("todos");

    const todos = project.todoItems;

    todos.forEach((todo, index) => {
        if (todo.complete) {
            return;
        }
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const left = document.createElement("div");
        left.classList.add("left");

        left.textContent = todo.title;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("button");
        completeBtn.classList.add("complete");
        completeBtn.textContent = "COMPLETE";

        completeBtn.addEventListener("click", function(e) {
            (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_2__.markComplete)(todo);
            (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.updateTodoItem)(project.name, todo, index);
            projectBtn.click();
        });

        left.appendChild(completeBtn);

        todoDiv.appendChild(left);

        const right = document.createElement("div");
        right.classList.add("right");

        const editBtn = document.createElement("button");
        editBtn.classList.add("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "EDIT";

        editBtn.addEventListener("click", function(e) {
            (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.openEditForm)(project, todo, index, projectBtn);
        });

        right.appendChild(editBtn);

        const delBtn = document.createElement("button");
        delBtn.classList.add("button");
        delBtn.classList.add("delete");
        delBtn.textContent = "DELETE";

        delBtn.addEventListener("click", function(e) {
            (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.deleteTodoItem)(project.name, index);
            projectBtn.click();
        });

        right.appendChild(delBtn);

        todoDiv.appendChild(right);

        todosDiv.appendChild(todoDiv);

    });

    const divider = document.createElement("hr");
    divider.classList.add("divider");
    todosDiv.appendChild(divider);

    const completed = loadCompletedTodos(todos, project.name, projectBtn);
    todosDiv.appendChild(completed);

    return todosDiv;
}

function loadCompletedTodos(todos, projectName, projectBtn) {
    const completedDiv = document.createElement("div");
    completedDiv.classList.add("completed");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("completed_heading");
    titleDiv.textContent = "COMPLETED";
    completedDiv.appendChild(titleDiv);

    todos.forEach((todo, index) => {
        if (!todo.complete) {
            return;
        }
        const completedTodo = document.createElement("div");
        completedTodo.classList.add("completed_todo");
        const span = document.createElement("span");
        span.textContent = todo.title;
        completedTodo.appendChild(span);


        const delBtn = document.createElement("button");
        delBtn.classList.add("button");
        delBtn.classList.add("delete");
        delBtn.textContent = "DELETE";
        completedTodo.appendChild(delBtn);

        delBtn.addEventListener("click", function(e) {
            (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.deleteTodoItem)(projectName, index);
            projectBtn.click();
        });

        completedDiv.appendChild(completedTodo);
    })

    return completedDiv;
}

function deleteProjectButton() {
    
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getOrCreateProject": () => (/* binding */ getOrCreateProject),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "saveTodoItemInProject": () => (/* binding */ saveTodoItemInProject),
/* harmony export */   "updateTodoItem": () => (/* binding */ updateTodoItem),
/* harmony export */   "deleteTodoItem": () => (/* binding */ deleteTodoItem)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


class Project {
    constructor(name, todoItems) {
        this.name = name;
        this.todoItems = todoItems;
    } 
}

const storage = new _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

function createNewProject(name) {
    const project = new Project(name, []);
    console.log(project);
    storage.saveProject(project);
}

function getAllProjects() {
    return storage.getAllProjects();
}

function getOrCreateProject(name) {
    return storage.getOrCreateProject(name);
}

function getProject(name) {
    return storage.getProjectByName(name);
}

function saveTodoItemInProject(projectName, todoItem) {
    storage.saveTodoItemInProject(projectName, todoItem);
}

function updateTodoItem(projectName, todoItem, index) {
    storage.updateTodoItem(projectName, todoItem, index);
}

function deleteTodoItem(projectName, index) {
    storage.deleteTodoItem(projectName, index);
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
const PROJECT_PREFIX = "project_";

class Storage {
    saveProject(project) {
        localStorage.setItem(PROJECT_PREFIX + project.name, JSON.stringify(project));
    }

    getProjectByName(name) {
        const project = localStorage.getItem(PROJECT_PREFIX + name);
        console.log(JSON.parse(project))
        return project === null ? {} : JSON.parse(project);
    }

    getOrCreateProject(projName) {
        const project = localStorage.getItem(PROJECT_PREFIX + projName);
        if (project === null) {
            this.saveProject({name: projName, todoItems: []});
        }
        return JSON.parse(localStorage.getItem(PROJECT_PREFIX + projName));
    }

    getAllProjects() {
        // array of objects - {key: projectName String, val: Project Object}
        const results = [];
        for (let itemKey in localStorage) {
            if (localStorage.hasOwnProperty(itemKey)) {
                const regex = /project_.+/i;
                if(itemKey.match(regex)) {
                    const value = JSON.parse(localStorage.getItem(itemKey));
                    results.push({key: itemKey, val: value});
                }
            }
        }
        return results;
    }

    saveTodoItemInProject(projectName, todoItem) {
        const project = this.getProjectByName(projectName);
        project.todoItems.push(todoItem);
        this.saveProject(project)
    }

    updateTodoItem(projectName, todoItem, index) {
        const project = this.getProjectByName(projectName);
        project.todoItems[index] = todoItem;
        this.saveProject(project)
    }

    deleteTodoItem(projectName, index) {
        const project = this.getProjectByName(projectName);
        project.todoItems.splice(index, 1);
        this.saveProject(project)
    }
}

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItem": () => (/* binding */ TodoItem),
/* harmony export */   "markComplete": () => (/* binding */ markComplete)
/* harmony export */ });
class TodoItem {
    constructor (title, dueDate, priority, description, project, complete) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.project = project;
        this.complete = complete;
    }

    // toggleComppleteStatus() {
    //     this.complete = !this.complete;
    // }
}

function markComplete(todo) {
    todo.complete = !todo.complete;
}

/***/ }),

/***/ "./src/images/add_todo.svg":
/*!*********************************!*\
  !*** ./src/images/add_todo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfc0ab29b6e35a1ca98c.svg";

/***/ }),

/***/ "./src/images/close_form.svg":
/*!***********************************!*\
  !*** ./src/images/close_form.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9cc2111ad4d94ee5ccf.svg";

/***/ }),

/***/ "./src/images/date.svg":
/*!*****************************!*\
  !*** ./src/images/date.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53c6b7e351cce75cd5f9.svg";

/***/ }),

/***/ "./src/images/expand_less.svg":
/*!************************************!*\
  !*** ./src/images/expand_less.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d83b9b1ddd5335e189c3.svg";

/***/ }),

/***/ "./src/images/expand_more.svg":
/*!************************************!*\
  !*** ./src/images/expand_more.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f8fcc97c440c9bdeccb.svg";

/***/ }),

/***/ "./src/images/project_add.svg":
/*!************************************!*\
  !*** ./src/images/project_add.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70de4ea9707fdd3441f5.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
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
/* harmony import */ var _loadFrontPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadFrontPage.js */ "./src/loadFrontPage.js");


const pageBody = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
pageBody.appendChild(content);

const headerDiv = (0,_loadFrontPage_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
const bodyDiv = (0,_loadFrontPage_js__WEBPACK_IMPORTED_MODULE_0__.loadBody)();
content.appendChild(headerDiv);
content.appendChild(bodyDiv);

const defaultBtn = document.querySelector("button.default");
defaultBtn.click();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBZ0I7QUFDeEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFlO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDJEQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDckJ1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDZEQUFVO0FBQzVCLGdCQUFnQiwyREFBUTtBQUN4QjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbG9hZEZyb250UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2V4cGFuZF9tb3JlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kYXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS29oaW5vb3IgVGVsdWd1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudF9ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxOTg5QjtcXG59XFxuXFxuLm1lbnVfY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzAxNztcXG59XFxuXFxuLm1lbnVfY29udGVudCA+IC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50ZXh0IHtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgLnRleHQge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIFxcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyxcXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAuY29tcGxldGVkIC5jb21wbGV0ZWRfdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX3RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwNDA7XFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLmNvbXBsZXRlZF90b2RvIHNwYW4ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6ICM3MDcwNzBDQztcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8gLmxlZnQsXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8gLnJpZ2h0IHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5idXR0b24ge1xcbiAgIGJvcmRlcjogbm9uZTsgXFxuICAgaGVpZ2h0OiAyNXB4O1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICBmb250OiBpbmhlcml0O1xcbiAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbi5jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQUEwMjc7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuYnV0dG9uLmVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ5NjBFO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuYnV0dG9uLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMzAwMDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5kaXZpZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX2hlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDEwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNDUwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3QgaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJval9idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE2NDtcXG5cXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkICMyQjRGNjE7XFxufVxcblxcbi5wcm9qX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDc5LCA5NywgMC4yNjcpO1xcbn1cXG5cXG4ucHJval9idG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNzksIDk3LCAwLjY0NCk7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDEwMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5vcGVuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1cCA+IGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZF9wcm9qZWN0X2Zvcm0sXFxuLmFkZF90b2RvX2Zvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ0bl9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcblxcbi5idG5fZGl2IGJ1dHRvbiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRfZGl2LFxcbi5zZWxlY3RfZGl2LFxcbi50ZXh0YXJlYV9kaXYsXFxuLmR1ZURhdGVfZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXRfZGl2IGlucHV0LFxcbi5zZWxlY3RfZGl2IHNlbGVjdCxcXG4udGV4dGFyZWFfZGl2IHRleHRhcmVhLFxcbi5kdWVEYXRlX2RpdiBpbnB1dCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuICAgIGJvcmRlcjogLjlweCBzb2xpZCAjNzA3MDcwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1vcmVfb3B0aW9uLFxcbi5sZXNzX29wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxlc3Nfb3B0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vcmVfb3B0aW9uIGltZyxcXG4ubGVzc19vcHRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5zZWxlY3RfZGl2IHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDNweCkgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XFxufVxcblxcbi50ZXh0YXJlYV9kaXYgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06YmVmb3JlIHtcXG4gICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcikgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Zm9jdXM6YmVmb3JlLFxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTp2YWxpZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmhpZGRlbi5vcGVuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lB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bUJBQW1COztJQUVuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7O0lBSUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTs7SUFFWixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7O0lBRWQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseURBQWtEO0lBQ2xELDRCQUE0QjtJQUM1Qiw0Q0FBNEM7SUFDNUMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxtQkFBbUI7RUFDckI7O0FBRUY7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0kseURBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tvaGlub29yIFRlbHVndScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnRfYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTk4OUI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwMTc7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgPiAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudGV4dCB7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8sXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX3RvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF90b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDQwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcblxcbi5jb21wbGV0ZWRfdG9kbyBzcGFuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAjNzA3MDcwQ0M7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5sZWZ0LFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5yaWdodCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuYnV0dG9uIHtcXG4gICBib3JkZXI6IG5vbmU7IFxcbiAgIGhlaWdodDogMjVweDtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udDogaW5oZXJpdDtcXG4gICBmb250LXNpemU6IDEzcHg7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMDI3O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0OTYwRTtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTMwMDAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuZGl2aWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF9oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAxMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2pfYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxNjQ7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMkI0RjYxO1xcbn1cXG5cXG4ucHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuMjY3KTtcXG59XFxuXFxuLnByb2pfYnRuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDc5LCA5NywgMC42NDQpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogNTAlO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxMDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3BlbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAgPiBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybV9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hZGRfcHJvamVjdF9mb3JtLFxcbi5hZGRfdG9kb19mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idG5fZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4uYnRuX2RpdiBidXR0b24ge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0X2RpdixcXG4uc2VsZWN0X2RpdixcXG4udGV4dGFyZWFfZGl2LFxcbi5kdWVEYXRlX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmlucHV0X2RpdiBpbnB1dCxcXG4uc2VsZWN0X2RpdiBzZWxlY3QsXFxuLnRleHRhcmVhX2RpdiB0ZXh0YXJlYSxcXG4uZHVlRGF0ZV9kaXYgaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBib3JkZXI6IC45cHggc29saWQgIzcwNzA3MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb3JlX29wdGlvbixcXG4ubGVzc19vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5sZXNzX29wdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb3JlX29wdGlvbiBpbWcsXFxuLmxlc3Nfb3B0aW9uIGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uc2VsZWN0X2RpdiBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9leHBhbmRfbW9yZS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gM3B4KSBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzVweDtcXG59XFxuXFxuLnRleHRhcmVhX2RpdiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1czpiZWZvcmUsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOnZhbGlkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2RhdGUuc3ZnJyk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uaGlkZGVuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDbG9zZV9JY29uIGZyb20gJy4vaW1hZ2VzL2Nsb3NlX2Zvcm0uc3ZnJztcbmltcG9ydCBFeHBhbmRNb3JlX0ljb24gZnJvbSAnLi9pbWFnZXMvZXhwYW5kX21vcmUuc3ZnJztcbmltcG9ydCBFeHBhbmRMZXNzX0ljb24gZnJvbSAnLi9pbWFnZXMvZXhwYW5kX2xlc3Muc3ZnJztcbmltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0LCBnZXRBbGxQcm9qZWN0cywgdXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHtUb2RvSXRlbX0gZnJvbSAnLi90b2RvSXRlbS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcG9wdXAgPSBjcmVhdGVQb3B1cFN0cnVjdHVyZSgpO1xuICAgIGNvbnN0IGZvcm1Db250ZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtX2NvbnRlbnRcIik7XG4gICAgZm9ybUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG5cbiAgICBhcHBlbmRQb3B1cChwb3B1cCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQWRkVG9kb0Zvcm0ocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBTdHJ1Y3R1cmUoKTtcbiAgICBjb25zdCBmb3JtQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9jb250ZW50XCIpO1xuICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKHByb2plY3QsIHByb2plY3RCdG4pKTtcblxuICAgIGFwcGVuZFBvcHVwKHBvcHVwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybShwcm9qZWN0LCB0b2RvLCBpbmRleCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBTdHJ1Y3R1cmUoKTtcbiAgICBjb25zdCBmb3JtQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9jb250ZW50XCIpO1xuICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKGVkaXRGb3JtKHByb2plY3QsIHRvZG8sIGluZGV4LCBwcm9qZWN0QnRuKSk7XG5cbiAgICBhcHBlbmRQb3B1cChwb3B1cCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBvcHVwKHBvcHVwKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgIC8vIGFkZCBvdmVybGF5XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3Blbk92ZXJsYXkoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwU3RydWN0dXJlKCkge1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICBjb25zdCBmb3JtQ2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZm9ybUNsb3NlSWNvbi5zcmMgPSBDbG9zZV9JY29uO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9jb250ZW50XCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNsb3NlSWNvbik7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBmb3JtQ2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGRfcHJvamVjdFwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkX3Byb2plY3RfZm9ybVwiKTtcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dF9kaXZcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWXigKZcIlxuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuX2RpdlwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0uZWxlbWVudHNbJ3Byb2plY3ROYW1lJ10udmFsdWU7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImFkZF90b2RvXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRfdG9kb19mb3JtXCIpO1xuICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJbnB1dCh2YWx1ZSkge1xuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRfZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IHRhc2sgLi4uXCJcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KVxuICAgIHJldHVybiBpbnB1dERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uYWxEaXYoKSB7XG4gICAgY29uc3Qgb3B0aW9uYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIG1vcmUgb3B0aW9uc1xuICAgIGNvbnN0IG1vcmVPcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vcmVPcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm1vcmVfb3B0aW9uXCIpO1xuICAgIG1vcmVPcHRpb25EaXYudGV4dENvbnRlbnQgPSBcIlNIT1cgTU9SRSBPUFRJT05TXCI7XG4gICAgY29uc3QgZXhwYW5kTW9yZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBleHBhbmRNb3JlSWNvbi5zcmMgPSBFeHBhbmRNb3JlX0ljb247XG4gICAgbW9yZU9wdGlvbkRpdi5hcHBlbmRDaGlsZChleHBhbmRNb3JlSWNvbik7XG4gICAgb3B0aW9uYWxEaXYuYXBwZW5kQ2hpbGQobW9yZU9wdGlvbkRpdik7XG4gICAgLy8gbGVzcyBvcHRpb25zXG4gICAgY29uc3QgbGVzc09wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVzc09wdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibGVzc19vcHRpb25cIik7XG4gICAgbGVzc09wdGlvbkRpdi50ZXh0Q29udGVudCA9IFwiU0hPVyBMRVNTIE9QVElPTlNcIjtcbiAgICBjb25zdCBleHBhbmRMZXNzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGV4cGFuZExlc3NJY29uLnNyYyA9IEV4cGFuZExlc3NfSWNvbjtcbiAgICBsZXNzT3B0aW9uRGl2LmFwcGVuZENoaWxkKGV4cGFuZExlc3NJY29uKTtcbiAgICBvcHRpb25hbERpdi5hcHBlbmRDaGlsZChsZXNzT3B0aW9uRGl2KTtcblxuICAgIGV4cGFuZE1vcmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZV9vcHRpb25cIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXNzX29wdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBleHBhbmRIaWRkZW5GaWVsZHMoKTtcbiAgICB9KVxuXG4gICAgZXhwYW5kTGVzc0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JlX29wdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlc3Nfb3B0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGhpZGVGaWVsZHMoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIG9wdGlvbmFsRGl2O1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpZGRlbkZvcm0ocHJvamVjdE5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaGlkZGVuQnlEZWZhdWx0KSB7XG4gICAgY29uc3QgaGlkZGVuRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKGhpZGRlbkJ5RGVmYXVsdCkge1xuICAgICAgICBoaWRkZW5Gb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICAgIC8vIHByb2plY3QgZHJvcCBkb3duXG4gICAgY29uc3Qgc2VsZWN0UHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZWN0UHJvakRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0X2RpdlwiKTtcbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3RQcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcblxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJvamVjdFwiO1xuICAgIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0QWxsUHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwLnZhbC5uYW1lO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwLnZhbC5uYW1lO1xuXG4gICAgICAgIGlmIChwLnZhbC5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gXCJ0cnVlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIHNlbGVjdFByb2pEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG4gICAgaGlkZGVuRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcm9qRGl2KTtcblxuICAgIC8vIHByaW9yaXR5IGRyb3AgZG93blxuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0X2RpdlwiKTtcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0UHJpb3JpdHkubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgcHJpb3JpdHlPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByaW9yaXR5XCI7XG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgY29uc3QgYWxsUHJpb3JpdGllcyA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl1cbiAgICBhbGxQcmlvcml0aWVzLmZvckVhY2goKHAsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHA7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHA7XG5cbiAgICAgICAgaWYgKHAgPT09IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBcInRydWVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgICBoaWRkZW5Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5RGl2KTtcblxuICAgIC8vIGR1ZSBkYXRlXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZV9kaXZcIik7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkYXRlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkR1ZSBkYXRlXCJcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgaGlkZGVuRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIC8vIHRleHRhcmVhXG4gICAgY29uc3QgdGV4dGFyZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRleHRhcmVhRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0YXJlYV9kaXZcIik7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiQWRkIGRlc2NyaXB0aW9uIOKAplwiO1xuICAgIHRleHRhcmVhLnZhbHVlID0gZGVzY3JpcHRpb247XG4gICAgdGV4dGFyZWFEaXYuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgIGhpZGRlbkZvcm0uYXBwZW5kQ2hpbGQodGV4dGFyZWFEaXYpO1xuXG4gICAgcmV0dXJuIGhpZGRlbkZvcm07XG59XG4gXG5mdW5jdGlvbiB0b2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gY3JlYXRlVGFza0lucHV0KFwiXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuXG4gICAgY29uc3Qgb3B0aW9uYWxEaXYgPSBjcmVhdGVPcHRpb25hbERpdigpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3B0aW9uYWxEaXYpO1xuXG4gICAgLy8gbW9yZSBmaWVsZHMgLSBoaWRkZW4gYnkgZGVmYXVsdFxuICAgIGNvbnN0IGhpZGRlbkZvcm0gPSBjcmVhdGVIaWRkZW5Gb3JtKFwiXCIsIFwiXCIsIFwiXCIsIHRydWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuRm9ybSk7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJidG5fZGl2XCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZm9ybS5lbGVtZW50c1sncHJvamVjdCddLnZhbHVlICE9PSBcIlwiID8gZm9ybS5lbGVtZW50c1sncHJvamVjdCddLnZhbHVlIDogcHJvamVjdC5uYW1lO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWUgIT09IFwiXCIgPyBmb3JtLmVsZW1lbnRzWydwcmlvcml0eSddLnZhbHVlIDogXCJcIjtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzWydkZXNjcmlwdGlvbiddLnZhbHVlICE9PSBcIlwiID8gZm9ybS5lbGVtZW50c1snZGVzY3JpcHRpb24nXS52YWx1ZSA6IFwiXCI7XG4gICAgICAgIC8vIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGNvbXBsZXRlXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb0l0ZW0odGl0bGUsIFwiXCIsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdE5hbWUsIGZhbHNlKTsgXG4gICAgICAgIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kbylcbiAgICAgICAgXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICBwcm9qZWN0QnRuLmNsaWNrKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gZWRpdEZvcm0ocHJvamVjdCwgdG9kbywgaW5kZXgsIHByb2plY3RCdG4pIHtcblxuICAgIC8vIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGNvbXBsZXRlXG4gICAgY29uc3QgdGl0bGUgPSB0b2RvLnRpdGxlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRvZG8ucHJvamVjdDtcbiAgICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gY3JlYXRlVGFza0lucHV0KHRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcblxuICAgIGNvbnN0IGhpZGRlbkZvcm0gPSBjcmVhdGVIaWRkZW5Gb3JtKHByb2plY3ROYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhpZGRlbkZvcm0pO1xuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuX2RpdlwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1sndGl0bGUnXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFByb2plY3ROYW1lID0gZm9ybS5lbGVtZW50c1sncHJvamVjdCddLnZhbHVlICE9PSBcIlwiID8gZm9ybS5lbGVtZW50c1sncHJvamVjdCddLnZhbHVlIDogcHJvamVjdC5uYW1lO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWUgIT09IFwiXCIgPyBmb3JtLmVsZW1lbnRzWydwcmlvcml0eSddLnZhbHVlIDogXCJcIjtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzWydkZXNjcmlwdGlvbiddLnZhbHVlICE9PSBcIlwiID8gZm9ybS5lbGVtZW50c1snZGVzY3JpcHRpb24nXS52YWx1ZSA6IFwiXCI7XG5cbiAgICAgICAgaWYgKHByb2plY3ROYW1lICE9PSB1cGRhdGVkUHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgY29tcGxldGVcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvSXRlbSh0aXRsZSwgXCJcIiwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCB1cGRhdGVkUHJvamVjdE5hbWUsIGNvbXBsZXRlKTsgXG4gICAgICAgIHVwZGF0ZVRvZG9JdGVtKHVwZGF0ZWRQcm9qZWN0TmFtZSwgdG9kbywgaW5kZXgpXG4gICAgICAgIFxuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cbi8vIHRvIGRhcmtlbiBjb250ZW50XG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIG9wZW5PdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVPdmVybGF5KCk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZEhpZGRlbkZpZWxkcygpIHtcbiAgICBjb25zdCBoaWRkZW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIik7XG4gICAgaGlkZGVuRm9ybS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUZpZWxkcygpIHtcbiAgICBjb25zdCBoaWRkZW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIik7XG4gICAgaGlkZGVuRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IEFkZF9JY29uIGZyb20gJy4vaW1hZ2VzL3Byb2plY3RfYWRkLnN2Zyc7XG5pbXBvcnQge2dldEFsbFByb2plY3RzLCBnZXRPckNyZWF0ZVByb2plY3QsIGdldFByb2plY3R9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQge2xvYWRQcm9qZWN0Q29udGVudH0gZnJvbSAnLi9tZW51Q29udGVudC5qcyc7XG5pbXBvcnQge29wZW5Qcm9qZWN0Rm9ybX0gZnJvbSAnLi9mb3JtLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gXCJUdWUgRmViIDIyIDIwMjJcIjsgLy8gVE9ETyAtIGNoYW5nZSB0byB1c2UgdG9kYXkncyBkYXRlXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJUT0RPIExJU1RcIjtcblxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgcmV0dXJuIGhlYWRlckRpdjtcblxufVxuXG4vLyBib2R5IGhhcyBtZW51IGFuZCBtZW51IGNvbnRlbnRcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQm9keSgpIHtcblxuICAgIGNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRfYm9keVwiKTtcbiAgICBjb25zdCBtZW51RGl2ID0gbG9hZE1lbnUoKTtcbiAgICBjb25zdCBtZW51Q29udGVudERpdiA9IGxvYWRNZW51Q29udGVudCgpO1xuICAgIGJvZHlEaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gICAgYm9keURpdi5hcHBlbmRDaGlsZChtZW51Q29udGVudERpdik7XG5cbiAgICByZXR1cm4gYm9keURpdjsgIFxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbiAgICAvLyBhZGQgaWNvblxuICAgIGNvbnN0IHByb2plY3RBZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdEFkZEljb24uc3JjID0gQWRkX0ljb247XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEljb24pO1xuXG4gICAgcHJvamVjdEFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb3BlblByb2plY3RGb3JtKCk7XG4gICAgfSlcblxuXG4gICAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RMaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2xpc3RcIik7XG4gICAgLy8gZGVmYXVsdCBwcm9qZWN0IGFsd2F5cyBzaG93cyB1cFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWZhdWx0UHJvakJ0bi5jbGFzc0xpc3QuYWRkKFwicHJval9idG5cIik7XG4gICAgZGVmYXVsdFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImRlZmF1bHRcIik7XG4gICAgZGVmYXVsdFByb2pCdG4udGV4dENvbnRlbnQgPSBcIkRlZmF1bHQgUHJvamVjdFwiO1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qQnRuKTtcblxuICAgIGRlZmF1bHRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qID0gZ2V0T3JDcmVhdGVQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbiAgICAgICAgcmVzZXRNZW51U3RhdGUoKTtcbiAgICAgICAgZGVmYXVsdFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbG9hZENvbnRlbnQoZGVmYXVsdFByb2osIGRlZmF1bHRQcm9qQnRuKTtcbiAgICB9KVxuXG4gICAgLy9sb2FkIGFsbCBwcm9qZWN0IGZyb20gbG9jYWxTdG9yYWdlXG4gICAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZpbHRlcihwID0+IHAudmFsLm5hbWUgIT09IFwiZGVmYXVsdFwiKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJval9idG5cIik7XG4gICAgICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBwLnZhbC5uYW1lO1xuICAgICAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcblxuICAgICAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgdG8gZ2V0IG5ldyBjb250ZW50IGZyb20gcHJvamVjdFxuICAgICAgICAgICAgY29uc3QgcHJvaiA9IGdldFByb2plY3QocC52YWwubmFtZSk7XG4gICAgICAgICAgICByZXNldE1lbnVTdGF0ZSgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgbG9hZENvbnRlbnQocHJvaiwgcHJvamVjdEJ0bik7XG4gICAgICAgIH0pXG4gICAgfSkgICBcblxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3REaXYpO1xuXG4gICAgcmV0dXJuIG1lbnVEaXY7XG5cbn1cblxuZnVuY3Rpb24gbG9hZENvbnRlbnQocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNsZWFyTWVudUNvbnRlbnQoKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0LCBwcm9qZWN0QnRuKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9jb250ZW50XCIpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9jb250ZW50IC5jb250ZW50XCIpO1xuICAgIGlmIChtZW51Q29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBtZW51Q29udGVudC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TWVudVN0YXRlKCkge1xuICAgIGNvbnN0IGFjdGl2ZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfYnRuLmFjdGl2ZVwiKTtcbiAgICBpZiAoYWN0aXZlTWVudSAhPT0gbnVsbCkge1xuICAgICAgICBhY3RpdmVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51X2NvbnRlbnRcIik7XG4gICAgcmV0dXJuIG1lbnVDb250ZW50O1xufVxuIiwiaW1wb3J0IEFERF9UT0RPX0lDT04gZnJvbSAnLi9pbWFnZXMvYWRkX3RvZG8uc3ZnJztcbmltcG9ydCB7b3BlbkFkZFRvZG9Gb3JtLCBvcGVuRWRpdEZvcm19IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQge21hcmtDb21wbGV0ZX0gZnJvbSAnLi90b2RvSXRlbS5qcydcbmltcG9ydCB7dXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RDb250ZW50KHByb2plY3QsIHByb2plY3RCdG4pIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb0l0ZW1zO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSAnU3RhcnQgYnkgY3JlYXRpbmcgYSBUT0RPLic7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICAgICAgY29uc3QgdG9kb0FkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdG9kb0FkZEljb24uc3JjID0gQUREX1RPRE9fSUNPTjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQWRkSWNvbik7XG5cbiAgICAgICAgdG9kb0FkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRlbnQgPSBsb2FkVG9kb3MocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9zKHByb2plY3QsIHByb2plY3RCdG4pIHtcbiAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuXG4gICAgY29uc3QgdG9kb0FkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvQWRkSWNvbi5zcmMgPSBBRERfVE9ET19JQ09OO1xuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQodG9kb0FkZEljb24pO1xuXG4gICAgdG9kb0FkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb3BlbkFkZFRvZG9Gb3JtKHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRpbmdUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkaW5nVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICBoZWFkaW5nVGV4dERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZ1RleHREaXYpO1xuICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xuXG4gICAgLy8gdG9kb3MgRGl2XG4gICAgY29uc3QgdG9kb3NEaXYgPSBsb2FkVG9kb3NEaXYocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb3NEaXYpO1xuXG4gICAgcmV0dXJuIHRvZG9Db250ZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkVG9kb3NEaXYocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb0l0ZW1zO1xuXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcblxuICAgICAgICBsZWZ0LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIkNPTVBMRVRFXCI7XG5cbiAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG1hcmtDb21wbGV0ZSh0b2RvKTtcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9JdGVtKHByb2plY3QubmFtZSwgdG9kbywgaW5kZXgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcblxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGxlZnQpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmlnaHQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcblxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBvcGVuRWRpdEZvcm0ocHJvamVjdCwgdG9kbywgaW5kZXgsIHByb2plY3RCdG4pO1xuICAgICAgICB9KTtcblxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG5cbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShwcm9qZWN0Lm5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcblxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHJpZ2h0KTtcblxuICAgICAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIpO1xuICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuXG4gICAgY29uc3QgY29tcGxldGVkID0gbG9hZENvbXBsZXRlZFRvZG9zKHRvZG9zLCBwcm9qZWN0Lm5hbWUsIHByb2plY3RCdG4pO1xuICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZCk7XG5cbiAgICByZXR1cm4gdG9kb3NEaXY7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb21wbGV0ZWRUb2Rvcyh0b2RvcywgcHJvamVjdE5hbWUsIHByb2plY3RCdG4pIHtcbiAgICBjb25zdCBjb21wbGV0ZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXBsZXRlZERpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkX2hlYWRpbmdcIik7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIkNPTVBMRVRFRFwiO1xuICAgIGNvbXBsZXRlZERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoIXRvZG8uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wbGV0ZWRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcGxldGVkVG9kby5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkX3RvZG9cIik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGNvbXBsZXRlZFRvZG8uYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gICAgICAgIGNvbXBsZXRlZFRvZG8uYXBwZW5kQ2hpbGQoZGVsQnRuKTtcblxuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBsZXRlZERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUb2RvKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlZERpdjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcbiAgICBcbn1cbiIsImltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b2RvSXRlbXMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSB0b2RvSXRlbXM7XG4gICAgfSBcbn1cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgW10pO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIHN0b3JhZ2Uuc2F2ZVByb2plY3QocHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JDcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5nZXRPckNyZWF0ZVByb2plY3QobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5nZXRQcm9qZWN0QnlOYW1lKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvSXRlbSkge1xuICAgIHN0b3JhZ2Uuc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvSXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgdG9kb0l0ZW0sIGluZGV4KSB7XG4gICAgc3RvcmFnZS51cGRhdGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgdG9kb0l0ZW0sIGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCkge1xuICAgIHN0b3JhZ2UuZGVsZXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIGluZGV4KTtcbn0iLCJjb25zdCBQUk9KRUNUX1BSRUZJWCA9IFwicHJvamVjdF9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc2F2ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUk9KRUNUX1BSRUZJWCArIHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICAgIH1cblxuICAgIGdldFByb2plY3RCeU5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBuYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShwcm9qZWN0KSlcbiAgICAgICAgcmV0dXJuIHByb2plY3QgPT09IG51bGwgPyB7fSA6IEpTT04ucGFyc2UocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0T3JDcmVhdGVQcm9qZWN0KHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQUk9KRUNUX1BSRUZJWCArIHByb2pOYW1lKTtcbiAgICAgICAgaWYgKHByb2plY3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVByb2plY3Qoe25hbWU6IHByb2pOYW1lLCB0b2RvSXRlbXM6IFtdfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBwcm9qTmFtZSkpO1xuICAgIH1cblxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICAvLyBhcnJheSBvZiBvYmplY3RzIC0ge2tleTogcHJvamVjdE5hbWUgU3RyaW5nLCB2YWw6IFByb2plY3QgT2JqZWN0fVxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGl0ZW1LZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGl0ZW1LZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvcHJvamVjdF8uKy9pO1xuICAgICAgICAgICAgICAgIGlmKGl0ZW1LZXkubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtS2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7a2V5OiBpdGVtS2V5LCB2YWw6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0KHByb2plY3QpXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIHRvZG9JdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXNbaW5kZXhdID0gdG9kb0l0ZW07XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3QocHJvamVjdClcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3QocHJvamVjdClcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cblxuICAgIC8vIHRvZ2dsZUNvbXBwbGV0ZVN0YXR1cygpIHtcbiAgICAvLyAgICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDb21wbGV0ZSh0b2RvKSB7XG4gICAgdG9kby5jb21wbGV0ZSA9ICF0b2RvLmNvbXBsZXRlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7bG9hZEhlYWRlciwgbG9hZEJvZHl9IGZyb20gJy4vbG9hZEZyb250UGFnZS5qcydcblxuY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xucGFnZUJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmNvbnN0IGhlYWRlckRpdiA9IGxvYWRIZWFkZXIoKTtcbmNvbnN0IGJvZHlEaXYgPSBsb2FkQm9keSgpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuY29udGVudC5hcHBlbmRDaGlsZChib2R5RGl2KTtcblxuY29uc3QgZGVmYXVsdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZGVmYXVsdFwiKTtcbmRlZmF1bHRCdG4uY2xpY2soKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9