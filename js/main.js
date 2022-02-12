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

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css?21bf\");\n\n // define UI variables\n\nvar error = document.querySelector('.helper-text');\nvar form = document.querySelector('#task-form');\nvar taskInput = document.querySelector('#task');\nvar filter = document.querySelector('#filter');\nvar clearBtn = document.querySelector('.clear-tasks');\nvar taskList = document.querySelector('.collection'); // load all eventlisteners\n\nloadAllEventListeners(); // load all eventlisteners function\n\nfunction loadAllEventListeners() {\n  // add task event\n  form.addEventListener('submit', addTask); //DOM load event\n\n  document.addEventListener('DOMContentLoaded', getTasks); // remove task event\n\n  taskList.addEventListener('click', removeTask); // clear task event\n\n  clearBtn.addEventListener('click', clearTasks); // filter tasks event\n\n  filter.addEventListener('keyup', filterTasks);\n} // show error\n\n\nfunction showError() {\n  var _this = this;\n\n  error.classList.remove('white-text');\n  error.classList.add('red-text');\n  setTimeout(function () {\n    _this.clearError();\n  }, 2000);\n} // clear error\n\n\nfunction clearError() {\n  error.classList.remove('red-text');\n  error.classList.add('white-text');\n} // add task function\n\n\nfunction addTask(event) {\n  if (taskInput.value === '') {\n    showError();\n  } else {\n    clearError(); // create li element\n\n    var li = document.createElement('li'); // add class\n\n    li.className = 'collection-item'; // create text node and append to li\n\n    li.appendChild(document.createTextNode(taskInput.value)); // create new link element\n\n    var link = document.createElement('a'); // add class\n\n    link.className = 'delete-item secondary-content'; // add icon html\n\n    link.innerHTML = '<i class=\"fa fa-remove\"></i>'; // append the link to the li\n\n    li.appendChild(link); // append li to the ul\n\n    taskList.appendChild(li); // store ul in Local Storage\n\n    storeTaskInLocalStorage(taskInput.value); // enable clear button\n\n    clearBtn.classList.remove('disabled'); // clear input\n\n    taskInput.value = '';\n  }\n\n  event.preventDefault();\n} // storeTaskInLocalStorage function\n\n\nfunction storeTaskInLocalStorage(task) {\n  var tasks;\n\n  if (localStorage.getItem('tasks') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n  }\n\n  tasks.push(task);\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n} // remove task from local storage function\n\n\nfunction removeTaskFromLocalStorage(taskItem) {\n  var tasks;\n\n  if (localStorage.getItem('tasks') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n  }\n\n  tasks.forEach(function (task, index) {\n    if (taskItem.textContent === task) {\n      tasks.splice(index, 1);\n    }\n  });\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n} // clear text from local starage function\n\n\nfunction clearTextFromLocalStorage() {\n  localStorage.clear();\n} // get tasks function\n\n\nfunction getTasks() {\n  var tasks;\n\n  if (localStorage.getItem('tasks') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n  }\n\n  tasks.forEach(function (task) {\n    // create li element\n    var li = document.createElement('li'); // add class\n\n    li.className = 'collection-item'; // create text node and append to li\n\n    li.appendChild(document.createTextNode(task)); // create new link element\n\n    var link = document.createElement('a'); // add class\n\n    link.className = 'delete-item secondary-content'; // add icon html\n\n    link.innerHTML = '<i class=\"fa fa-remove\"></i>'; // append the link to the li\n\n    li.appendChild(link); // append li to the ul\n\n    taskList.appendChild(li);\n  });\n} // remove task function\n\n\nfunction removeTask(event) {\n  if (event.target.parentElement.classList.contains('delete-item')) {\n    event.target.parentElement.parentElement.remove(); // remove task from the local storage\n\n    removeTaskFromLocalStorage(event.target.parentElement.parentElement);\n  }\n\n  if (!taskList.hasChildNodes()) {\n    clearBtn.classList.add('disabled');\n  }\n} // clear tasks function\n\n\nfunction clearTasks() {\n  // lower method\n  // taskList.innerHTML = '';\n  //faster method\n  while (taskList.firstChild) {\n    taskList.removeChild(taskList.firstChild);\n  } //clear tasks from local storage\n\n\n  clearTextFromLocalStorage(); // disable clear button\n\n  clearBtn.classList.add('disabled');\n} // filter task function\n\n\nfunction filterTasks(event) {\n  var text = event.target.value.toLowerCase();\n  document.querySelectorAll('.collection-item').forEach(function (task) {\n    var item = task.firstChild.textContent; // first method by using includes \n    // if (item.toLowerCase().includes(text) === true) {\n    //     console.log('true')\n    //     task.style.display = 'block';\n    // } else {\n    //     console.log('false')\n    //     task.style.display = 'none';\n    // }       \n    //second method by using indexOf\n\n    if (item.toLowerCase().indexOf(text) !== -1) {\n      task.style.display = 'block';\n    } else {\n      task.style.display = 'none';\n    }\n  });\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/styles.css */ \"./css/styles.css?1118\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>My Todo</title>\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css\\\" integrity=\\\"sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7\\\" crossorigin=\\\"anonymous\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">    \\n    <script defer src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></script>\\n</head>\\n<body class=\\\"green lighten-5\\\">\\n    <div class=\\\"navbar\\\">\\n        <nav>\\n          <div class=\\\"nav-wrapper teal\\\">           \\n            <a href=\\\"#!\\\" class=\\\"brand-logo center\\\">My ToDo</a>                                 \\n          </div>\\n        </nav>\\n    </div>      \\n<main>\\n    <div class=\\\"container\\\">        \\n        <div class=\\\"row\\\">\\n            <div class=\\\"col s12\\\">                \\n                <div id=\\\"main\\\" class=\\\"card\\\">                    \\n                    <div class=\\\"card-content\\\">                        \\n                       <span class=\\\"card-title\\\">\\n                                Task List\\n                            </span>                           \\n                        <div class=\\\"row\\\">\\n                            <form id=\\\"task-form\\\">\\n                                <div class=\\\"input-field col s12\\\">\\n                                    <input type=\\\"text\\\" autocomplete=\\\"off\\\" name=\\\"task\\\" id=\\\"task\\\" minlength=\\\"1\\\">\\n                                    <label for=\\\"task\\\">New Task</label>   \\n                                    <span class=\\\"helper-text white-text\\\" data-error=\\\"wrong\\\" data-success=\\\"right\\\">Enter the task, please :)</span>                               \\n                                </div>\\n                                <input type=\\\"submit\\\" value=\\\"Add Task\\\" class=\\\"btn\\\">\\n                            </form>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"card-action\\\">\\n                        <span class=\\\"card-title\\\">\\n                            Tasks\\n                        </span>      \\n                        <div class=\\\"input-field col s12\\\">\\n                            <input type=\\\"text\\\" name=\\\"filter\\\" id=\\\"filter\\\">\\n                            <label for=\\\"filter\\\">Filter Tasks</label>\\n                        </div>\\n                        <ul class=\\\"collection\\\"></ul>\\n                        <a href=\\\"#\\\" class=\\\"clear-tasks btn-small disabled indigo\\\">Clear Tasks</a>                        \\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n</main>\\n\\n    <script src=\\\"https://kit.fontawesome.com/4d249739c4.js\\\" crossorigin=\\\"anonymous\\\"></script>\\n    <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\\\"></script>\\n    <script src=\\\"https://code.jquery.com/jquery-3.6.0.js\\\" integrity=\\\"sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=\\\" crossorigin=\\\"anonymous\\\"></script>\\n    \\n</body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./css/styles.css?21bf":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/styles.css?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4538d458ae5a3a260876.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./css/styles.css?1118":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.css\";\n\n//# sourceURL=webpack:///./css/styles.css?");

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
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js?9e1e");
/******/ 	
/******/ })()
;