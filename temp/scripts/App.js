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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_stopwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_stopwatch */ "./src/scripts/modules/_stopwatch.js");


    let secondEl = document.querySelector('.js-second-num')
    let minuteEl = document.querySelector('.js-minute-num')
    let hourEl = document.querySelector('.js-hour-num')
    let toggleBtn = document.querySelector('.toggle')
    let resetBtn = document.querySelector('.reset')
    let modeBtn = document.querySelector('.mode')


    let second = 0
    let minute = 0
    let hour = 0

    function callTimer(){
          second ++ 

          if(second / 60 === 1) {
            second = 0
            minute ++
          }

          if(minute / 60 === 1) {
            minute = 0
            hour ++
          }

          if(second < 10) {
            secondEl.textContent = `0${second}`
          } else {
            secondEl.textContent = second
          }


          if(minute < 10) {
            minuteEl.textContent = `0${minute}`
          } else {
            minuteEl.textContent = minute
          }

          if(hour < 10) {
            hourEl.textContent = `0${hour}`
          } else {
            hourEl.textContent = hour
          }
    }


    let interval = null
    let status = "stopped"

    toggleBtn.addEventListener('click', startStop)
    function startStop(){

      if(status === "stopped") {

        interval = window.setInterval(callTimer, 10);
        toggleBtn.textContent = "stop"
        status = "started"
      } 
      else {

        window.clearInterval(interval)
        toggleBtn.textContent = "start"
        status = "stopped"
      }
    }


    let mode = "white"

    modeBtn.addEventListener('click', changeMode)
    function changeMode(){
        let body = document.querySelector('body')
        let progressBar = document.querySelector('.js-progress-bar')
        let buttons = document.querySelectorAll('.btn')


        if(mode === "white") {
          body.classList.add('js-toggle-body')
          progressBar.classList.add('js-toggle-progress')
          buttons.forEach(btn => btn.classList.add('js-toggle-btn'))
          modeBtn.textContent = "white mode"
          mode = "dark"
        }
        else {
          body.classList.remove('js-toggle-body')
          progressBar.classList.remove('js-toggle-progress')
          buttons.forEach(btn => btn.classList.remove('js-toggle-btn'))
          modeBtn.textContent = "dark mode"
          mode = "white"
        }
    }


    resetBtn.addEventListener('click', stopTimer)
    function stopTimer(){

      window.clearInterval(interval)
      second = 0
      minute = 0
      hour = 0
      toggleBtn.textContent = "start"
      secondEl.textContent = "00"
      minuteEl.textContent = "00"
      hourEl.textContent = "00"
    }




/***/ }),

/***/ "./src/scripts/modules/_stopwatch.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/_stopwatch.js ***!
  \*******************************************/
/*! exports provided: stopwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopwatch", function() { return stopwatch; });
function stopwatch(){
  let secondEl = document.querySelector('.js-second-num')
  let minuteEl = document.querySelector('.js-minute-num')
}

/***/ })

/******/ });