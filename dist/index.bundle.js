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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50vw;\n    height: auto;\n    position: fixed;\n    left: 25vw;\n    top: 25vh;\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-top: 50px;\n    margin-bottom: 40px;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div,\n.select_div,\n.textarea_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input_div input,\n.select_div select,\n.textarea_div textarea {\n    width: 60%;\n    /* height: 40px; */\n    font: inherit;\n    color: #707070;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n\n    box-sizing: border-box;\n}\n\n.more_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: 50px; */\n    margin-top: 20px;\n    color: #707070;\n\n    margin-bottom: 20px;\n}\n\n.more_option img {\n    width: 40px;\n}\n\n.select_div {\n    margin-top: 20px;\n}\n\n.select_div select {\n    appearance: none;\n    /* padding-right: 15px; */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: calc(100% - 3px) center;\n    background-size: 35px;\n}\n\n.textarea_div textarea {\n    height: 100px;\n    margin-top: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50vw;\n    height: auto;\n    position: fixed;\n    left: 25vw;\n    top: 25vh;\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-top: 50px;\n    margin-bottom: 40px;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div,\n.select_div,\n.textarea_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input_div input,\n.select_div select,\n.textarea_div textarea {\n    width: 60%;\n    /* height: 40px; */\n    font: inherit;\n    color: #707070;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n\n    box-sizing: border-box;\n}\n\n.more_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: 50px; */\n    margin-top: 20px;\n    color: #707070;\n\n    margin-bottom: 20px;\n}\n\n.more_option img {\n    width: 40px;\n}\n\n.select_div {\n    margin-top: 20px;\n}\n\n.select_div select {\n    appearance: none;\n    /* padding-right: 15px; */\n    background-image: url('../images/expand_more.svg');\n    background-repeat: no-repeat;\n    background-position: calc(100% - 3px) center;\n    background-size: 35px;\n}\n\n.textarea_div textarea {\n    height: 100px;\n    margin-top: 20px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "openAddTodoForm": () => (/* binding */ openAddTodoForm)
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

    const moreOptionDiv = document.createElement("div");
    moreOptionDiv.classList.add("more_option");
    moreOptionDiv.textContent = "SHOW MORE OPTIONS";
    const expandMoreIcon = new Image();
    expandMoreIcon.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_1__;
    moreOptionDiv.appendChild(expandMoreIcon);

    form.appendChild(moreOptionDiv);

    // more fields - hidden by default
    const hiddenForm = document.createElement("div");
    hiddenForm.classList.add("hidden");
    // project drop down
    const selectProjDiv = document.createElement("div");
    selectProjDiv.classList.add("select_div");
    const selectProject = document.createElement("select");

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
    form.appendChild(selectProjDiv);

    // priority drop down
    const selectPriorityDiv = document.createElement("div");
    selectPriorityDiv.classList.add("select_div");
    const selectPriority = document.createElement("select");

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
    form.appendChild(selectPriorityDiv);

    // due date
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDate_div");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "dueDate";
    dateInput.placeholder = "Due date"
    dueDateDiv.appendChild(dateInput);
    form.appendChild(dueDateDiv);

    // textarea
    const textareaDiv = document.createElement("div");
    textareaDiv.classList.add("textarea_div");
    const textarea = document.createElement("textarea");
    textarea.placeholder = "Add description …";
    textareaDiv.appendChild(textarea);
    form.appendChild(textareaDiv);

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "SAVE";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const title = form.elements['title'].value;
        // title, dueDate, priority, description, project, complete
        const todo = new _todoItem_js__WEBPACK_IMPORTED_MODULE_4__.TodoItem(title, "", "", "", project.name, false); 
        (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.saveTodoItemInProject)(project.name, todo)
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDckJ1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDZEQUFVO0FBQzVCLGdCQUFnQiwyREFBUTtBQUN4QjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbG9hZEZyb250UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2V4cGFuZF9tb3JlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdLb2hpbm9vciBUZWx1Z3UnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUge1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzMpO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzMpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50X2JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE5ODlCO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDE3O1xcbn1cXG5cXG4ubWVudV9jb250ZW50ID4gLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRleHQge1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIGltZyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgXFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvLFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF90b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAuY29tcGxldGVkIC5jb21wbGV0ZWRfdG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA0MDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uY29tcGxldGVkX3RvZG8gc3BhbiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogIzcwNzA3MENDO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyAubGVmdCxcXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyAucmlnaHQge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmJ1dHRvbiB7XFxuICAgYm9yZGVyOiBub25lOyBcXG4gICBoZWlnaHQ6IDI1cHg7XFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgZm9udC1zaXplOiAxM3B4O1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uLmNvbXBsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBQTAyNztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24uZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDk2MEU7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG5idXR0b24uZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzMDAwMDtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmRpdmlkZXIge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAuY29tcGxldGVkIC5jb21wbGV0ZWRfaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMTBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdCBpbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qX2J0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTY0O1xcblxcbiAgICBib3JkZXI6IC41cHggc29saWQgIzJCNEY2MTtcXG59XFxuXFxuLnByb2pfYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNzksIDk3LCAwLjI2Nyk7XFxufVxcblxcbi5wcm9qX2J0bi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuNjQ0KTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAyNXZ3O1xcbiAgICB0b3A6IDI1dmg7XFxuICAgIHotaW5kZXg6IDEwMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5vcGVuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1cCA+IGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZF9wcm9qZWN0X2Zvcm0sXFxuLmFkZF90b2RvX2Zvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ0bl9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcblxcbi5idG5fZGl2IGJ1dHRvbiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRfZGl2LFxcbi5zZWxlY3RfZGl2LFxcbi50ZXh0YXJlYV9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dF9kaXYgaW5wdXQsXFxuLnNlbGVjdF9kaXYgc2VsZWN0LFxcbi50ZXh0YXJlYV9kaXYgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBib3JkZXI6IC45cHggc29saWQgIzcwNzA3MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tb3JlX29wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBnYXA6IDUwcHg7ICovXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubW9yZV9vcHRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5zZWxlY3RfZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNlbGVjdF9kaXYgc2VsZWN0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogcGFkZGluZy1yaWdodDogMTVweDsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gM3B4KSBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzVweDtcXG59XFxuXFxuLnRleHRhcmVhX2RpdiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsMENBQTBD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QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZOztJQUVaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYzs7SUFFZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tvaGlub29yIFRlbHVndScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnRfYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTk4OUI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwMTc7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgPiAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudGV4dCB7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8sXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX3RvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF90b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDQwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcblxcbi5jb21wbGV0ZWRfdG9kbyBzcGFuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAjNzA3MDcwQ0M7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5sZWZ0LFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5yaWdodCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuYnV0dG9uIHtcXG4gICBib3JkZXI6IG5vbmU7IFxcbiAgIGhlaWdodDogMjVweDtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udDogaW5oZXJpdDtcXG4gICBmb250LXNpemU6IDEzcHg7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMDI3O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0OTYwRTtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTMwMDAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuZGl2aWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF9oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAxMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2pfYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxNjQ7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMkI0RjYxO1xcbn1cXG5cXG4ucHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuMjY3KTtcXG59XFxuXFxuLnByb2pfYnRuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDc5LCA5NywgMC42NDQpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1dnc7XFxuICAgIHRvcDogMjV2aDtcXG4gICAgei1pbmRleDogMTAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwID4gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7ICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm1fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYWRkX3Byb2plY3RfZm9ybSxcXG4uYWRkX3RvZG9fZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnRuX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuXFxuLmJ0bl9kaXYgYnV0dG9uIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dF9kaXYsXFxuLnNlbGVjdF9kaXYsXFxuLnRleHRhcmVhX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0X2RpdiBpbnB1dCxcXG4uc2VsZWN0X2RpdiBzZWxlY3QsXFxuLnRleHRhcmVhX2RpdiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuICAgIGJvcmRlcjogLjlweCBzb2xpZCAjNzA3MDcwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1vcmVfb3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGdhcDogNTBweDsgKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tb3JlX29wdGlvbiBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnNlbGVjdF9kaXYge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uc2VsZWN0X2RpdiBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxNXB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9leHBhbmRfbW9yZS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gM3B4KSBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzVweDtcXG59XFxuXFxuLnRleHRhcmVhX2RpdiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQ2xvc2VfSWNvbiBmcm9tICcuL2ltYWdlcy9jbG9zZV9mb3JtLnN2Zyc7XG5pbXBvcnQgRXhwYW5kTW9yZV9JY29uIGZyb20gJy4vaW1hZ2VzL2V4cGFuZF9tb3JlLnN2Zyc7XG5pbXBvcnQgRXhwYW5kTGVzc19JY29uIGZyb20gJy4vaW1hZ2VzL2V4cGFuZF9sZXNzLnN2Zyc7XG5pbXBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIHNhdmVUb2RvSXRlbUluUHJvamVjdCwgZ2V0QWxsUHJvamVjdHN9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQge1RvZG9JdGVtfSBmcm9tICcuL3RvZG9JdGVtLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwb3B1cCA9IGNyZWF0ZVBvcHVwU3RydWN0dXJlKCk7XG4gICAgY29uc3QgZm9ybUNvbnRlbnQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fY29udGVudFwiKTtcbiAgICBmb3JtQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKTtcblxuICAgIGFwcGVuZFBvcHVwKHBvcHVwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgcG9wdXAgPSBjcmVhdGVQb3B1cFN0cnVjdHVyZSgpO1xuICAgIGNvbnN0IGZvcm1Db250ZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtX2NvbnRlbnRcIik7XG4gICAgZm9ybUNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm0ocHJvamVjdCwgcHJvamVjdEJ0bikpO1xuXG4gICAgYXBwZW5kUG9wdXAocG9wdXApO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRQb3B1cChwb3B1cCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAvLyBhZGQgb3ZlcmxheVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG9wZW5PdmVybGF5KCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3B1cFN0cnVjdHVyZSgpIHtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwXCIpO1xuXG4gICAgY29uc3QgZm9ybUNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZvcm1DbG9zZUljb24uc3JjID0gQ2xvc2VfSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fY29udGVudFwiKTtcblxuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1DbG9zZUljb24pO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgZm9ybUNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtKCkge1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkX3Byb2plY3RcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZF9wcm9qZWN0X2Zvcm1cIik7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRfZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBuYW1l4oCmXCJcbiAgICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBidG5EaXYuY2xhc3NMaXN0LmFkZChcImJ0bl9kaXZcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtLmVsZW1lbnRzWydwcm9qZWN0TmFtZSddLnZhbHVlO1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gdG9kb0Zvcm0ocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcImFkZF90b2RvXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRfdG9kb19mb3JtXCIpO1xuICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZChcImlucHV0X2RpdlwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyB0YXNrIC4uLlwiXG4gICAgaW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERpdik7XG5cbiAgICBjb25zdCBtb3JlT3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3JlT3B0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJtb3JlX29wdGlvblwiKTtcbiAgICBtb3JlT3B0aW9uRGl2LnRleHRDb250ZW50ID0gXCJTSE9XIE1PUkUgT1BUSU9OU1wiO1xuICAgIGNvbnN0IGV4cGFuZE1vcmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZXhwYW5kTW9yZUljb24uc3JjID0gRXhwYW5kTW9yZV9JY29uO1xuICAgIG1vcmVPcHRpb25EaXYuYXBwZW5kQ2hpbGQoZXhwYW5kTW9yZUljb24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChtb3JlT3B0aW9uRGl2KTtcblxuICAgIC8vIG1vcmUgZmllbGRzIC0gaGlkZGVuIGJ5IGRlZmF1bHRcbiAgICBjb25zdCBoaWRkZW5Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoaWRkZW5Gb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgLy8gcHJvamVjdCBkcm9wIGRvd25cbiAgICBjb25zdCBzZWxlY3RQcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RQcm9qRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RfZGl2XCIpO1xuICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcm9qZWN0XCI7XG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHAudmFsLm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHAudmFsLm5hbWU7XG4gICAgICAgIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KVxuXG4gICAgc2VsZWN0UHJvakRpdi5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByb2pEaXYpO1xuXG4gICAgLy8gcHJpb3JpdHkgZHJvcCBkb3duXG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RfZGl2XCIpO1xuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgcHJpb3JpdHlPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByaW9yaXR5XCI7XG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgY29uc3QgYWxsUHJpb3JpdGllcyA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl1cbiAgICBhbGxQcmlvcml0aWVzLmZvckVhY2goKHAsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHA7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHA7XG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIHNlbGVjdFByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5RGl2KTtcblxuICAgIC8vIGR1ZSBkYXRlXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZV9kaXZcIik7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkYXRlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkR1ZSBkYXRlXCJcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIC8vIHRleHRhcmVhXG4gICAgY29uc3QgdGV4dGFyZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRleHRhcmVhRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0YXJlYV9kaXZcIik7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkFkZCBkZXNjcmlwdGlvbiDigKZcIjtcbiAgICB0ZXh0YXJlYURpdi5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0YXJlYURpdik7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJidG5fZGl2XCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJTQVZFXCI7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbJ3RpdGxlJ10udmFsdWU7XG4gICAgICAgIC8vIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGNvbXBsZXRlXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb0l0ZW0odGl0bGUsIFwiXCIsIFwiXCIsIFwiXCIsIHByb2plY3QubmFtZSwgZmFsc2UpOyBcbiAgICAgICAgc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0KHByb2plY3QubmFtZSwgdG9kbylcbiAgICAgICAgXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICBwcm9qZWN0QnRuLmNsaWNrKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xuXG59XG5cbi8vIHRvIGRhcmtlbiBjb250ZW50XG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIG9wZW5PdmVybGF5KCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVPdmVybGF5KCk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG59IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgQWRkX0ljb24gZnJvbSAnLi9pbWFnZXMvcHJvamVjdF9hZGQuc3ZnJztcbmltcG9ydCB7Z2V0QWxsUHJvamVjdHMsIGdldE9yQ3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7bG9hZFByb2plY3RDb250ZW50fSBmcm9tICcuL21lbnVDb250ZW50LmpzJztcbmltcG9ydCB7b3BlblByb2plY3RGb3JtfSBmcm9tICcuL2Zvcm0uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcblxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBcIlR1ZSBGZWIgMjIgMjAyMlwiOyAvLyBUT0RPIC0gY2hhbmdlIHRvIHVzZSB0b2RheSdzIGRhdGVcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIlRPRE8gTElTVFwiO1xuXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICByZXR1cm4gaGVhZGVyRGl2O1xuXG59XG5cbi8vIGJvZHkgaGFzIG1lbnUgYW5kIG1lbnUgY29udGVudFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCb2R5KCkge1xuXG4gICAgY29uc3QgYm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9keURpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudF9ib2R5XCIpO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBsb2FkTWVudSgpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50RGl2ID0gbG9hZE1lbnVDb250ZW50KCk7XG4gICAgYm9keURpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICBib2R5RGl2LmFwcGVuZENoaWxkKG1lbnVDb250ZW50RGl2KTtcblxuICAgIHJldHVybiBib2R5RGl2OyAgXG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RcIjtcblxuICAgIC8vIGFkZCBpY29uXG4gICAgY29uc3QgcHJvamVjdEFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwcm9qZWN0QWRkSWNvbi5zcmMgPSBBZGRfSWNvbjtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0QWRkSWNvbik7XG5cbiAgICBwcm9qZWN0QWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBvcGVuUHJvamVjdEZvcm0oKTtcbiAgICB9KVxuXG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdExpc3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RfbGlzdFwiKTtcbiAgICAvLyBkZWZhdWx0IHByb2plY3QgYWx3YXlzIHNob3dzIHVwXG4gICAgY29uc3QgZGVmYXVsdFByb2pCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlZmF1bHRQcm9qQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qX2J0blwiKTtcbiAgICBkZWZhdWx0UHJvakJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdFwiKTtcbiAgICBkZWZhdWx0UHJvakJ0bi50ZXh0Q29udGVudCA9IFwiRGVmYXVsdCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2pCdG4pO1xuXG4gICAgZGVmYXVsdFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2ogPSBnZXRPckNyZWF0ZVByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgICAgICByZXNldE1lbnVTdGF0ZSgpO1xuICAgICAgICBkZWZhdWx0UHJvakJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkQ29udGVudChkZWZhdWx0UHJvaiwgZGVmYXVsdFByb2pCdG4pO1xuICAgIH0pXG5cbiAgICAvL2xvYWQgYWxsIHByb2plY3QgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZmlsdGVyKHAgPT4gcC52YWwubmFtZSAhPT0gXCJkZWZhdWx0XCIpLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qX2J0blwiKTtcbiAgICAgICAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IHAudmFsLm5hbWU7XG4gICAgICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuXG4gICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vIGVuc3VyZSB0byBnZXQgbmV3IGNvbnRlbnQgZnJvbSBwcm9qZWN0XG4gICAgICAgICAgICBjb25zdCBwcm9qID0gZ2V0UHJvamVjdChwLnZhbC5uYW1lKTtcbiAgICAgICAgICAgIHJlc2V0TWVudVN0YXRlKCk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBsb2FkQ29udGVudChwcm9qLCBwcm9qZWN0QnRuKTtcbiAgICAgICAgfSlcbiAgICB9KSAgIFxuXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdERpdik7XG5cbiAgICByZXR1cm4gbWVudURpdjtcblxufVxuXG5mdW5jdGlvbiBsb2FkQ29udGVudChwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY2xlYXJNZW51Q29udGVudCgpO1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gbG9hZFByb2plY3RDb250ZW50KHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X2NvbnRlbnRcIik7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBjbGVhck1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X2NvbnRlbnQgLmNvbnRlbnRcIik7XG4gICAgaWYgKG1lbnVDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIG1lbnVDb250ZW50LnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRNZW51U3RhdGUoKSB7XG4gICAgY29uc3QgYWN0aXZlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJval9idG4uYWN0aXZlXCIpO1xuICAgIGlmIChhY3RpdmVNZW51ICE9PSBudWxsKSB7XG4gICAgICAgIGFjdGl2ZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVfY29udGVudFwiKTtcbiAgICByZXR1cm4gbWVudUNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgQUREX1RPRE9fSUNPTiBmcm9tICcuL2ltYWdlcy9hZGRfdG9kby5zdmcnO1xuaW1wb3J0IHtvcGVuQWRkVG9kb0Zvcm19IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQge21hcmtDb21wbGV0ZX0gZnJvbSAnLi90b2RvSXRlbS5qcydcbmltcG9ydCB7dXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RDb250ZW50KHByb2plY3QsIHByb2plY3RCdG4pIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb0l0ZW1zO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSAnU3RhcnQgYnkgY3JlYXRpbmcgYSBUT0RPLic7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICAgICAgY29uc3QgdG9kb0FkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdG9kb0FkZEljb24uc3JjID0gQUREX1RPRE9fSUNPTjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQWRkSWNvbik7XG5cbiAgICAgICAgdG9kb0FkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRlbnQgPSBsb2FkVG9kb3MocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9zKHByb2plY3QsIHByb2plY3RCdG4pIHtcbiAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuXG4gICAgY29uc3QgdG9kb0FkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvQWRkSWNvbi5zcmMgPSBBRERfVE9ET19JQ09OO1xuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQodG9kb0FkZEljb24pO1xuXG4gICAgdG9kb0FkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb3BlbkFkZFRvZG9Gb3JtKHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRpbmdUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkaW5nVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICBoZWFkaW5nVGV4dERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZ1RleHREaXYpO1xuICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xuXG4gICAgLy8gdG9kb3MgRGl2XG4gICAgY29uc3QgdG9kb3NEaXYgPSBsb2FkVG9kb3NEaXYocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb3NEaXYpO1xuXG4gICAgcmV0dXJuIHRvZG9Db250ZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkVG9kb3NEaXYocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb0l0ZW1zO1xuXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcblxuICAgICAgICBsZWZ0LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIkNPTVBMRVRFXCI7XG5cbiAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG1hcmtDb21wbGV0ZSh0b2RvKTtcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9JdGVtKHByb2plY3QubmFtZSwgdG9kbywgaW5kZXgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcblxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGxlZnQpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmlnaHQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuXG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ocHJvamVjdC5uYW1lLCBpbmRleCk7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGRlbEJ0bik7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgICAgICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGxvYWRDb21wbGV0ZWRUb2Rvcyh0b2RvcywgcHJvamVjdC5uYW1lLCBwcm9qZWN0QnRuKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG4gICAgcmV0dXJuIHRvZG9zRGl2O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29tcGxldGVkVG9kb3ModG9kb3MsIHByb2plY3ROYW1lLCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wbGV0ZWREaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZF9oZWFkaW5nXCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJDT01QTEVURURcIjtcbiAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCF0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcGxldGVkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbXBsZXRlZFRvZG8uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZF90b2RvXCIpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBjb21wbGV0ZWRUb2RvLmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICBjb21wbGV0ZWRUb2RvLmFwcGVuZENoaWxkKGRlbEJ0bik7XG5cbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkVG9kbyk7XG4gICAgfSlcblxuICAgIHJldHVybiBjb21wbGV0ZWREaXY7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RCdXR0b24oKSB7XG4gICAgXG59XG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9kb0l0ZW1zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0gdG9kb0l0ZW1zO1xuICAgIH0gXG59XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIFtdKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBzdG9yYWdlLnNhdmVQcm9qZWN0KHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yQ3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0T3JDcmVhdGVQcm9qZWN0KG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0UHJvamVjdEJ5TmFtZShuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pIHtcbiAgICBzdG9yYWdlLnNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIHRvZG9JdGVtLCBpbmRleCkge1xuICAgIHN0b3JhZ2UudXBkYXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIHRvZG9JdGVtLCBpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpIHtcbiAgICBzdG9yYWdlLmRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCk7XG59IiwiY29uc3QgUFJPSkVDVF9QUkVGSVggPSBcInByb2plY3RfXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgbmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocHJvamVjdCkpXG4gICAgICAgIHJldHVybiBwcm9qZWN0ID09PSBudWxsID8ge30gOiBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldE9yQ3JlYXRlUHJvamVjdChwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBwcm9qTmFtZSk7XG4gICAgICAgIGlmIChwcm9qZWN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0KHtuYW1lOiBwcm9qTmFtZSwgdG9kb0l0ZW1zOiBbXX0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgcHJvak5hbWUpKTtcbiAgICB9XG5cbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgLy8gbGV0IGl0ZW1LZXk7XG4gICAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgLSB7a2V5OiBwcm9qZWN0TmFtZSBTdHJpbmcsIHZhbDogUHJvamVjdCBPYmplY3R9XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaXRlbUtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoaXRlbUtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IC9wcm9qZWN0Xy4rL2k7XG4gICAgICAgICAgICAgICAgaWYoaXRlbUtleS5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtrZXk6IGl0ZW1LZXksIHZhbDogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgc2F2ZVRvZG9JdGVtSW5Qcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvSXRlbSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3QocHJvamVjdClcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgdG9kb0l0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0LnRvZG9JdGVtc1tpbmRleF0gPSB0b2RvSXRlbTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdChwcm9qZWN0KVxuICAgIH1cblxuICAgIGRlbGV0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdChwcm9qZWN0KVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgLy8gdG9nZ2xlQ29tcHBsZXRlU3RhdHVzKCkge1xuICAgIC8vICAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gICAgLy8gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0NvbXBsZXRlKHRvZG8pIHtcbiAgICB0b2RvLmNvbXBsZXRlID0gIXRvZG8uY29tcGxldGU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHtsb2FkSGVhZGVyLCBsb2FkQm9keX0gZnJvbSAnLi9sb2FkRnJvbnRQYWdlLmpzJ1xuXG5jb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5wYWdlQm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3QgaGVhZGVyRGl2ID0gbG9hZEhlYWRlcigpO1xuY29uc3QgYm9keURpdiA9IGxvYWRCb2R5KCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5jb250ZW50LmFwcGVuZENoaWxkKGJvZHlEaXYpO1xuXG5jb25zdCBkZWZhdWx0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kZWZhdWx0XCIpO1xuZGVmYXVsdEJ0bi5jbGljaygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=