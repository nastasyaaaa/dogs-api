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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderManager\", function() { return SliderManager; });\nclass SliderManager {\r\n\r\n\tconstructor() {\r\n\t\tthis.slideIndex = 1;\r\n\t}\r\n\r\n\tmakeSlider(images) {\r\n\r\n\t\tconst slider = document.createElement('div');\r\n\t\tslider.classList.add('slider');\r\n\r\n\t\tfor(let i = 0; i < images.length; i++){\r\n\t\t\t\r\n\t\t\tlet item = document.createElement('div');\r\n\t\t\tlet img = document.createElement('img');\r\n\r\n\t\t\titem.classList.add('item');\r\n\t\t\timg.src = images[i];\r\n\r\n\t\t\tif(i !== 0){\r\n\t\t\t\titem.style.display = 'none';\r\n\t\t\t}\r\n\r\n\t\t\titem.appendChild(img);\r\n\t\t\tslider.appendChild(item);\t\r\n\t\t}\r\n\r\n\t\tslider.appendChild(this.makeLastBtn());\r\n\t\tslider.appendChild(this.makeNextBtn());\r\n\r\n\r\n\t\treturn slider;\r\n\t}\r\n\r\n\tmakeLastBtn()\r\n\t{\r\n\t\tconst lastBtn = document.createElement('a');\r\n\r\n\t\tlastBtn.innerText = '<';\r\n\t\tlastBtn.classList.add('prev');\r\n\t\tlastBtn.addEventListener('click', this.lastBtnClick.bind(this));\r\n\r\n\t\treturn lastBtn;\r\n\t}\r\n\r\n\tmakeNextBtn()\r\n\t{\r\n\t\tconst nextBtn = document.createElement('a');\r\n\r\n\t\tnextBtn.innerText = '>';\r\n\t\tnextBtn.classList.add('next');\r\n\t\tnextBtn.addEventListener('click', this.nextBtnClick.bind(this));\r\n\r\n\t\treturn nextBtn;\r\n\t}\r\n\r\n\tlastBtnClick(event) {\r\n\t\tthis.showSlides(this.slideIndex -= 1);  \r\n\t}\r\n\r\n\tnextBtnClick(event) {\r\n\t\tthis.showSlides(this.slideIndex += 1);  \r\n\t}\r\n\r\n\tshowSlides(n)  {\r\n\t\tlet slides = document.getElementsByClassName(\"item\");\r\n\t\t\r\n\t\tif (n > slides.length) {\r\n\t\t\tthis.slideIndex = 1\r\n\t\t}\r\n\t\tif (n < 1) {\r\n\t\t\tthis.slideIndex = slides.length\r\n\t\t}\r\n\t\t\r\n\t\tfor (let i = 0; i < slides.length; i++) {\r\n\t\t\tslides[i].style.display = \"none\";\r\n\t\t}\r\n\r\n\t\tslides[this.slideIndex - 1].style.display = \"block\";\r\n\t}\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/Slider.js?");

