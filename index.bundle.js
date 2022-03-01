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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 90px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 30px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo {\n    display: flex;\n    justify-content: space-between;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n\n    /* color: #707070; */\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    width: 40%;\n\n    color: #707070;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\nbutton.default {\n    background-color: #2B4F61;\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50vw;\n    height: 50vh;\n    position: fixed;\n    left: 25vw;\n    top: 25vh;\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input_div input {\n    width: 60%;\n    height: 40px;\n}\n\ninput[type=text] {\n    font: inherit;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    width: 100%;\n    font-family: 'Kohinoor Telugu', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\n.header {\n    background-color: #2B4F61;\n    height: 120px;\n    color: white;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.date {\n    width: calc(100%/3);\n    text-align: left;\n    margin-left: 20px;\n    font-size: 30px;\n}\n\n.title {\n    width: calc(100%/3);\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n}\n\n.content_body {\n    display: flex;\n    min-height: 100vh;\n}\n\n.menu {\n    width: 25%;\n    background-color: #71989B;\n}\n\n.menu_content {\n    width: 75%;\n    background-color: #70707017;\n}\n\n.menu_content > .content {\n    display: block;\n    text-align: center;\n}\n\n.menu_content .content img {\n    width: 90px;\n    cursor: pointer;\n}\n\n.menu_content .content .text {\n    color: #707070;\n    margin-top: 50px;\n    margin-bottom: 30px;\n    font-size: 30px;\n}\n\n.menu_content .content .heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu_content .content .heading img {\n    width: 60px;\n    cursor: pointer;\n    padding-left: 35px;\n}\n\n.menu_content .content .heading .text {\n    font-size: 25px;\n    padding-right: 35px;\n    margin-top: 20px;\n}\n\n.menu_content .content .todos {\n    display: block;\n    \n}\n\n.menu_content .content .todos .todo {\n    display: flex;\n    justify-content: space-between;\n\n    background-color: white;\n    margin: 10px 20px;\n    border-radius: 5px;\n    height: 50px;\n\n    /* color: #707070; */\n}\n\n.menu_content .content .todos .todo .left,\n.menu_content .content .todos .todo .right {\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    width: 40%;\n\n    color: #707070;\n}\n\n.menu_content .button {\n   border: none; \n   height: 25px;\n   border-radius: 5px;\n   font: inherit;\n   font-size: 13px;\n   color: white;\n}\n\nbutton.complete {\n    background-color: #0AA027;\n    width: 100px;\n}\n\nbutton.edit {\n    background-color: #E4960E;\n    width: 80px;\n}\n\nbutton.delete {\n    background-color: #E30000;\n    width: 80px;\n}\n\n.menu_content .divider {\n    margin-top: 50px;\n}\n\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n    font-weight: 450;\n    color: white;\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.project img {\n    cursor: pointer;\n}\n\n.proj_btn {\n    width: 100%;\n    height: 50px;\n    border: none;\n    color: white;\n    font-size: 20px;\n    text-align: left;\n    padding-left: 20px;\n    background-color: #2B4F6164;\n\n    border: .5px solid #2B4F61;\n}\n\n.proj_btn:hover {\n    background-color: rgba(43, 79, 97, 0.644);\n}\n\nbutton.default {\n    background-color: #2B4F61;\n}\n\n.overlay {\n    display: none;\n    opacity: 0;\n    background: rgba(0, 0, 0, .5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 100;\n    transition: opacity .3s;\n}\n\n.popup {\n    display: none;\n    opacity: 0;\n    width: 50vw;\n    height: 50vh;\n    position: fixed;\n    left: 25vw;\n    top: 25vh;\n    z-index: 101;\n\n    background-color: white;\n}\n\n.open {\n    display: block;\n    opacity: 1;\n}\n\n.popup img {\n    width: 40px;\n    position: absolute;\n    right: 0;\n    margin-top: 5px;\n    margin-right: 5px;   \n    cursor: pointer;\n}\n\n.form_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n.add_project_form {\n    width: 100%;\n}\n\n.btn_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.btn_div button {\n    font: inherit;\n    font-size: 25px;\n    color: white;\n    width: 40%;\n    height: 40px;\n    background-color: #2B4F61;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.input_div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.input_div input {\n    width: 60%;\n    height: 40px;\n}\n\ninput[type=text] {\n    font: inherit;\n    border: .9px solid #707070;\n    border-radius: 4px;\n    padding: 5px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm)
/* harmony export */ });
/* harmony import */ var _images_close_form_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/close_form.svg */ "./src/images/close_form.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



