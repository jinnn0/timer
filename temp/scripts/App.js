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
/* harmony import */ var _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Stopwatch */ "./src/scripts/modules/Stopwatch.js");
/* harmony import */ var _modules_Mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Mode */ "./src/scripts/modules/Mode.js");



 
let secondEl = document.querySelector('.js-second-num')
let minuteEl = document.querySelector('.js-minute-num')
let hourEl = document.querySelector('.js-hour-num')
let toggleBtn = document.querySelector('.toggle')
let resetBtn = document.querySelector('.reset')
let modeBtn = document.querySelector('.mode')

let body = document.querySelector('body')
let progressBar = document.querySelector('.js-progress-bar')
let buttons = document.querySelectorAll('.btn')


let watch = new _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_0__["Stopwatch"](secondEl, minuteEl, hourEl)
let mode = new _modules_Mode__WEBPACK_IMPORTED_MODULE_1__["Mode"](body, progressBar, buttons, modeBtn)


function start(){
  watch.start(secondEl, minuteEl, hourEl)
  toggleBtn.textContent = "stop"
}

function stop(){
  watch.stop()
  toggleBtn.textContent = "start"
}


toggleBtn.addEventListener('click', function(){
  (!watch.isOn) ? start() : stop()
})

resetBtn.addEventListener('click', function(){
  watch.reset()
  toggleBtn.textContent = "start"
})


modeBtn.addEventListener('click', function(){
   mode.change()
})

/***/ }),

/***/ "./src/scripts/modules/Mode.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/Mode.js ***!
  \*************************************/
/*! exports provided: Mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
function Mode(body, progressBar, buttons, modeBtn){
  let isDark = false

  this.change = function(){
    if(!isDark) {
      body.classList.add('js-toggle-body')
      progressBar.classList.add('js-toggle-progress')
      buttons.forEach(btn => btn.classList.add('js-toggle-btn'))
      modeBtn.textContent = "white mode"
      isDark = true
    } else {
      body.classList.remove('js-toggle-body')
      progressBar.classList.remove('js-toggle-progress')
      buttons.forEach(btn => btn.classList.remove('js-toggle-btn'))
      modeBtn.textContent = "dark mode"
      isDark = false
    }
  }
}

/***/ }),

/***/ "./src/scripts/modules/Stopwatch.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/Stopwatch.js ***!
  \******************************************/
/*! exports provided: Stopwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stopwatch", function() { return Stopwatch; });
function Stopwatch(secondEl, minuteEl, hourEl) {
  let interval = null 
  let offset;
  let current;
  let second = 0
  let minute = 0
  let hour = 0
  let time = 0

  let delta = function(){
    let now = Date.now()
    let timePassed = now - offset
    offset = now

    return timePassed
  }

  let timeFormatter = function(timeMilliseconds){
    let time = new date(timeMilliseconds)
    let second = time.getSeconds()
    let minute = time.getMinutes()
    let hour = time.getHours()
  }

  let update = function(){
    time += delta()
    let formattedTime = timeFormatter(time)
    console.log(formattedTime);

    // second ++ 

    // if(second / 60 === 1) {
    //   second = 0
    //   minute ++
    // }

    // if(minute / 60 === 1) {
    //   minute = 0
    //   hour ++
    // }

    // if(second < 10) {
    //   secondEl.textContent = `0${second}`
    // } else {
    //   secondEl.textContent = second
    // }

    // if(minute < 10) {
    //   minuteEl.textContent = `0${minute}`
    // } else {
    //   minuteEl.textContent = minute
    // }

    // if(hour < 10) {
    //   hourEl.textContent = `0${hour}`
    // } else {
    //   hourEl.textContent = hour
    // }
  }


  this.isOn = false

  this.start = function start(){
    if(!this.isOn) {
      interval = window.setInterval(update, 10);
      offset = Date.now()
      this.isOn = true
    } 
  }

  this.stop = function stop(){
    if(this.isOn) {
      window.clearInterval(interval)
      this.isOn = false
    }
  }

  this.reset = function reset(){
    window.clearInterval(interval)
    second = 0
    minute = 0
    hour = 0

    secondEl.textContent = "00"
    minuteEl.textContent = "00"
    hourEl.textContent = "00"
    this.isOn = false
  }
}


/***/ })

/******/ });