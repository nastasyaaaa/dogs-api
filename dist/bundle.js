/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/js/Slider.js":
/*!**************************!*\
  !*** ./src/js/Slider.js ***!
  \**************************/
/*! exports provided: SliderManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderManager\", function() { return SliderManager; });\nclass SliderManager {\r\n\r\n\tconstructor() {\r\n\t\tthis.slideIndex = 1;\r\n\t};\r\n\r\n\tmakeSlider(images) {\r\n\r\n\t\tconst slider = document.createElement('div');\r\n\t\tslider.classList.add('slider');\r\n\r\n\t\tfor(let i = 0; i < images.length; i++){\r\n\t\t\t\r\n\t\t\tlet item = document.createElement('div');\r\n\t\t\tlet img = document.createElement('img');\r\n\r\n\t\t\titem.classList.add('item');\r\n\t\t\timg.src = images[i];\r\n\r\n\t\t\tif(i !== 0){\r\n\t\t\t\titem.style.display = 'none';\r\n\t\t\t}\r\n\r\n\t\t\titem.appendChild(img);\r\n\t\t\tslider.appendChild(item);\t\r\n\t\t}\r\n\r\n\r\n\t\tconst nextBtn = document.createElement('a');\r\n\t\tconst lastBtn = document.createElement('a'); \r\n\t\t\r\n\t\tlastBtn.innerText = '<';\r\n\t\tnextBtn.innerText = '>';\r\n\r\n\t\tlastBtn.classList.add('prev');\r\n\t\tnextBtn.classList.add('next');\r\n\r\n\r\n\t\tlastBtn.addEventListener('click', this.lastBtnClick.bind(this));\r\n\t\tnextBtn.addEventListener('click', this.nextBtnClick.bind(this));\r\n\r\n\r\n\t\tslider.appendChild(lastBtn);\r\n\t\tslider.appendChild(nextBtn);\r\n\r\n\r\n\t\treturn slider;\r\n\r\n\t};\r\n\r\n\tlastBtnClick(event) {\r\n\t\tthis.showSlides(this.slideIndex -= 1);  \r\n\t};\r\n\r\n\tnextBtnClick(event) {\r\n\t\tthis.showSlides(this.slideIndex += 1);  \r\n\t};\r\n\r\n\tshowSlides(n)  {\r\n\t\tlet slides = document.getElementsByClassName(\"item\");\r\n\t\t\r\n\t\tif (n > slides.length) {\r\n\t\t\tthis.slideIndex = 1\r\n\t\t}\r\n\t\tif (n < 1) {\r\n\t\t\tthis.slideIndex = slides.length\r\n\t\t}\r\n\t\t\r\n\t\tfor (let i = 0; i < slides.length; i++) {\r\n\t\t\tslides[i].style.display = \"none\";\r\n\t\t}\r\n\r\n\t\tslides[this.slideIndex - 1].style.display = \"block\";\r\n\t};\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/Slider.js?");

/***/ }),

/***/ "./src/js/handler.js":
/*!***************************!*\
  !*** ./src/js/handler.js ***!
  \***************************/
