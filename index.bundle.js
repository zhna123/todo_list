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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50%;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-top: 50px;\n    margin-bottom: 40px;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div,\n.select_div,\n.textarea_div,\n.dueDate_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.input_div input,\n.select_div select,\n.textarea_div textarea,\n.dueDate_div input {\n    width: 60%;\n    /* height: 40px; */\n    font: inherit;\n    color: #707070;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n\n    box-sizing: border-box;\n}\n\n.more_option,\n.less_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: 50px; */\n    margin-top: 20px;\n    color: #707070;\n\n    margin-bottom: 20px;\n}\n\n.less_option {\n    display: none;\n}\n\n.more_option img,\n.less_option img {\n    width: 40px;\n}\n\n/* .select_div {\n    margin-top: 20px;\n} */\n\n.select_div select {\n    appearance: none;\n    /* padding-right: 15px; */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: calc(100% - 3px) center;\n    background-size: 35px;\n}\n\n.textarea_div textarea {\n    height: 100px;\n    /* margin-top: 20px; */\n}\n\ninput[type=\"date\"]:before {\n    content: attr(placeholder) !important;\n    /* color: #aaa; */\n    margin-right: 0.5em;\n    /* width: 100%; */\n  }\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n    content: \"\";\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.hidden {\n    display: none;\n    opacity: 0;\n}\n\n.hidden.open {\n    display: block;\n    opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50%;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-top: 50px;\n    margin-bottom: 40px;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div,\n.select_div,\n.textarea_div,\n.dueDate_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.input_div input,\n.select_div select,\n.textarea_div textarea,\n.dueDate_div input {\n    width: 60%;\n    /* height: 40px; */\n    font: inherit;\n    color: #707070;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n\n    box-sizing: border-box;\n}\n\n.more_option,\n.less_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: 50px; */\n    margin-top: 20px;\n    color: #707070;\n\n    margin-bottom: 20px;\n}\n\n.less_option {\n    display: none;\n}\n\n.more_option img,\n.less_option img {\n    width: 40px;\n}\n\n/* .select_div {\n    margin-top: 20px;\n} */\n\n.select_div select {\n    appearance: none;\n    /* padding-right: 15px; */\n    background-image: url('../images/expand_more.svg');\n    background-repeat: no-repeat;\n    background-position: calc(100% - 3px) center;\n    background-size: 35px;\n}\n\n.textarea_div textarea {\n    height: 100px;\n    /* margin-top: 20px; */\n}\n\ninput[type=\"date\"]:before {\n    content: attr(placeholder) !important;\n    /* color: #aaa; */\n    margin-right: 0.5em;\n    /* width: 100%; */\n  }\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n    content: \"\";\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-image: url('../images/date.svg');\n}\n\n.hidden {\n    display: none;\n    opacity: 0;\n}\n\n.hidden.open {\n    display: block;\n    opacity: 1;\n}"],"sourceRoot":""}]);
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

function todoForm(project, projectBtn) {
    const addTodo = document.createElement("div");
    addTodo.classList.add("add_todo");
    const form = document.createElement("form");
    form.classList.add("add_todo_form");
    addTodo.appendChild(form);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task ..."
    input.name = "title";
    input.required = true;
    inputDiv.appendChild(input)
    form.appendChild(inputDiv);

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

    form.appendChild(optionalDiv);

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

    // more fields - hidden by default
    const hiddenForm = document.createElement("div");
    hiddenForm.classList.add("hidden");
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
    textareaDiv.appendChild(textarea);
    hiddenForm.appendChild(textareaDiv);

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

    const addTodo = document.createElement("div");
    addTodo.classList.add("add_todo");
    const form = document.createElement("form");
    form.classList.add("add_todo_form");
    addTodo.appendChild(form);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task ...";
    input.name = "title";
    input.value = title;
    input.required = true;
    inputDiv.appendChild(input)
    form.appendChild(inputDiv);

    const hiddenForm = document.createElement("div");
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

    // due date - TODO
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
        // let itemKey;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUscUNBQXFDLGtCQUFrQixpREFBaUQsR0FBRyxjQUFj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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixtREFBVTs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQWU7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwyREFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7QUNyQnVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsNkRBQVU7QUFDNUIsZ0JBQWdCLDJEQUFRO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9sb2FkRnJvbnRQYWdlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tZW51Q29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZXhwYW5kX21vcmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2RhdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdLb2hpbm9vciBUZWx1Z3UnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUge1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzMpO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzMpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50X2JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE5ODlCO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDE3O1xcbn1cXG5cXG4ubWVudV9jb250ZW50ID4gLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRleHQge1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIGltZyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgXFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvLFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF90b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAuY29tcGxldGVkIC5jb21wbGV0ZWRfdG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA0MDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uY29tcGxldGVkX3RvZG8gc3BhbiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogIzcwNzA3MENDO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyAubGVmdCxcXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyAucmlnaHQge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmJ1dHRvbiB7XFxuICAgYm9yZGVyOiBub25lOyBcXG4gICBoZWlnaHQ6IDI1cHg7XFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgZm9udC1zaXplOiAxM3B4O1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uLmNvbXBsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBQTAyNztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24uZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDk2MEU7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG5idXR0b24uZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzMDAwMDtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmRpdmlkZXIge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAuY29tcGxldGVkIC5jb21wbGV0ZWRfaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMTBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdCBpbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qX2J0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTY0O1xcblxcbiAgICBib3JkZXI6IC41cHggc29saWQgIzJCNEY2MTtcXG59XFxuXFxuLnByb2pfYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNzksIDk3LCAwLjI2Nyk7XFxufVxcblxcbi5wcm9qX2J0bi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuNjQ0KTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwID4gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7ICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm1fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYWRkX3Byb2plY3RfZm9ybSxcXG4uYWRkX3RvZG9fZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnRuX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuXFxuLmJ0bl9kaXYgYnV0dG9uIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dF9kaXYsXFxuLnNlbGVjdF9kaXYsXFxuLnRleHRhcmVhX2RpdixcXG4uZHVlRGF0ZV9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pbnB1dF9kaXYgaW5wdXQsXFxuLnNlbGVjdF9kaXYgc2VsZWN0LFxcbi50ZXh0YXJlYV9kaXYgdGV4dGFyZWEsXFxuLmR1ZURhdGVfZGl2IGlucHV0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgLyogaGVpZ2h0OiA0MHB4OyAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG4gICAgYm9yZGVyOiAuOXB4IHNvbGlkICM3MDcwNzA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubW9yZV9vcHRpb24sXFxuLmxlc3Nfb3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGdhcDogNTBweDsgKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5sZXNzX29wdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb3JlX29wdGlvbiBpbWcsXFxuLmxlc3Nfb3B0aW9uIGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4vKiAuc2VsZWN0X2RpdiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufSAqL1xcblxcbi5zZWxlY3RfZGl2IHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDE1cHg7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDNweCkgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XFxufVxcblxcbi50ZXh0YXJlYV9kaXYgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06YmVmb3JlIHtcXG4gICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcikgIWltcG9ydGFudDtcXG4gICAgLyogY29sb3I6ICNhYWE7ICovXFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgfVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1czpiZWZvcmUsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOnZhbGlkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uaGlkZGVuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7O0lBRVosYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztBQUVB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Z0I7QUFDcEI7O0FBRUE7Ozs7SUFJSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZOztJQUVaLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7O0lBRWQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0FBRUY7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0kseURBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tvaGlub29yIFRlbHVndScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnRfYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTk4OUI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwMTc7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgPiAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudGV4dCB7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8sXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX3RvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF90b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDQwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcblxcbi5jb21wbGV0ZWRfdG9kbyBzcGFuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAjNzA3MDcwQ0M7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5sZWZ0LFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5yaWdodCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuYnV0dG9uIHtcXG4gICBib3JkZXI6IG5vbmU7IFxcbiAgIGhlaWdodDogMjVweDtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udDogaW5oZXJpdDtcXG4gICBmb250LXNpemU6IDEzcHg7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMDI3O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0OTYwRTtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTMwMDAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuZGl2aWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF9oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAxMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2pfYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxNjQ7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMkI0RjYxO1xcbn1cXG5cXG4ucHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuMjY3KTtcXG59XFxuXFxuLnByb2pfYnRuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDc5LCA5NywgMC42NDQpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogNTAlO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxMDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3BlbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAgPiBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybV9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hZGRfcHJvamVjdF9mb3JtLFxcbi5hZGRfdG9kb19mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idG5fZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4uYnRuX2RpdiBidXR0b24ge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0X2RpdixcXG4uc2VsZWN0X2RpdixcXG4udGV4dGFyZWFfZGl2LFxcbi5kdWVEYXRlX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmlucHV0X2RpdiBpbnB1dCxcXG4uc2VsZWN0X2RpdiBzZWxlY3QsXFxuLnRleHRhcmVhX2RpdiB0ZXh0YXJlYSxcXG4uZHVlRGF0ZV9kaXYgaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBib3JkZXI6IC45cHggc29saWQgIzcwNzA3MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb3JlX29wdGlvbixcXG4ubGVzc19vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiA1MHB4OyAqL1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxlc3Nfb3B0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vcmVfb3B0aW9uIGltZyxcXG4ubGVzc19vcHRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi8qIC5zZWxlY3RfZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59ICovXFxuXFxuLnNlbGVjdF9kaXYgc2VsZWN0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogcGFkZGluZy1yaWdodDogMTVweDsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZXhwYW5kX21vcmUuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDNweCkgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XFxufVxcblxcbi50ZXh0YXJlYV9kaXYgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06YmVmb3JlIHtcXG4gICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcikgIWltcG9ydGFudDtcXG4gICAgLyogY29sb3I6ICNhYWE7ICovXFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgfVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1czpiZWZvcmUsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOnZhbGlkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2RhdGUuc3ZnJyk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uaGlkZGVuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDbG9zZV9JY29uIGZyb20gJy4vaW1hZ2VzL2Nsb3NlX2Zvcm0uc3ZnJztcbmltcG9ydCBFeHBhbmRNb3JlX0ljb24gZnJvbSAnLi9pbWFnZXMvZXhwYW5kX21vcmUuc3ZnJztcbmltcG9ydCBFeHBhbmRMZXNzX0ljb24gZnJvbSAnLi9pbWFnZXMvZXhwYW5kX2xlc3Muc3ZnJztcbmltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0LCBnZXRBbGxQcm9qZWN0cywgdXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHtUb2RvSXRlbX0gZnJvbSAnLi90b2RvSXRlbS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcG9wdXAgPSBjcmVhdGVQb3B1cFN0cnVjdHVyZSgpO1xuICAgIGNvbnN0IGZvcm1Db250ZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtX2NvbnRlbnRcIik7XG4gICAgZm9ybUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG5cbiAgICBhcHBlbmRQb3B1cChwb3B1cCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQWRkVG9kb0Zvcm0ocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBTdHJ1Y3R1cmUoKTtcbiAgICBjb25zdCBmb3JtQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9jb250ZW50XCIpO1xuICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKHByb2plY3QsIHByb2plY3RCdG4pKTtcblxuICAgIGFwcGVuZFBvcHVwKHBvcHVwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybShwcm9qZWN0LCB0b2RvLCBpbmRleCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBTdHJ1Y3R1cmUoKTtcbiAgICBjb25zdCBmb3JtQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9jb250ZW50XCIpO1xuICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKGVkaXRGb3JtKHByb2plY3QsIHRvZG8sIGluZGV4LCBwcm9qZWN0QnRuKSk7XG5cbiAgICBhcHBlbmRQb3B1cChwb3B1cCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBvcHVwKHBvcHVwKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgIC8vIGFkZCBvdmVybGF5XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3Blbk92ZXJsYXkoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwU3RydWN0dXJlKCkge1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICBjb25zdCBmb3JtQ2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZm9ybUNsb3NlSWNvbi5zcmMgPSBDbG9zZV9JY29uO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9jb250ZW50XCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNsb3NlSWNvbik7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBmb3JtQ2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGRfcHJvamVjdFwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkX3Byb2plY3RfZm9ybVwiKTtcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dF9kaXZcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWXigKZcIlxuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuX2RpdlwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0uZWxlbWVudHNbJ3Byb2plY3ROYW1lJ10udmFsdWU7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiB0b2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKFwiYWRkX3RvZG9cIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZF90b2RvX2Zvcm1cIik7XG4gICAgYWRkVG9kby5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRfZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IHRhc2sgLi4uXCJcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcblxuICAgIGNvbnN0IG9wdGlvbmFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBtb3JlIG9wdGlvbnNcbiAgICBjb25zdCBtb3JlT3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3JlT3B0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJtb3JlX29wdGlvblwiKTtcbiAgICBtb3JlT3B0aW9uRGl2LnRleHRDb250ZW50ID0gXCJTSE9XIE1PUkUgT1BUSU9OU1wiO1xuICAgIGNvbnN0IGV4cGFuZE1vcmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZXhwYW5kTW9yZUljb24uc3JjID0gRXhwYW5kTW9yZV9JY29uO1xuICAgIG1vcmVPcHRpb25EaXYuYXBwZW5kQ2hpbGQoZXhwYW5kTW9yZUljb24pO1xuICAgIG9wdGlvbmFsRGl2LmFwcGVuZENoaWxkKG1vcmVPcHRpb25EaXYpO1xuICAgIC8vIGxlc3Mgb3B0aW9uc1xuICAgIGNvbnN0IGxlc3NPcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlc3NPcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImxlc3Nfb3B0aW9uXCIpO1xuICAgIGxlc3NPcHRpb25EaXYudGV4dENvbnRlbnQgPSBcIlNIT1cgTEVTUyBPUFRJT05TXCI7XG4gICAgY29uc3QgZXhwYW5kTGVzc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBleHBhbmRMZXNzSWNvbi5zcmMgPSBFeHBhbmRMZXNzX0ljb247XG4gICAgbGVzc09wdGlvbkRpdi5hcHBlbmRDaGlsZChleHBhbmRMZXNzSWNvbik7XG4gICAgb3B0aW9uYWxEaXYuYXBwZW5kQ2hpbGQobGVzc09wdGlvbkRpdik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbmFsRGl2KTtcblxuICAgIGV4cGFuZE1vcmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZV9vcHRpb25cIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXNzX29wdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBleHBhbmRIaWRkZW5GaWVsZHMoKTtcbiAgICB9KVxuXG4gICAgZXhwYW5kTGVzc0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JlX29wdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlc3Nfb3B0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGhpZGVGaWVsZHMoKTtcbiAgICB9KVxuXG4gICAgLy8gbW9yZSBmaWVsZHMgLSBoaWRkZW4gYnkgZGVmYXVsdFxuICAgIGNvbnN0IGhpZGRlbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhpZGRlbkZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAvLyBwcm9qZWN0IGRyb3AgZG93blxuICAgIGNvbnN0IHNlbGVjdFByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdFByb2pEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdF9kaXZcIik7XG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0UHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG5cbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3RcIjtcbiAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcC52YWwubmFtZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcC52YWwubmFtZTtcbiAgICAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG5cbiAgICBzZWxlY3RQcm9qRGl2LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuICAgIGhpZGRlbkZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvakRpdik7XG5cbiAgICAvLyBwcmlvcml0eSBkcm9wIGRvd25cbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZWN0UHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdF9kaXZcIik7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdFByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5T3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcmlvcml0eVwiO1xuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIGNvbnN0IGFsbFByaW9yaXRpZXMgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdXG4gICAgYWxsUHJpb3JpdGllcy5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwO1xuICAgICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG5cbiAgICBzZWxlY3RQcmlvcml0eURpdi5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XG4gICAgaGlkZGVuRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eURpdik7XG5cbiAgICAvLyBkdWUgZGF0ZVxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVfZGl2XCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJEdWUgZGF0ZVwiXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGhpZGRlbkZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICAvLyB0ZXh0YXJlYVxuICAgIGNvbnN0IHRleHRhcmVhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXh0YXJlYURpdi5jbGFzc0xpc3QuYWRkKFwidGV4dGFyZWFfZGl2XCIpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRleHRhcmVhLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkFkZCBkZXNjcmlwdGlvbiDigKZcIjtcbiAgICB0ZXh0YXJlYURpdi5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgaGlkZGVuRm9ybS5hcHBlbmRDaGlsZCh0ZXh0YXJlYURpdik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGhpZGRlbkZvcm0pO1xuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuX2RpdlwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0uZWxlbWVudHNbJ3Byb2plY3QnXS52YWx1ZSAhPT0gXCJcIiA/IGZvcm0uZWxlbWVudHNbJ3Byb2plY3QnXS52YWx1ZSA6IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzWydwcmlvcml0eSddLnZhbHVlICE9PSBcIlwiID8gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZSA6IFwiXCI7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1snZGVzY3JpcHRpb24nXS52YWx1ZSAhPT0gXCJcIiA/IGZvcm0uZWxlbWVudHNbJ2Rlc2NyaXB0aW9uJ10udmFsdWUgOiBcIlwiO1xuICAgICAgICAvLyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBjb21wbGV0ZVxuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG9JdGVtKHRpdGxlLCBcIlwiLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3ROYW1lLCBmYWxzZSk7IFxuICAgICAgICBzYXZlVG9kb0l0ZW1JblByb2plY3QocHJvamVjdE5hbWUsIHRvZG8pXG4gICAgICAgIFxuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcblxufVxuXG5mdW5jdGlvbiBlZGl0Rm9ybShwcm9qZWN0LCB0b2RvLCBpbmRleCwgcHJvamVjdEJ0bikge1xuXG4gICAgLy8gdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgY29tcGxldGVcbiAgICBjb25zdCB0aXRsZSA9IHRvZG8udGl0bGU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdG9kby5wcm9qZWN0O1xuICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJhZGRfdG9kb1wiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkX3RvZG9fZm9ybVwiKTtcbiAgICBhZGRUb2RvLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dF9kaXZcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgdGFzayAuLi5cIjtcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIGlucHV0LnZhbHVlID0gdGl0bGU7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuXG4gICAgY29uc3QgaGlkZGVuRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gcHJvamVjdCBkcm9wIGRvd25cbiAgICBjb25zdCBzZWxlY3RQcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RQcm9qRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RfZGl2XCIpO1xuICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdFByb2plY3QubmFtZSA9IFwicHJvamVjdFwiO1xuXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcm9qZWN0XCI7XG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHAudmFsLm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHAudmFsLm5hbWU7XG4gICAgICAgIGlmIChwLnZhbC5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gXCJ0cnVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG5cbiAgICBzZWxlY3RQcm9qRGl2LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuICAgIGhpZGRlbkZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvakRpdik7XG5cbiAgICAvLyBwcmlvcml0eSBkcm9wIGRvd25cbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZWN0UHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdF9kaXZcIik7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdFByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5T3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcmlvcml0eVwiO1xuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIGNvbnN0IGFsbFByaW9yaXRpZXMgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdXG4gICAgYWxsUHJpb3JpdGllcy5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwO1xuICAgICAgICBpZiAocCA9PT0gcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IFwidHJ1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgICBoaWRkZW5Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5RGl2KTtcblxuICAgIC8vIGR1ZSBkYXRlIC0gVE9ET1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVfZGl2XCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJEdWUgZGF0ZVwiXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGhpZGRlbkZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICAvLyB0ZXh0YXJlYVxuICAgIGNvbnN0IHRleHRhcmVhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXh0YXJlYURpdi5jbGFzc0xpc3QuYWRkKFwidGV4dGFyZWFfZGl2XCIpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRleHRhcmVhLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkFkZCBkZXNjcmlwdGlvbiDigKZcIjtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgIHRleHRhcmVhRGl2LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICBoaWRkZW5Gb3JtLmFwcGVuZENoaWxkKHRleHRhcmVhRGl2KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuRm9ybSk7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJidG5fZGl2XCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICBjb25zdCB1cGRhdGVkUHJvamVjdE5hbWUgPSBmb3JtLmVsZW1lbnRzWydwcm9qZWN0J10udmFsdWUgIT09IFwiXCIgPyBmb3JtLmVsZW1lbnRzWydwcm9qZWN0J10udmFsdWUgOiBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1sncHJpb3JpdHknXS52YWx1ZSAhPT0gXCJcIiA/IGZvcm0uZWxlbWVudHNbJ3ByaW9yaXR5J10udmFsdWUgOiBcIlwiO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHNbJ2Rlc2NyaXB0aW9uJ10udmFsdWUgIT09IFwiXCIgPyBmb3JtLmVsZW1lbnRzWydkZXNjcmlwdGlvbiddLnZhbHVlIDogXCJcIjtcblxuICAgICAgICBpZiAocHJvamVjdE5hbWUgIT09IHVwZGF0ZWRQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBjb21wbGV0ZVxuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG9JdGVtKHRpdGxlLCBcIlwiLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHVwZGF0ZWRQcm9qZWN0TmFtZSwgY29tcGxldGUpOyBcbiAgICAgICAgdXBkYXRlVG9kb0l0ZW0odXBkYXRlZFByb2plY3ROYW1lLCB0b2RvLCBpbmRleClcbiAgICAgICAgXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICBwcm9qZWN0QnRuLmNsaWNrKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG4vLyB0byBkYXJrZW4gY29udGVudFxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuICAgIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSgpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgcG9wdXAucmVtb3ZlKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRIaWRkZW5GaWVsZHMoKSB7XG4gICAgY29uc3QgaGlkZGVuRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpO1xuICAgIGhpZGRlbkZvcm0uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVGaWVsZHMoKSB7XG4gICAgY29uc3QgaGlkZGVuRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpO1xuICAgIGhpZGRlbkZvcm0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBBZGRfSWNvbiBmcm9tICcuL2ltYWdlcy9wcm9qZWN0X2FkZC5zdmcnO1xuaW1wb3J0IHtnZXRBbGxQcm9qZWN0cywgZ2V0T3JDcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHtsb2FkUHJvamVjdENvbnRlbnR9IGZyb20gJy4vbWVudUNvbnRlbnQuanMnO1xuaW1wb3J0IHtvcGVuUHJvamVjdEZvcm19IGZyb20gJy4vZm9ybS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IFwiVHVlIEZlYiAyMiAyMDIyXCI7IC8vIFRPRE8gLSBjaGFuZ2UgdG8gdXNlIHRvZGF5J3MgZGF0ZVxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IFwiVE9ETyBMSVNUXCI7XG5cbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIHJldHVybiBoZWFkZXJEaXY7XG5cbn1cblxuLy8gYm9keSBoYXMgbWVudSBhbmQgbWVudSBjb250ZW50XG5leHBvcnQgZnVuY3Rpb24gbG9hZEJvZHkoKSB7XG5cbiAgICBjb25zdCBib2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2R5RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50X2JvZHlcIik7XG4gICAgY29uc3QgbWVudURpdiA9IGxvYWRNZW51KCk7XG4gICAgY29uc3QgbWVudUNvbnRlbnREaXYgPSBsb2FkTWVudUNvbnRlbnQoKTtcbiAgICBib2R5RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIGJvZHlEaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnREaXYpO1xuXG4gICAgcmV0dXJuIGJvZHlEaXY7ICBcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFwiO1xuXG4gICAgLy8gYWRkIGljb25cbiAgICBjb25zdCBwcm9qZWN0QWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3RBZGRJY29uLnNyYyA9IEFkZF9JY29uO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHByb2plY3RBZGRJY29uKTtcblxuICAgIHByb2plY3RBZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIG9wZW5Qcm9qZWN0Rm9ybSgpO1xuICAgIH0pXG5cblxuICAgIGNvbnN0IHByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TGlzdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9saXN0XCIpO1xuICAgIC8vIGRlZmF1bHQgcHJvamVjdCBhbHdheXMgc2hvd3MgdXBcbiAgICBjb25zdCBkZWZhdWx0UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVmYXVsdFByb2pCdG4uY2xhc3NMaXN0LmFkZChcInByb2pfYnRuXCIpO1xuICAgIGRlZmF1bHRQcm9qQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0XCIpO1xuICAgIGRlZmF1bHRQcm9qQnRuLnRleHRDb250ZW50ID0gXCJEZWZhdWx0IFByb2plY3RcIjtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChkZWZhdWx0UHJvakJ0bik7XG5cbiAgICBkZWZhdWx0UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvaiA9IGdldE9yQ3JlYXRlUHJvamVjdChcImRlZmF1bHRcIik7XG4gICAgICAgIHJlc2V0TWVudVN0YXRlKCk7XG4gICAgICAgIGRlZmF1bHRQcm9qQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRDb250ZW50KGRlZmF1bHRQcm9qLCBkZWZhdWx0UHJvakJ0bik7XG4gICAgfSlcblxuICAgIC8vbG9hZCBhbGwgcHJvamVjdCBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0QWxsUHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5maWx0ZXIocCA9PiBwLnZhbC5uYW1lICE9PSBcImRlZmF1bHRcIikuZm9yRWFjaChwID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2pfYnRuXCIpO1xuICAgICAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gcC52YWwubmFtZTtcbiAgICAgICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG5cbiAgICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gZW5zdXJlIHRvIGdldCBuZXcgY29udGVudCBmcm9tIHByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IHByb2ogPSBnZXRQcm9qZWN0KHAudmFsLm5hbWUpO1xuICAgICAgICAgICAgcmVzZXRNZW51U3RhdGUoKTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGxvYWRDb250ZW50KHByb2osIHByb2plY3RCdG4pO1xuICAgICAgICB9KVxuICAgIH0pICAgXG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RGl2KTtcblxuICAgIHJldHVybiBtZW51RGl2O1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRDb250ZW50KHByb2plY3QsIHByb2plY3RCdG4pIHtcbiAgICBjbGVhck1lbnVDb250ZW50KCk7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBsb2FkUHJvamVjdENvbnRlbnQocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfY29udGVudFwiKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfY29udGVudCAuY29udGVudFwiKTtcbiAgICBpZiAobWVudUNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgbWVudUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldE1lbnVTdGF0ZSgpIHtcbiAgICBjb25zdCBhY3RpdmVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qX2J0bi5hY3RpdmVcIik7XG4gICAgaWYgKGFjdGl2ZU1lbnUgIT09IG51bGwpIHtcbiAgICAgICAgYWN0aXZlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudV9jb250ZW50XCIpO1xuICAgIHJldHVybiBtZW51Q29udGVudDtcbn1cbiIsImltcG9ydCBBRERfVE9ET19JQ09OIGZyb20gJy4vaW1hZ2VzL2FkZF90b2RvLnN2Zyc7XG5pbXBvcnQge29wZW5BZGRUb2RvRm9ybSwgb3BlbkVkaXRGb3JtfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHttYXJrQ29tcGxldGV9IGZyb20gJy4vdG9kb0l0ZW0uanMnXG5pbXBvcnQge3VwZGF0ZVRvZG9JdGVtLCBkZWxldGVUb2RvSXRlbX0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9JdGVtcztcbiAgICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gJ1N0YXJ0IGJ5IGNyZWF0aW5nIGEgVE9ETy4nO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9BZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRvZG9BZGRJY29uLnNyYyA9IEFERF9UT0RPX0lDT047XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0FkZEljb24pO1xuXG4gICAgICAgIHRvZG9BZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBvcGVuQWRkVG9kb0Zvcm0ocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gbG9hZFRvZG9zKHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9Db250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb2Rvcyhwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRpbmdEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IHRvZG9BZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdG9kb0FkZEljb24uc3JjID0gQUREX1RPRE9fSUNPTjtcbiAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKHRvZG9BZGRJY29uKTtcblxuICAgIHRvZG9BZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKTtcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkaW5nVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZ1RleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgaGVhZGluZ1RleHREaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmdUZXh0RGl2KTtcbiAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcblxuICAgIC8vIHRvZG9zIERpdlxuICAgIGNvbnN0IHRvZG9zRGl2ID0gbG9hZFRvZG9zRGl2KHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRvZG9zRGl2KTtcblxuICAgIHJldHVybiB0b2RvQ29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9zRGl2KHByb2plY3QsIHByb2plY3RCdG4pIHtcbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb3NEaXYuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xuXG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9JdGVtcztcblxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxlZnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG5cbiAgICAgICAgbGVmdC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCJDT01QTEVURVwiO1xuXG4gICAgICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBtYXJrQ29tcGxldGUodG9kbyk7XG4gICAgICAgICAgICB1cGRhdGVUb2RvSXRlbShwcm9qZWN0Lm5hbWUsIHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChsZWZ0KTtcblxuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG5cbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgb3BlbkVkaXRGb3JtKHByb2plY3QsIHRvZG8sIGluZGV4LCBwcm9qZWN0QnRuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuXG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ocHJvamVjdC5uYW1lLCBpbmRleCk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGRlbEJ0bik7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgICAgICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGxvYWRDb21wbGV0ZWRUb2Rvcyh0b2RvcywgcHJvamVjdC5uYW1lLCBwcm9qZWN0QnRuKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG4gICAgcmV0dXJuIHRvZG9zRGl2O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29tcGxldGVkVG9kb3ModG9kb3MsIHByb2plY3ROYW1lLCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wbGV0ZWREaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZF9oZWFkaW5nXCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJDT01QTEVURURcIjtcbiAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCF0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcGxldGVkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbXBsZXRlZFRvZG8uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZF90b2RvXCIpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBjb21wbGV0ZWRUb2RvLmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICBjb21wbGV0ZWRUb2RvLmFwcGVuZENoaWxkKGRlbEJ0bik7XG5cbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkVG9kbyk7XG4gICAgfSlcblxuICAgIHJldHVybiBjb21wbGV0ZWREaXY7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RCdXR0b24oKSB7XG4gICAgXG59XG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9kb0l0ZW1zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0gdG9kb0l0ZW1zO1xuICAgIH0gXG59XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIFtdKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBzdG9yYWdlLnNhdmVQcm9qZWN0KHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0T3JDcmVhdGVQcm9qZWN0KG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0UHJvamVjdEJ5TmFtZShuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pIHtcbiAgICBzdG9yYWdlLnNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIHRvZG9JdGVtLCBpbmRleCkge1xuICAgIHN0b3JhZ2UudXBkYXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIHRvZG9JdGVtLCBpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpIHtcbiAgICBzdG9yYWdlLmRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCk7XG59IiwiY29uc3QgUFJPSkVDVF9QUkVGSVggPSBcInByb2plY3RfXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgbmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocHJvamVjdCkpXG4gICAgICAgIHJldHVybiBwcm9qZWN0ID09PSBudWxsID8ge30gOiBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldE9yQ3JlYXRlUHJvamVjdChwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBwcm9qTmFtZSk7XG4gICAgICAgIGlmIChwcm9qZWN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0KHtuYW1lOiBwcm9qTmFtZSwgdG9kb0l0ZW1zOiBbXX0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgcHJvak5hbWUpKTtcbiAgICB9XG5cbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgLy8gbGV0IGl0ZW1LZXk7XG4gICAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgLSB7a2V5OiBwcm9qZWN0TmFtZSBTdHJpbmcsIHZhbDogUHJvamVjdCBPYmplY3R9XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaXRlbUtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoaXRlbUtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IC9wcm9qZWN0Xy4rL2k7XG4gICAgICAgICAgICAgICAgaWYoaXRlbUtleS5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtrZXk6IGl0ZW1LZXksIHZhbDogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvSXRlbSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3QocHJvamVjdClcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgdG9kb0l0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0LnRvZG9JdGVtc1tpbmRleF0gPSB0b2RvSXRlbTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdChwcm9qZWN0KVxuICAgIH1cblxuICAgIGRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdChwcm9qZWN0KVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgLy8gdG9nZ2xlQ29tcHBsZXRlU3RhdHVzKCkge1xuICAgIC8vICAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gICAgLy8gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0NvbXBsZXRlKHRvZG8pIHtcbiAgICB0b2RvLmNvbXBsZXRlID0gIXRvZG8uY29tcGxldGU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHtsb2FkSGVhZGVyLCBsb2FkQm9keX0gZnJvbSAnLi9sb2FkRnJvbnRQYWdlLmpzJ1xuXG5jb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5wYWdlQm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3QgaGVhZGVyRGl2ID0gbG9hZEhlYWRlcigpO1xuY29uc3QgYm9keURpdiA9IGxvYWRCb2R5KCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5jb250ZW50LmFwcGVuZENoaWxkKGJvZHlEaXYpO1xuXG5jb25zdCBkZWZhdWx0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kZWZhdWx0XCIpO1xuZGVmYXVsdEJ0bi5jbGljaygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=