function openProjectForm() {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(projectForm());

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
        (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(projectName);
        closeForm();
        location.reload();
    })

    form.appendChild(inputDiv);
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

    const defaultProjBtn = document.createElement("button");
    defaultProjBtn.classList.add("proj_btn");
    defaultProjBtn.classList.add("default");
    defaultProjBtn.textContent = "Default Project";
    projectListDiv.appendChild(defaultProjBtn);

    //load all project from localStorage
    const projects = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)();
    projects.forEach(p => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("proj_btn");
        projectBtn.textContent = p.val.name;
        projectListDiv.appendChild(projectBtn);

        projectBtn.addEventListener("click", function(e) {
            clearMenuContent();
            const projectContent = (0,_menuContent_js__WEBPACK_IMPORTED_MODULE_3__.loadProjectContent)(p.val);
            const menuContent = getMenuContent();
            menuContent.appendChild(projectContent);
        })
    })   

    menuDiv.appendChild(titleDiv);
    menuDiv.appendChild(projectListDiv);

    return menuDiv;

}

function clearMenuContent() {
    const menuContent = document.querySelector(".menu_content .content");
    if (menuContent !== null) {
        menuContent.remove();
    }
}

function getMenuContent() {
    return document.querySelector(".menu_content");
}

function loadMenuContent() {

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu_content");

    const content = (0,_menuContent_js__WEBPACK_IMPORTED_MODULE_3__.loadProjectContent)({name: "default", todoItems: []});
    
    menuContent.appendChild(content);

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



function loadProjectContent(project) {

    const content = document.createElement("div");
    content.classList.add("content");

    const todos = fetchProjectTodos(project);
    if (todos.length === 0) {

        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.setAttribute('style', 'white-space: pre;')
        textDiv.textContent = "You don't have any TODOs yet.\r\nStart by creating a TODO.";
        content.appendChild(textDiv);

        const todoAddIcon = new Image();
        todoAddIcon.src = _images_add_todo_svg__WEBPACK_IMPORTED_MODULE_0__;
        content.appendChild(todoAddIcon);
    } else {
        const todoContent = loadTodos(todos, project.name);
        content.appendChild(todoContent);
    }
    return content;
}

function fetchProjectTodos(project) {
    return project.todoItems;
}

function loadTodos(todos, projectName) {
    console.log(todos)
    const todoContent = document.createElement("div");
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("heading");

    const todoAddIcon = new Image();
    todoAddIcon.src = _images_add_todo_svg__WEBPACK_IMPORTED_MODULE_0__;
    headingDiv.appendChild(todoAddIcon);

    const headingTextDiv = document.createElement("div");
    headingTextDiv.classList.add("text");
    headingTextDiv.textContent = projectName;
    headingDiv.appendChild(headingTextDiv);

    todoContent.appendChild(headingDiv);

    // todos Div
    const todosDiv = loadTodosDiv(todos);
    todoContent.appendChild(todosDiv);

    return todoContent;
}

function loadTodosDiv(todos) {
    const todosDiv = document.createElement("div");
    todosDiv.classList.add("todos");

    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const left = document.createElement("div");
        left.classList.add("left");

        left.textContent = todo.title;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("button");
        completeBtn.classList.add("complete");
        completeBtn.textContent = "COMPLETE";
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
        right.appendChild(delBtn);

        todoDiv.appendChild(right);

        todosDiv.appendChild(todoDiv);

    });

    const divider = document.createElement("hr");
    divider.classList.add("divider");
    todosDiv.appendChild(divider);

    return todosDiv;
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
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


class Project {
    constructor(name, todoItems) {
        this.name = name;
        this.todoItems = todoItems;
    } 

    addToTodoItemToProject(todoItem) {
        // const project = 
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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem.js */ "./src/todoItem.js");
// need to delete after testing




const PROJECT_PREFIX = "project_";
const TODO_PREFIX = "todo_";

class Storage {
    saveProject(project) {
        localStorage.setItem(PROJECT_PREFIX + project.name, JSON.stringify(project));
    }

    getProjectByName(name) {
        const project = localStorage.getItem(PROJECT_PREFIX + name);
        return project === null ? {} : JSON.parse(project);
    }