/*! exports provided: onBreedClick, onSearchKeyUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onBreedClick\", function() { return onBreedClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSearchKeyUp\", function() { return onSearchKeyUp; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nfunction onBreedClick(event) {\r\n\r\n\tevent.preventDefault();\r\n\tconst target = event.target;\r\n\r\n\tif(target.classList.contains('js-show-images')){\r\n\r\n\t\tconst breed = event.target.innerText;\r\n\r\n\t\tif(target.dataset.parentBreed){\r\n\t\t\tconst parentBreed = target.dataset.parentBreed;\r\n\r\n\t\t\t_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeRequest(`https://dog.ceo/api/breed/${parentBreed}/${breed}/images/random/10`)\r\n\t\t\t\t.then( (images) => _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].showDogCard(`${parentBreed}  ${breed}`, images) );\r\n\t\t}else{\r\n\r\n\t\t\t_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeRequest(`https://dog.ceo/api/breed/${breed}/images/random/10`)\r\n\t\t\t\t.then( (images) => _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].showDogCard(breed, images) );\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\nfunction onSearchKeyUp(event) {\r\n\r\n\tconst target = event.target;\r\n\tconst search = target.value;\r\n\r\n\tlet breeds = document.getElementById('list').firstChild.children;\r\n\r\n\tfor(let i = 0; i < breeds.length; i++){\r\n\r\n\t\tif(breeds[i].innerText.search(search) === -1 && search){\r\n\t\t\tbreeds[i].style.display = 'none';\r\n\t\t}else{\r\n\t\t\tbreeds[i].style.display = 'block';\r\n\t\t}\r\n\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/handler.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ \"./src/js/handler.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\n// add event listeners\r\ndocument.getElementById('list').addEventListener('click', _handler__WEBPACK_IMPORTED_MODULE_1__[\"onBreedClick\"]);\r\n\r\n\r\n_utils__WEBPACK_IMPORTED_MODULE_2__[\"utils\"].makeRequest('https://dog.ceo/api/breeds/list/all')\r\n.then(\r\n\t_utils__WEBPACK_IMPORTED_MODULE_2__[\"utils\"].makeList.bind(_utils__WEBPACK_IMPORTED_MODULE_2__[\"utils\"]),\r\n\terror => alert(`Rejected: ${error}`)\r\n);\r\n\r\n\r\nconst search = document.querySelector('input[name=search]');\r\nsearch.addEventListener('keyup', _handler__WEBPACK_IMPORTED_MODULE_1__[\"onSearchKeyUp\"]);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./src/js/Slider.js\");\n\r\n\r\nconst utils = {\r\n\r\n\trawBreeds :  [],\r\n\tbreeds :  [],\r\n\r\n\tmakeRequest : function(url){\r\n\r\n\t\treturn new Promise((resolve, reject) => {\r\n\r\n\t\t\tconst xhr = new XMLHttpRequest();\r\n\t\t\txhr.open('GET', url);\r\n\t\t\txhr.responseType = 'json';\r\n\r\n\t\t\txhr.send();\r\n\r\n\t\t\txhr.onload = function(){\r\n\t\t\t\tresolve(xhr.response.message);\r\n\t\t\t};\r\n\t\t});\r\n\t},\r\n\r\n\tmakeList : function(breeds) {\r\n\r\n\t\tthis.rawBreeds = breeds;\r\n\t\tthis.breeds = Object.keys(breeds);\r\n\r\n\t\tdocument.getElementById('list').appendChild(this.createBreedList(this.breeds));\r\n\t},\r\n\r\n\tcreateBreedList : function(breeds, parent = null) {\r\n\r\n\t\tlet ul = document.createElement('ul');\r\n\r\n\r\n\t\tfor(let i = 0; i < breeds.length; i++){\r\n\r\n\t\t\tlet li = document.createElement('li');\r\n\r\n\t\t\tif(parent){\r\n\t\t\t\tli.dataset.parentBreed = parent;\r\n\t\t\t}\r\n\r\n\t\t\tif( Array.isArray(this.rawBreeds[breeds[i]]) && this.rawBreeds[breeds[i]].length > 0 ){\r\n\t\t\t\t\r\n\t\t\t\tconst title = document.createElement('h5');\r\n\t\t\t\ttitle.innerText = breeds[i];\r\n\t\t\t\tli.appendChild(title);\r\n\r\n\t\t\t\tli.appendChild(this.createBreedList( this.rawBreeds[breeds[i]], breeds[i] ));\r\n\t\t\t}else{\r\n\t\t\t\tli.innerText = breeds[i];\r\n\t\t\t\tli.classList.add(\"js-show-images\");\r\n\t\t\t}\r\n\r\n\r\n\t\t\tul.appendChild(li);\r\n\t\t}\r\n\r\n\r\n\t\treturn ul;\r\n\t},\r\n\r\n\tshowDogCard : function(breed, images) {\r\n\r\n\t\tconst sliderContainer = document.getElementsByClassName('slider-container')[0];\r\n\t\tconst imageContainer = document.getElementById('image-container');\r\n\t\tconst title = document.getElementById('title');\r\n\r\n\t\tif(imageContainer.style.display === 'none'){\r\n\t\t\timageContainer.style.display = 'block';\r\n\t\t}\r\n\r\n\t\twhile(sliderContainer.firstChild){\r\n\t\t\tsliderContainer.removeChild(sliderContainer.firstChild);\r\n\t\t}\r\n\r\n\t\tconst sliderManager = new _Slider__WEBPACK_IMPORTED_MODULE_0__[\"SliderManager\"]();\r\n\t\tsliderContainer.appendChild(sliderManager.makeSlider(images));\r\n\r\n\t\ttitle.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);\r\n\t}\r\n};\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });