/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 403:
/***/ (() => {

const chatButtonOpen = document.querySelector('.chat-open-btn');
const chatWindow = document.querySelector('.chat-window');
const chatButtonClose = document.querySelector('.chat-close-btn');
chatButtonOpen.addEventListener('click', () => {
  chatButtonOpen.style.display = 'none';
  chatWindow.style.display = 'flex';
  chatWindow.style.opacity = 0;
  chatWindow.style.transition = 'opacity 400ms linear';
  setTimeout(() => {
    chatWindow.style.opacity = 1;
  }, 100);
});
chatButtonClose.addEventListener('click', function () {
  chatWindow.style.transition = 'opacity 300ms linear';
  chatWindow.style.opacity = 0;
  setTimeout(() => {
    chatWindow.style.display = 'none';
    chatButtonOpen.style.display = 'flex';
  }, 100);
});

/***/ }),

/***/ 702:
/***/ (() => {

const collapseButton = document.querySelector('.btn-collapse');
const collapseArea = document.querySelector('.collapse-area');
let isCollapsed = false;
collapseButton.addEventListener('click', () => {
  if (isCollapsed) {
    collapseArea.classList.remove('collapsing');
    collapseArea.classList.add('expanding');
  } else {
    collapseArea.classList.remove('expanding');
    collapseArea.classList.add('collapsing');
  }
  isCollapsed = !isCollapsed;
});

/***/ }),

/***/ 586:
/***/ (() => {

const likeButton = document.querySelector('.like-btn');
const containerLike = document.querySelector('.container-like');
likeButton.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const trajectoryNum = Math.floor(Math.random() * 4) + 1;
  heart.style.animationName = `trajectory${trajectoryNum}`;
  containerLike.appendChild(heart);
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);
/* harmony import */ var _js_collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_collapse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var _js_chat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_chat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);
/* harmony import */ var _js_like__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_like__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map