    getAllProjects() {
        // let item, results = [];
        // for (item in localStorage) {
        //     if (localStorage.hasOwnProperty(item)) {
        //         const regex = /project_.+/i;
        //         if(item.match(regex)) {
        //             const value = JSON.parse(localStorage.getItem(item));
        //             results.push({key: item, val: value});
        //         }
        //     }
        // }
        // title, dueDate, priority, description, project
        const todo = new _todoItem_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem("todo 1", "na", "low", "na", "abc");
        const todo2 = new _todoItem_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem("todo 2", "na", "low", "na", "abc");

        const proj = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project("abc", [todo, todo2]);

        const results = [];
        results.push({key: "abc", val: proj});
        return results;
    }

    saveTodoItemInProject(projectName, todoItem) {
        const project = this.getProjectByName(projectName);
        project.todoItems.push(todoItem);
        this.saveProject(project)
    }

    // getTodosFromProject(project) {
    //     const todos = localStorage.getI
    // }
}

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItem": () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
    constructor (title, dueDate, priority, description, project) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.project = project;
    }
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxzREFBc0Qsa0JBQWtCLGlEQUFpRCxHQUFHLGNBQWMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLEdBQUcsYUFBYSxnQ0FBZ0Msb0JBQW9CLG1CQUFtQixzQkFBc0Isa0NBQWtDLDBCQUEwQixHQUFHLFdBQVcsMEJBQTBCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEdBQUcsWUFBWSwwQkFBMEIseUJBQXlCLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsb0JBQW9CLHdCQUF3QixHQUFHLFdBQVcsaUJBQWlCLGdDQUFnQyxHQUFHLG1CQUFtQixpQkFBaUIsa0NBQWtDLEdBQUcsOEJBQThCLHFCQUFxQix5QkFBeUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHNCQUFzQixHQUFHLGtDQUFrQyxxQkFBcUIsdUJBQXVCLDBCQUEwQixzQkFBc0IsR0FBRyxxQ0FBcUMsb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyx5Q0FBeUMsa0JBQWtCLHNCQUFzQix5QkFBeUIsR0FBRywyQ0FBMkMsc0JBQXNCLDBCQUEwQix1QkFBdUIsR0FBRyxtQ0FBbUMscUJBQXFCLFNBQVMseUNBQXlDLG9CQUFvQixxQ0FBcUMsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsbUJBQW1CLDJCQUEyQixLQUFLLDRGQUE0RixzQkFBc0Isb0NBQW9DLDBCQUEwQixtQkFBbUIsdUJBQXVCLEdBQUcsMkJBQTJCLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcscUJBQXFCLGdDQUFnQyxtQkFBbUIsR0FBRyxpQkFBaUIsZ0NBQWdDLGtCQUFrQixHQUFHLG1CQUFtQixnQ0FBZ0Msa0JBQWtCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IsMkJBQTJCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQix1QkFBdUIseUJBQXlCLGtDQUFrQyxtQ0FBbUMsR0FBRyxxQkFBcUIsZ0RBQWdELEdBQUcsb0JBQW9CLGdDQUFnQyxHQUFHLGNBQWMsb0JBQW9CLGlCQUFpQixvQ0FBb0Msc0JBQXNCLGFBQWEsY0FBYyxtQkFBbUIsb0JBQW9CLG1CQUFtQiw4QkFBOEIsR0FBRyxZQUFZLG9CQUFvQixpQkFBaUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsZ0NBQWdDLEdBQUcsV0FBVyxxQkFBcUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQix5QkFBeUIsZUFBZSxzQkFBc0IsMkJBQTJCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isc0JBQXNCLG1CQUFtQixpQkFBaUIsbUJBQW1CLGdDQUFnQyxtQkFBbUIsMEJBQTBCLHNCQUFzQixHQUFHLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsR0FBRyxzQkFBc0IsaUJBQWlCLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0IsaUNBQWlDLHlCQUF5QixtQkFBbUIsR0FBRyxPQUFPLHNGQUFzRixVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGNBQWMsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLHNDQUFzQyxr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QUFVO0FBQzVCLGdCQUFnQiwyREFBUTtBQUN4QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9sb2FkRnJvbnRQYWdlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tZW51Q29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS29oaW5vb3IgVGVsdWd1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudF9ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxOTg5QjtcXG59XFxuXFxuLm1lbnVfY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzAxNztcXG59XFxuXFxuLm1lbnVfY29udGVudCA+IC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50ZXh0IHtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgLnRleHQge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIFxcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgLyogY29sb3I6ICM3MDcwNzA7ICovXFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5sZWZ0LFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5yaWdodCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogNDAlO1xcblxcbiAgICBjb2xvcjogIzcwNzA3MDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuYnV0dG9uIHtcXG4gICBib3JkZXI6IG5vbmU7IFxcbiAgIGhlaWdodDogMjVweDtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udDogaW5oZXJpdDtcXG4gICBmb250LXNpemU6IDEzcHg7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMDI3O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0OTYwRTtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTMwMDAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuZGl2aWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2pfYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxNjQ7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMkI0RjYxO1xcbn1cXG5cXG4ucHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuNjQ0KTtcXG59XFxuXFxuYnV0dG9uLmRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1dnc7XFxuICAgIHRvcDogMjV2aDtcXG4gICAgei1pbmRleDogMTAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwIGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZF9wcm9qZWN0X2Zvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ0bl9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcblxcbi5idG5fZGl2IGJ1dHRvbiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRfZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXRfZGl2IGlucHV0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAuOXB4IHNvbGlkICM3MDcwNzA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTs7SUFFWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZOztJQUVaLG9CQUFvQjtBQUN4Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0lBRW5CLFVBQVU7O0lBRVYsY0FBYztBQUNsQjs7QUFFQTtHQUNHLFlBQVk7R0FDWixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGFBQWE7R0FDYixlQUFlO0dBQ2YsWUFBWTtBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMkJBQTJCOztJQUUzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTs7SUFFWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS29oaW5vb3IgVGVsdWd1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNEY2MTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudF9ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxOTg5QjtcXG59XFxuXFxuLm1lbnVfY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzAxNztcXG59XFxuXFxuLm1lbnVfY29udGVudCA+IC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50ZXh0IHtcXG4gICAgY29sb3I6ICM3MDcwNzA7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuY29udGVudCAuaGVhZGluZyBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLmhlYWRpbmcgLnRleHQge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIFxcbn1cXG5cXG4ubWVudV9jb250ZW50IC5jb250ZW50IC50b2RvcyAudG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgLyogY29sb3I6ICM3MDcwNzA7ICovXFxufVxcblxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5sZWZ0LFxcbi5tZW51X2NvbnRlbnQgLmNvbnRlbnQgLnRvZG9zIC50b2RvIC5yaWdodCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogNDAlO1xcblxcbiAgICBjb2xvcjogIzcwNzA3MDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuYnV0dG9uIHtcXG4gICBib3JkZXI6IG5vbmU7IFxcbiAgIGhlaWdodDogMjVweDtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udDogaW5oZXJpdDtcXG4gICBmb250LXNpemU6IDEzcHg7XFxuICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMDI3O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0OTYwRTtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTMwMDAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfY29udGVudCAuZGl2aWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2pfYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxNjQ7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMkI0RjYxO1xcbn1cXG5cXG4ucHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA3OSwgOTcsIDAuNjQ0KTtcXG59XFxuXFxuYnV0dG9uLmRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0RjYxO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1dnc7XFxuICAgIHRvcDogMjV2aDtcXG4gICAgei1pbmRleDogMTAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwIGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZF9wcm9qZWN0X2Zvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ0bl9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcblxcbi5idG5fZGl2IGJ1dHRvbiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjRGNjE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRfZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXRfZGl2IGlucHV0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAuOXB4IHNvbGlkICM3MDcwNzA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDbG9zZV9JY29uIGZyb20gJy4vaW1hZ2VzL2Nsb3NlX2Zvcm0uc3ZnJztcbmltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwb3B1cCA9IGNyZWF0ZVBvcHVwU3RydWN0dXJlKCk7XG4gICAgY29uc3QgZm9ybUNvbnRlbnQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fY29udGVudFwiKTtcbiAgICBmb3JtQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAvLyBhZGQgb3ZlcmxheVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG9wZW5PdmVybGF5KCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3B1cFN0cnVjdHVyZSgpIHtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwXCIpO1xuXG4gICAgY29uc3QgZm9ybUNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZvcm1DbG9zZUljb24uc3JjID0gQ2xvc2VfSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fY29udGVudFwiKTtcblxuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1DbG9zZUljb24pO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgZm9ybUNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtKCkge1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkX3Byb2plY3RcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZF9wcm9qZWN0X2Zvcm1cIik7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRfZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBuYW1l4oCmXCJcbiAgICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBidG5EaXYuY2xhc3NMaXN0LmFkZChcImJ0bl9kaXZcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtLmVsZW1lbnRzWydwcm9qZWN0TmFtZSddLnZhbHVlO1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuLy8gdG8gZGFya2VuIGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBBZGRfSWNvbiBmcm9tICcuL2ltYWdlcy9wcm9qZWN0X2FkZC5zdmcnO1xuaW1wb3J0IHtnZXRBbGxQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7bG9hZFByb2plY3RDb250ZW50fSBmcm9tICcuL21lbnVDb250ZW50LmpzJztcbmltcG9ydCB7b3BlblByb2plY3RGb3JtfSBmcm9tICcuL2Zvcm0uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcblxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBcIlR1ZSBGZWIgMjIgMjAyMlwiOyAvLyBUT0RPIC0gY2hhbmdlIHRvIHVzZSB0b2RheSdzIGRhdGVcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIlRPRE8gTElTVFwiO1xuXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICByZXR1cm4gaGVhZGVyRGl2O1xuXG59XG5cbi8vIGJvZHkgaGFzIG1lbnUgYW5kIG1lbnUgY29udGVudFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCb2R5KCkge1xuXG4gICAgY29uc3QgYm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9keURpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudF9ib2R5XCIpO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBsb2FkTWVudSgpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50RGl2ID0gbG9hZE1lbnVDb250ZW50KCk7XG4gICAgYm9keURpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICBib2R5RGl2LmFwcGVuZENoaWxkKG1lbnVDb250ZW50RGl2KTtcblxuICAgIHJldHVybiBib2R5RGl2O1xuICAgIFxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbiAgICAvLyBhZGQgaWNvblxuICAgIGNvbnN0IHByb2plY3RBZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdEFkZEljb24uc3JjID0gQWRkX0ljb247XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEljb24pO1xuXG4gICAgcHJvamVjdEFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb3BlblByb2plY3RGb3JtKCk7XG4gICAgfSlcblxuXG4gICAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RMaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2xpc3RcIik7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVmYXVsdFByb2pCdG4uY2xhc3NMaXN0LmFkZChcInByb2pfYnRuXCIpO1xuICAgIGRlZmF1bHRQcm9qQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0XCIpO1xuICAgIGRlZmF1bHRQcm9qQnRuLnRleHRDb250ZW50ID0gXCJEZWZhdWx0IFByb2plY3RcIjtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChkZWZhdWx0UHJvakJ0bik7XG5cbiAgICAvL2xvYWQgYWxsIHByb2plY3QgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2pfYnRuXCIpO1xuICAgICAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gcC52YWwubmFtZTtcbiAgICAgICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG5cbiAgICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2xlYXJNZW51Q29udGVudCgpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBsb2FkUHJvamVjdENvbnRlbnQocC52YWwpO1xuICAgICAgICAgICAgY29uc3QgbWVudUNvbnRlbnQgPSBnZXRNZW51Q29udGVudCgpO1xuICAgICAgICAgICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpO1xuICAgICAgICB9KVxuICAgIH0pICAgXG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RGl2KTtcblxuICAgIHJldHVybiBtZW51RGl2O1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfY29udGVudCAuY29udGVudFwiKTtcbiAgICBpZiAobWVudUNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgbWVudUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNZW51Q29udGVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X2NvbnRlbnRcIik7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51Q29udGVudCgpIHtcblxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudV9jb250ZW50XCIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGxvYWRQcm9qZWN0Q29udGVudCh7bmFtZTogXCJkZWZhdWx0XCIsIHRvZG9JdGVtczogW119KTtcbiAgICBcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBtZW51Q29udGVudDtcblxufVxuIiwiaW1wb3J0IEFERF9UT0RPX0lDT04gZnJvbSAnLi9pbWFnZXMvYWRkX3RvZG8uc3ZnJztcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RDb250ZW50KHByb2plY3QpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0b2RvcyA9IGZldGNoUHJvamVjdFRvZG9zKHByb2plY3QpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgdGV4dERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7JylcbiAgICAgICAgdGV4dERpdi50ZXh0Q29udGVudCA9IFwiWW91IGRvbid0IGhhdmUgYW55IFRPRE9zIHlldC5cXHJcXG5TdGFydCBieSBjcmVhdGluZyBhIFRPRE8uXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICAgICAgY29uc3QgdG9kb0FkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdG9kb0FkZEljb24uc3JjID0gQUREX1RPRE9fSUNPTjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQWRkSWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRlbnQgPSBsb2FkVG9kb3ModG9kb3MsIHByb2plY3QubmFtZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gZmV0Y2hQcm9qZWN0VG9kb3MocHJvamVjdCkge1xuICAgIHJldHVybiBwcm9qZWN0LnRvZG9JdGVtcztcbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9zKHRvZG9zLCBwcm9qZWN0TmFtZSkge1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKVxuICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkaW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuXG4gICAgY29uc3QgdG9kb0FkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvQWRkSWNvbi5zcmMgPSBBRERfVE9ET19JQ09OO1xuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQodG9kb0FkZEljb24pO1xuXG4gICAgY29uc3QgaGVhZGluZ1RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRpbmdUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIGhlYWRpbmdUZXh0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nVGV4dERpdik7XG5cbiAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcblxuICAgIC8vIHRvZG9zIERpdlxuICAgIGNvbnN0IHRvZG9zRGl2ID0gbG9hZFRvZG9zRGl2KHRvZG9zKTtcbiAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc0Rpdik7XG5cbiAgICByZXR1cm4gdG9kb0NvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb2Rvc0Rpdih0b2Rvcykge1xuICAgIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcblxuICAgICAgICBsZWZ0LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIkNPTVBMRVRFXCI7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobGVmdCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGRlbEJ0bik7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgICAgICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuICAgIHJldHVybiB0b2Rvc0Rpdjtcbn1cbiIsImltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b2RvSXRlbXMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSB0b2RvSXRlbXM7XG4gICAgfSBcblxuICAgIGFkZFRvVG9kb0l0ZW1Ub1Byb2plY3QodG9kb0l0ZW0pIHtcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdCA9IFxuICAgIH1cbn1cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgW10pO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIHN0b3JhZ2Uuc2F2ZVByb2plY3QocHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpO1xufSIsIi8vIG5lZWQgdG8gZGVsZXRlIGFmdGVyIHRlc3RpbmdcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7VG9kb0l0ZW19IGZyb20gJy4vdG9kb0l0ZW0uanMnO1xuXG5cbmNvbnN0IFBST0pFQ1RfUFJFRklYID0gXCJwcm9qZWN0X1wiO1xuY29uc3QgVE9ET19QUkVGSVggPSBcInRvZG9fXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJPSkVDVF9QUkVGSVggKyBwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfUFJFRklYICsgbmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0ID09PSBudWxsID8ge30gOiBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICAvLyBsZXQgaXRlbSwgcmVzdWx0cyA9IFtdO1xuICAgICAgICAvLyBmb3IgKGl0ZW0gaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIC8vICAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcmVnZXggPSAvcHJvamVjdF8uKy9pO1xuICAgICAgICAvLyAgICAgICAgIGlmKGl0ZW0ubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7a2V5OiBpdGVtLCB2YWw6IHZhbHVlfSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3RcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvSXRlbShcInRvZG8gMVwiLCBcIm5hXCIsIFwibG93XCIsIFwibmFcIiwgXCJhYmNcIik7XG4gICAgICAgIGNvbnN0IHRvZG8yID0gbmV3IFRvZG9JdGVtKFwidG9kbyAyXCIsIFwibmFcIiwgXCJsb3dcIiwgXCJuYVwiLCBcImFiY1wiKTtcblxuICAgICAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3QoXCJhYmNcIiwgW3RvZG8sIHRvZG8yXSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICByZXN1bHRzLnB1c2goe2tleTogXCJhYmNcIiwgdmFsOiBwcm9qfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIHNhdmVUb2RvSXRlbUluUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0KHByb2plY3QpXG4gICAgfVxuXG4gICAgLy8gZ2V0VG9kb3NGcm9tUHJvamVjdChwcm9qZWN0KSB7XG4gICAgLy8gICAgIGNvbnN0IHRvZG9zID0gbG9jYWxTdG9yYWdlLmdldElcbiAgICAvLyB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7bG9hZEhlYWRlciwgbG9hZEJvZHl9IGZyb20gJy4vbG9hZEZyb250UGFnZS5qcydcblxuY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xucGFnZUJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmNvbnN0IGhlYWRlckRpdiA9IGxvYWRIZWFkZXIoKTtcbmNvbnN0IGJvZHlEaXYgPSBsb2FkQm9keSgpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuY29udGVudC5hcHBlbmRDaGlsZChib2R5RGl2KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9