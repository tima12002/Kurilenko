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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalImage */ \"./src/modules/modalImage.js\");\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_modalWindows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalWindows */ \"./src/modules/modalWindows.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modalImage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('27 january 2023 14:00:00')\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_modalWindows__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcBlock = document.querySelector('#calc')\r\n    const calcType = document.querySelector('#calc-type')\r\n    const calcTypeMaterial = document.querySelector('#calc-type-material')\r\n    const calcSquare = document.querySelector('#calc-input')\r\n    const calcTotal = document.querySelector('#calc-total')\r\n\r\n    const countCalc = () => {\r\n        let totalValue = 0\r\n\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value\r\n        const calcSquareValue = +calcSquare.value\r\n\r\n        totalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue\r\n        calcTotal.placeholder = totalValue + ' ' + 'Руб'\r\n    }\r\n    try{\r\n        calcBlock.addEventListener('input', (e) => {\r\n            if (e.target === calcType || e.target === calcSquare ||\r\n                e.target === calcTypeMaterial) {\r\n                    countCalc()\r\n                }\r\n        })\r\n    } catch (error) {\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n    const timerDays = document.querySelectorAll('#timer-days')\r\n    const timerHours = document.querySelectorAll('#timer-hours')\r\n    const timerMinutes = document.querySelectorAll('#timer-minutes')\r\n    const timerSeconds = document.querySelectorAll('#timer-seconds')\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadLine).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days= Math.floor(timeRemaining / 60 / 60 / 24) \r\n        let hours = Math.floor((timeRemaining / 60 / 60) %24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n        if (days < 10) {\r\n            days = ('0' + days)\r\n        }\r\n        if (hours < 10) {\r\n            hours = ('0' + hours)\r\n        }\r\n        if (minutes < 10) {\r\n            minutes = ('0' + minutes)\r\n        }\r\n        if (seconds < 10) {\r\n            seconds = ('0' + seconds)\r\n        }\r\n        \r\n\r\n        return{ timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        timerDays.forEach((timerDays) => {\r\n            timerDays.textContent = getTime.days\r\n        })\r\n        timerHours.forEach((timerHours) => {\r\n            timerHours.textContent = getTime.hours\r\n        })\r\n        timerMinutes.forEach((timerMinutes) => {\r\n            timerMinutes.textContent = getTime.minutes\r\n        })\r\n        timerSeconds.forEach((timerSeconds) => {\r\n            timerSeconds.textContent = getTime.seconds\r\n        })\r\n        \r\n        if(getTime.timeRemaining > 0) {\r\n           setTimeout(updateClock, 1000)\r\n        } else if (getTime.timeRemaining <= 0) {\r\n  \r\n            timerDays.forEach((timerDays) => {\r\n                timerDays.textContent = '00'\r\n            })\r\n            timerHours.forEach((timerHours) => {\r\n                timerHours.textContent = '00'\r\n            })\r\n            timerMinutes.forEach((timerMinutes) => {\r\n                timerMinutes.textContent = '00'\r\n            })\r\n            timerSeconds.forEach((timerSeconds) => {\r\n                timerSeconds.textContent = '00'\r\n            })\r\n        }\r\n\r\n    }\r\n    updateClock()\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/modalImage.js":
/*!***********************************!*\
  !*** ./src/modules/modalImage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sertificate = () => {\r\n    const sertificateImages = document.querySelectorAll('.sertificate-document')\r\n    const overlay = document.querySelector('.overlay')\r\n    const hideImages = document.querySelector('.hide_sertificate')\r\n    const closeServiceModal = document.querySelector('.sertificate-modal__close')\r\n\r\n    sertificateImages.forEach(sertificateImage => sertificateImage.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        hideImages.style.display = 'block'\r\n        overlay.style.display = 'block'\r\n\r\n    }))\r\n    closeServiceModal.addEventListener('click', () => {\r\n        hideImages.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sertificate);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalImage.js?");

/***/ }),

/***/ "./src/modules/modalWindows.js":
/*!*************************************!*\
  !*** ./src/modules/modalWindows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalWindows = () => {\r\n    const WindowBtn = document.querySelectorAll('#Window')\r\n    const servicesModal = document.querySelector('.services-modal')\r\n    const servicesClose = document.querySelector('.services-modal__close')\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    WindowBtn.forEach(WindowModalBtn => WindowModalBtn.addEventListener('click', (e) =>{\r\n        e.preventDefault()\r\n        servicesModal.style.display = 'block'\r\n        overlay.style.display = 'block'\r\n    \r\n        }\r\n    ))\r\n\r\n    servicesClose.addEventListener('click', (e) =>{\r\n        \r\n        servicesModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n\r\n    const wboxModalBtn = document.querySelector('#WboxModal')\r\n    const headerModal = document.querySelector('.header-modal')\r\n    const closeModal = document.querySelector('.header-modal__close')\r\n    \r\n\r\n    wboxModalBtn.addEventListener('click', (e) =>{\r\n        e.preventDefault()\r\n        headerModal.style.display = 'block'\r\n        overlay.style.display = 'block'\r\n    })\r\n\r\n    closeModal.addEventListener('click', (e) =>{\r\n        \r\n        headerModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n   \r\n   \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindows);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalWindows.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scrollBtn = document.querySelector('.smooth-scroll')\r\n    const toTop = document.querySelector('#header')\r\n\r\n    if(pageYOffset > 350) {\r\n        scrollBtn.style.display = 'block'\r\n    } else {\r\n        scrollBtn.style.display = 'none'\r\n    }\r\n    window.addEventListener('scroll', function() {\r\n        if(pageYOffset > 350) {\r\n            scrollBtn.style.display = 'block'\r\n        } else {\r\n            scrollBtn.style.display = 'none'\r\n        }\r\n      })\r\n    \r\n    scrollBtn.addEventListener('click', () => {\r\n        toTop.scrollIntoView({behavior: \"smooth\"})\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () =>{\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;