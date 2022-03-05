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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50vw;\n    height: 50vh;\n    position: fixed;\n    left: 25vw;\n    top: 25vh;\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input_div input {\n    width: 60%;\n    height: 40px;\n}\n\ninput[type=text] {\n    font: inherit;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n}\n\n.more_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 70px;\n    margin-top: 20px;\n    color: #707070;\n}\n\n.more_option img {\n    width: 40px;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 80px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo,\n.menu_content .content .todos .completed .completed_todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n}\n\n.menu_content .content .todos .completed .completed_todo {\n    background-color: #70707040;\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.completed_todo span {\n    text-decoration: line-through;\n    color: #707070CC;\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-between;\n    width: 30%;\n    color: #707070;\n\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n.menu_content .content .todos .completed .completed_heading {\n    text-align: left;\n    margin: 10px 50px;\n    font-size: 20px;\n    color: #707070;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.267);\n}\n\n.proj_btn.active {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50vw;\n    height: 50vh;\n    position: fixed;\n    left: 25vw;\n    top: 25vh;\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup > img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form,\n.add_todo_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input_div input {\n    width: 60%;\n    height: 40px;\n}\n\ninput[type=text] {\n    font: inherit;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n}\n\n.more_option {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 70px;\n    margin-top: 20px;\n    color: #707070;\n}\n\n.more_option img {\n    width: 40px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxV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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZnVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsNkRBQVU7QUFDNUIsZ0JBQWdCLDJEQUFRO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbG9hZEZyb250UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tvaGlub29yIFRlbHVndScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnRfYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTk4OUI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwMTc7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgPiAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudGV4dCB7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC5oZWFkaW5nIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8sXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX3RvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF90b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDQwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcblxcbi5jb21wbGV0ZWRfdG9kbyBzcGFuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAjNzA3MDcwQ0M7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5sZWZ0LFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5yaWdodCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuXFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuYnV0dG9uIHtcXG4gICBib3JkZXI6IG5vbmU7IFxcbiAgIGhlaWdodDogMjVweDtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udDogaW5oZXJpdDtcXG4gICBmb250LXNpemU6IDEzcHg7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMDI3O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0OTYwRTtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTMwMDAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuZGl2aWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC5jb21wbGV0ZWQgLmNvbXBsZXRlZF9oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAxMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2pfYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxNjQ7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMkI0RjYxO1xcbn1cXG5cXG4ucHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuMjY3KTtcXG59XFxuXFxuLnByb2pfYnRuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDc5LCA5NywgMC42NDQpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1dnc7XFxuICAgIHRvcDogMjV2aDtcXG4gICAgei1pbmRleDogMTAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwID4gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7ICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm1fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYWRkX3Byb2plY3RfZm9ybSxcXG4uYWRkX3RvZG9fZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnRuX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuXFxuLmJ0bl9kaXYgYnV0dG9uIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dF9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dF9kaXYgaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBib3JkZXI6IC45cHggc29saWQgIzcwNzA3MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tb3JlX29wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4ubW9yZV9vcHRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZOztJQUVaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1C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QUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS29oaW5vb3IgVGVsdWd1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudF9ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxOTg5QjtcXG59XFxuXFxuLm1lbnVfY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzAxNztcXG59XFxuXFxuLm1lbnVfY29udGVudCA+IC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50ZXh0IHtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgLnRleHQge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIFxcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyxcXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAuY29tcGxldGVkIC5jb21wbGV0ZWRfdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX3RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwNDA7XFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuXFxuLmNvbXBsZXRlZF90b2RvIHNwYW4ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6ICM3MDcwNzBDQztcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8gLmxlZnQsXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLnRvZG8gLnJpZ2h0IHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5idXR0b24ge1xcbiAgIGJvcmRlcjogbm9uZTsgXFxuICAgaGVpZ2h0OiAyNXB4O1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICBmb250OiBpbmhlcml0O1xcbiAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbi5jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQUEwMjc7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuYnV0dG9uLmVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ5NjBFO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuYnV0dG9uLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMzAwMDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5kaXZpZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAudG9kb3MgLmNvbXBsZXRlZCAuY29tcGxldGVkX2hlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDEwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNDUwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3QgaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJval9idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE2NDtcXG5cXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkICMyQjRGNjE7XFxufVxcblxcbi5wcm9qX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDc5LCA5NywgMC4yNjcpO1xcbn1cXG5cXG4ucHJval9idG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNzksIDk3LCAwLjY0NCk7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMjV2dztcXG4gICAgdG9wOiAyNXZoO1xcbiAgICB6LWluZGV4OiAxMDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3BlbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAgPiBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybV9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hZGRfcHJvamVjdF9mb3JtLFxcbi5hZGRfdG9kb19mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idG5fZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4uYnRuX2RpdiBidXR0b24ge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0X2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0X2RpdiBpbnB1dCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogLjlweCBzb2xpZCAjNzA3MDcwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1vcmVfb3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5tb3JlX29wdGlvbiBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQ2xvc2VfSWNvbiBmcm9tICcuL2ltYWdlcy9jbG9zZV9mb3JtLnN2Zyc7XG5pbXBvcnQgRXhwYW5kTW9yZV9JY29uIGZyb20gJy4vaW1hZ2VzL2V4cGFuZF9tb3JlLnN2Zyc7XG5pbXBvcnQgRXhwYW5kTGVzc19JY29uIGZyb20gJy4vaW1hZ2VzL2V4cGFuZF9sZXNzLnN2Zyc7XG5pbXBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIHNhdmVUb2RvSXRlbUluUHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7VG9kb0l0ZW19IGZyb20gJy4vdG9kb0l0ZW0uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBTdHJ1Y3R1cmUoKTtcbiAgICBjb25zdCBmb3JtQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9jb250ZW50XCIpO1xuICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xuXG4gICAgYXBwZW5kUG9wdXAocG9wdXApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkFkZFRvZG9Gb3JtKHByb2plY3QsIHByb2plY3RCdG4pIHtcbiAgICBjb25zdCBwb3B1cCA9IGNyZWF0ZVBvcHVwU3RydWN0dXJlKCk7XG4gICAgY29uc3QgZm9ybUNvbnRlbnQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fY29udGVudFwiKTtcbiAgICBmb3JtQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKSk7XG5cbiAgICBhcHBlbmRQb3B1cChwb3B1cCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBvcHVwKHBvcHVwKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgIC8vIGFkZCBvdmVybGF5XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3Blbk92ZXJsYXkoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwU3RydWN0dXJlKCkge1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5cbiAgICBjb25zdCBmb3JtQ2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZm9ybUNsb3NlSWNvbi5zcmMgPSBDbG9zZV9JY29uO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9jb250ZW50XCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNsb3NlSWNvbik7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBmb3JtQ2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGRfcHJvamVjdFwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkX3Byb2plY3RfZm9ybVwiKTtcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dF9kaXZcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWXigKZcIlxuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuX2RpdlwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0uZWxlbWVudHNbJ3Byb2plY3ROYW1lJ10udmFsdWU7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiB0b2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKFwiYWRkX3RvZG9cIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZF90b2RvX2Zvcm1cIik7XG4gICAgYWRkVG9kby5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRfZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IHRhc2sgLi4uXCJcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcblxuICAgIGNvbnN0IG1vcmVPcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vcmVPcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm1vcmVfb3B0aW9uXCIpO1xuICAgIG1vcmVPcHRpb25EaXYudGV4dENvbnRlbnQgPSBcIlNIT1cgTU9SRSBPUFRJT05TXCI7XG4gICAgY29uc3QgZXhwYW5kTW9yZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBleHBhbmRNb3JlSWNvbi5zcmMgPSBFeHBhbmRNb3JlX0ljb247XG4gICAgbW9yZU9wdGlvbkRpdi5hcHBlbmRDaGlsZChleHBhbmRNb3JlSWNvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG1vcmVPcHRpb25EaXYpO1xuXG4gICAgLy8gbW9yZSBmaWVsZHMgLSBoaWRkZW4gYnkgZGVmYXVsdFxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuX2RpdlwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU0FWRVwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWyd0aXRsZSddLnZhbHVlO1xuICAgICAgICAvLyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBjb21wbGV0ZVxuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG9JdGVtKHRpdGxlLCBcIlwiLCBcIlwiLCBcIlwiLCBwcm9qZWN0Lm5hbWUsIGZhbHNlKTsgXG4gICAgICAgIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0Lm5hbWUsIHRvZG8pXG4gICAgICAgIFxuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcblxufVxuXG4vLyB0byBkYXJrZW4gY29udGVudFxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuICAgIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSgpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgcG9wdXAucmVtb3ZlKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xufSIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IEFkZF9JY29uIGZyb20gJy4vaW1hZ2VzL3Byb2plY3RfYWRkLnN2Zyc7XG5pbXBvcnQge2dldEFsbFByb2plY3RzLCBnZXRPckNyZWF0ZVByb2plY3QsIGdldFByb2plY3R9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQge2xvYWRQcm9qZWN0Q29udGVudH0gZnJvbSAnLi9tZW51Q29udGVudC5qcyc7XG5pbXBvcnQge29wZW5Qcm9qZWN0Rm9ybX0gZnJvbSAnLi9mb3JtLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gXCJUdWUgRmViIDIyIDIwMjJcIjsgLy8gVE9ETyAtIGNoYW5nZSB0byB1c2UgdG9kYXkncyBkYXRlXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJUT0RPIExJU1RcIjtcblxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgcmV0dXJuIGhlYWRlckRpdjtcblxufVxuXG4vLyBib2R5IGhhcyBtZW51IGFuZCBtZW51IGNvbnRlbnRcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQm9keSgpIHtcblxuICAgIGNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvZHlEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRfYm9keVwiKTtcbiAgICBjb25zdCBtZW51RGl2ID0gbG9hZE1lbnUoKTtcbiAgICBjb25zdCBtZW51Q29udGVudERpdiA9IGxvYWRNZW51Q29udGVudCgpO1xuICAgIGJvZHlEaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gICAgYm9keURpdi5hcHBlbmRDaGlsZChtZW51Q29udGVudERpdik7XG5cbiAgICByZXR1cm4gYm9keURpdjsgIFxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbiAgICAvLyBhZGQgaWNvblxuICAgIGNvbnN0IHByb2plY3RBZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdEFkZEljb24uc3JjID0gQWRkX0ljb247XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEljb24pO1xuXG4gICAgcHJvamVjdEFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb3BlblByb2plY3RGb3JtKCk7XG4gICAgfSlcblxuXG4gICAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RMaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2xpc3RcIik7XG4gICAgLy8gZGVmYXVsdCBwcm9qZWN0IGFsd2F5cyBzaG93cyB1cFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWZhdWx0UHJvakJ0bi5jbGFzc0xpc3QuYWRkKFwicHJval9idG5cIik7XG4gICAgZGVmYXVsdFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImRlZmF1bHRcIik7XG4gICAgZGVmYXVsdFByb2pCdG4udGV4dENvbnRlbnQgPSBcIkRlZmF1bHQgUHJvamVjdFwiO1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qQnRuKTtcblxuICAgIGRlZmF1bHRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qID0gZ2V0T3JDcmVhdGVQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbiAgICAgICAgcmVzZXRNZW51U3RhdGUoKTtcbiAgICAgICAgZGVmYXVsdFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbG9hZENvbnRlbnQoZGVmYXVsdFByb2osIGRlZmF1bHRQcm9qQnRuKTtcbiAgICB9KVxuXG4gICAgLy9sb2FkIGFsbCBwcm9qZWN0IGZyb20gbG9jYWxTdG9yYWdlXG4gICAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZpbHRlcihwID0+IHAudmFsLm5hbWUgIT09IFwiZGVmYXVsdFwiKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJval9idG5cIik7XG4gICAgICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBwLnZhbC5uYW1lO1xuICAgICAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcblxuICAgICAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgdG8gZ2V0IG5ldyBjb250ZW50IGZyb20gcHJvamVjdFxuICAgICAgICAgICAgY29uc3QgcHJvaiA9IGdldFByb2plY3QocC52YWwubmFtZSk7XG4gICAgICAgICAgICByZXNldE1lbnVTdGF0ZSgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgbG9hZENvbnRlbnQocHJvaiwgcHJvamVjdEJ0bik7XG4gICAgICAgIH0pXG4gICAgfSkgICBcblxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3REaXYpO1xuXG4gICAgcmV0dXJuIG1lbnVEaXY7XG5cbn1cblxuZnVuY3Rpb24gbG9hZENvbnRlbnQocHJvamVjdCwgcHJvamVjdEJ0bikge1xuICAgIGNsZWFyTWVudUNvbnRlbnQoKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0LCBwcm9qZWN0QnRuKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9jb250ZW50XCIpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9jb250ZW50IC5jb250ZW50XCIpO1xuICAgIGlmIChtZW51Q29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBtZW51Q29udGVudC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TWVudVN0YXRlKCkge1xuICAgIGNvbnN0IGFjdGl2ZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pfYnRuLmFjdGl2ZVwiKTtcbiAgICBpZiAoYWN0aXZlTWVudSAhPT0gbnVsbCkge1xuICAgICAgICBhY3RpdmVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51X2NvbnRlbnRcIik7XG4gICAgcmV0dXJuIG1lbnVDb250ZW50O1xufVxuIiwiaW1wb3J0IEFERF9UT0RPX0lDT04gZnJvbSAnLi9pbWFnZXMvYWRkX3RvZG8uc3ZnJztcbmltcG9ydCB7b3BlbkFkZFRvZG9Gb3JtfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHttYXJrQ29tcGxldGV9IGZyb20gJy4vdG9kb0l0ZW0uanMnXG5pbXBvcnQge3VwZGF0ZVRvZG9JdGVtLCBkZWxldGVUb2RvSXRlbX0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9JdGVtcztcbiAgICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gJ1N0YXJ0IGJ5IGNyZWF0aW5nIGEgVE9ETy4nO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9BZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRvZG9BZGRJY29uLnNyYyA9IEFERF9UT0RPX0lDT047XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0FkZEljb24pO1xuXG4gICAgICAgIHRvZG9BZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBvcGVuQWRkVG9kb0Zvcm0ocHJvamVjdCwgcHJvamVjdEJ0bik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gbG9hZFRvZG9zKHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9Db250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb2Rvcyhwcm9qZWN0LCBwcm9qZWN0QnRuKSB7XG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRpbmdEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IHRvZG9BZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdG9kb0FkZEljb24uc3JjID0gQUREX1RPRE9fSUNPTjtcbiAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKHRvZG9BZGRJY29uKTtcblxuICAgIHRvZG9BZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIG9wZW5BZGRUb2RvRm9ybShwcm9qZWN0LCBwcm9qZWN0QnRuKTtcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkaW5nVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZ1RleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgaGVhZGluZ1RleHREaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmdUZXh0RGl2KTtcbiAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcblxuICAgIC8vIHRvZG9zIERpdlxuICAgIGNvbnN0IHRvZG9zRGl2ID0gbG9hZFRvZG9zRGl2KHByb2plY3QsIHByb2plY3RCdG4pO1xuICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRvZG9zRGl2KTtcblxuICAgIHJldHVybiB0b2RvQ29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9zRGl2KHByb2plY3QsIHByb2plY3RCdG4pIHtcbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb3NEaXYuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xuXG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9JdGVtcztcblxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxlZnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG5cbiAgICAgICAgbGVmdC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCJDT01QTEVURVwiO1xuXG4gICAgICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBtYXJrQ29tcGxldGUodG9kbyk7XG4gICAgICAgICAgICB1cGRhdGVUb2RvSXRlbShwcm9qZWN0Lm5hbWUsIHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChsZWZ0KTtcblxuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcblxuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKHByb2plY3QubmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChkZWxCdG4pO1xuXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gICAgICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XG4gICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG5cbiAgICBjb25zdCBjb21wbGV0ZWQgPSBsb2FkQ29tcGxldGVkVG9kb3ModG9kb3MsIHByb2plY3QubmFtZSwgcHJvamVjdEJ0bik7XG4gICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkKTtcblxuICAgIHJldHVybiB0b2Rvc0Rpdjtcbn1cblxuZnVuY3Rpb24gbG9hZENvbXBsZXRlZFRvZG9zKHRvZG9zLCBwcm9qZWN0TmFtZSwgcHJvamVjdEJ0bikge1xuICAgIGNvbnN0IGNvbXBsZXRlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29tcGxldGVkRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRfaGVhZGluZ1wiKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IFwiQ09NUExFVEVEXCI7XG4gICAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICghdG9kby5jb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wbGV0ZWRUb2RvLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRfdG9kb1wiKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgY29tcGxldGVkVG9kby5hcHBlbmRDaGlsZChzcGFuKTtcblxuXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgICAgICAgY29tcGxldGVkVG9kby5hcHBlbmRDaGlsZChkZWxCdG4pO1xuXG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RCdG4uY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRvZG8pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gY29tcGxldGVkRGl2O1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0QnV0dG9uKCkge1xuICAgIFxufVxuIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRvZG9JdGVtcykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9JdGVtcyA9IHRvZG9JdGVtcztcbiAgICB9IFxufVxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBbXSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgc3RvcmFnZS5zYXZlUHJvamVjdChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBzdG9yYWdlLmdldEFsbFByb2plY3RzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIHJldHVybiBzdG9yYWdlLmdldE9yQ3JlYXRlUHJvamVjdChuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QobmFtZSkge1xuICAgIHJldHVybiBzdG9yYWdlLmdldFByb2plY3RCeU5hbWUobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9kb0l0ZW1JblByb2plY3QocHJvamVjdE5hbWUsIHRvZG9JdGVtKSB7XG4gICAgc3RvcmFnZS5zYXZlVG9kb0l0ZW1JblByb2plY3QocHJvamVjdE5hbWUsIHRvZG9JdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCB0b2RvSXRlbSwgaW5kZXgpIHtcbiAgICBzdG9yYWdlLnVwZGF0ZVRvZG9JdGVtKHByb2plY3ROYW1lLCB0b2RvSXRlbSwgaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIGluZGV4KSB7XG4gICAgc3RvcmFnZS5kZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpO1xufSIsImNvbnN0IFBST0pFQ1RfUFJFRklYID0gXCJwcm9qZWN0X1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzYXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgcHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdEJ5TmFtZShuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQUk9KRUNUX1BSRUZJWCArIG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHByb2plY3QpKVxuICAgICAgICByZXR1cm4gcHJvamVjdCA9PT0gbnVsbCA/IHt9IDogSlNPTi5wYXJzZShwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBnZXRPckNyZWF0ZVByb2plY3QocHJvak5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgcHJvak5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdCh7bmFtZTogcHJvak5hbWUsIHRvZG9JdGVtczogW119KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQUk9KRUNUX1BSRUZJWCArIHByb2pOYW1lKSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIC8vIGxldCBpdGVtS2V5O1xuICAgICAgICAvLyBhcnJheSBvZiBvYmplY3RzIC0ge2tleTogcHJvamVjdE5hbWUgU3RyaW5nLCB2YWw6IFByb2plY3QgT2JqZWN0fVxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGl0ZW1LZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGl0ZW1LZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvcHJvamVjdF8uKy9pO1xuICAgICAgICAgICAgICAgIGlmKGl0ZW1LZXkubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtS2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7a2V5OiBpdGVtS2V5LCB2YWw6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0KHByb2plY3QpXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kb0l0ZW0ocHJvamVjdE5hbWUsIHRvZG9JdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXNbaW5kZXhdID0gdG9kb0l0ZW07XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3QocHJvamVjdClcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvSXRlbShwcm9qZWN0TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3QocHJvamVjdClcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cblxuICAgIC8vIHRvZ2dsZUNvbXBwbGV0ZVN0YXR1cygpIHtcbiAgICAvLyAgICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDb21wbGV0ZSh0b2RvKSB7XG4gICAgdG9kby5jb21wbGV0ZSA9ICF0b2RvLmNvbXBsZXRlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtsb2FkSGVhZGVyLCBsb2FkQm9keX0gZnJvbSAnLi9sb2FkRnJvbnRQYWdlLmpzJ1xuXG5jb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5wYWdlQm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3QgaGVhZGVyRGl2ID0gbG9hZEhlYWRlcigpO1xuY29uc3QgYm9keURpdiA9IGxvYWRCb2R5KCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5jb250ZW50LmFwcGVuZENoaWxkKGJvZHlEaXYpO1xuXG5jb25zdCBkZWZhdWx0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kZWZhdWx0XCIpO1xuZGVmYXVsdEJ0bi5jbGljaygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=