/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Utils\", function() { return Utils; });\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./src/js/Slider.js\");\n\r\n\r\nclass Utils {\r\n\r\n    constructor() {\r\n        this.rawBreeds = [];\r\n        this.breeds = [];\r\n    }\r\n\r\n    makeRequest(url) {\r\n\r\n        return new Promise((resolve, reject) => {\r\n\r\n            const xhr = new XMLHttpRequest();\r\n            xhr.open('GET', url);\r\n            xhr.responseType = 'json';\r\n\r\n            xhr.send();\r\n\r\n            xhr.onload = function () {\r\n                resolve(xhr.response.message);\r\n            };\r\n        });\r\n    }\r\n\r\n    makeList(breeds) {\r\n\r\n        this.rawBreeds = breeds;\r\n        this.breeds = Object.keys(breeds);\r\n\r\n        document.getElementById('list').appendChild(this.createBreedList(this.breeds));\r\n    }\r\n\r\n    createBreedList(breeds, parent = null) {\r\n\r\n        let ul = document.createElement('ul');\r\n\r\n\r\n        for (let i = 0; i < breeds.length; i++) {\r\n\r\n            let li = document.createElement('li');\r\n\r\n            if (parent) {\r\n                li.dataset.parentBreed = parent;\r\n            }\r\n\r\n            if (Array.isArray(this.rawBreeds[breeds[i]]) && this.rawBreeds[breeds[i]].length > 0) {\r\n\r\n                const title = document.createElement('h5');\r\n                title.innerText = breeds[i];\r\n                li.appendChild(title);\r\n\r\n                li.appendChild(this.createBreedList(this.rawBreeds[breeds[i]], breeds[i]));\r\n            } else {\r\n                li.innerText = breeds[i];\r\n                li.classList.add(\"js-show-images\");\r\n            }\r\n\r\n\r\n            ul.appendChild(li);\r\n        }\r\n\r\n\r\n        return ul;\r\n    }\r\n\r\n    showDogCard(breed, images) {\r\n\r\n        const sliderContainer = document.getElementsByClassName('slider-container')[0];\r\n        const imageContainer = document.getElementById('image-container');\r\n        const title = document.getElementById('title');\r\n\r\n        if (imageContainer.style.display === 'none') {\r\n            imageContainer.style.display = 'block';\r\n        }\r\n\r\n        while (sliderContainer.firstChild) {\r\n            sliderContainer.removeChild(sliderContainer.firstChild);\r\n        }\r\n\r\n        const sliderManager = new _Slider__WEBPACK_IMPORTED_MODULE_0__[\"SliderManager\"]();\r\n        sliderContainer.appendChild(sliderManager.makeSlider(images));\r\n\r\n        title.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/Utils.js?");

/***/ }),

/***/ "./src/js/handler.js":
/*!***************************!*\
  !*** ./src/js/handler.js ***!
  \***************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/js/Utils.js\");\n\r\n\r\nconst utils = new _Utils__WEBPACK_IMPORTED_MODULE_0__[\"Utils\"]();\r\n\r\nconst handler = {\r\n\r\n    onBreedClick: function (event) {\r\n\r\n        event.preventDefault();\r\n        const target = event.target;\r\n\r\n        if (target.classList.contains('js-show-images')) {\r\n\r\n            const breed = event.target.innerText;\r\n\r\n            if (target.dataset.parentBreed) {\r\n                const parentBreed = target.dataset.parentBreed;\r\n\r\n                utils.makeRequest(`https://dog.ceo/api/breed/${parentBreed}/${breed}/images/random/10`)\r\n                    .then((images) => utils.showDogCard(`${parentBreed}  ${breed}`, images));\r\n            } else {\r\n\r\n                utils.makeRequest(`https://dog.ceo/api/breed/${breed}/images/random/10`)\r\n                    .then((images) => utils.showDogCard(breed, images));\r\n            }\r\n        }\r\n\r\n    },\r\n\r\n\r\n    onSearchKeyUp: function (event) {\r\n\r\n        const target = event.target;\r\n        const search = target.value;\r\n\r\n        let breeds = document.getElementById('list').firstChild.children;\r\n\r\n        for (let i = 0; i < breeds.length; i++) {\r\n\r\n            if (breeds[i].innerText.search(search) === -1 && search) {\r\n                breeds[i].style.display = 'none';\r\n            } else {\r\n                breeds[i].style.display = 'block';\r\n            }\r\n\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/handler.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ \"./src/js/handler.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ \"./src/js/Utils.js\");\n\r\n\r\n\r\n\r\nconst utils = new _Utils__WEBPACK_IMPORTED_MODULE_2__[\"Utils\"]();\r\n\r\n// add event listeners\r\ndocument.getElementById('list').addEventListener('click', _handler__WEBPACK_IMPORTED_MODULE_1__[\"handler\"].onBreedClick);\r\n\r\n\r\nutils.makeRequest('https://dog.ceo/api/breeds/list/all')\r\n.then(\r\n\tutils.makeList.bind(utils),\r\n\terror => alert(`Rejected: ${error}`)\r\n);\r\n\r\n\r\nconst search = document.querySelector('input[name=search]');\r\nsearch.addEventListener('keyup', _handler__WEBPACK_IMPORTED_MODULE_1__[\"handler\"].onSearchKeyUp);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });