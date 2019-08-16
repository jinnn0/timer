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
/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Timer */ "./src/scripts/modules/Timer.js");





// toggle bewtween stopwatch and timer
let toggleStopwatch = document.querySelector('.js-toggleStopwatch')
let progressBarChild = document.querySelector('.progress-bar-child')
let stopwatchBox = document.querySelector('.record-container.stopwatch')
let timerBox = document.querySelector('.record-container.timer')

// stopwatch elements 
let millSecondEl = document.querySelector('.stopwatch .js-millsecond-num')
let secondEl = document.querySelector('.stopwatch .js-second-num')
let minuteEl = document.querySelector('.stopwatch .js-minute-num')
let hourEl = document.querySelector('.stopwatch .js-hour-num')

// timer elements 
let form = document.querySelector('form')
let inputEl = document.querySelector('input')
let timerSecond = document.querySelector('.timer .js-second-num')
let timerMinute = document.querySelector('.timer .js-minute-num')
let timerHour = document.querySelector('.timer .js-hour-num')

// startStop button, reset button
let toggleStartBtn = document.querySelector('.js-toggleStart')
let resetBtn = document.querySelector('.reset')

// dark or white mode
let body = document.querySelector('body')
let progressBar = document.querySelector('.js-progress-bar')
let buttons = document.querySelectorAll('.btn')
let modeBtn = document.querySelector('.mode')

// Instances 
let watch = new _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_0__["Stopwatch"](millSecondEl, secondEl, minuteEl, hourEl)
let mode = new _modules_Mode__WEBPACK_IMPORTED_MODULE_1__["Mode"](body, progressBar, buttons, modeBtn)
let timer

let isTimer = false

form.addEventListener('submit', function(e){
  e.preventDefault()
  let userInput = inputEl.value
  let countdown = 60 * userInput

  timer = new _modules_Timer__WEBPACK_IMPORTED_MODULE_2__["Timer"](countdown, timerSecond, timerMinute, timerHour)
  timer.start()
  toggleStartBtn.textContent = "stop"
  timer.isOn = true
})



// event listener implementations
toggleStartBtn.addEventListener('click', function(){
  if(!isTimer){
    (!watch.isOn) ? start() : stop()
  } else {
     (!timer.isOn) ? start() : stop()
  }
})

resetBtn.addEventListener('click', function(){
  if(!isTimer) {
    watch.reset()
    toggleStartBtn.textContent = "start"
  } else {
    timer.reset()
    toggleStartBtn.textContent = "start"
  }
})

modeBtn.addEventListener('click', function(){
   mode.change()
})

toggleStopwatch.addEventListener('click', function(){
  if(!isTimer) {
    progressBarChild.style.animation = "progressBar .7s ease-in-out forwards"
    setTimeout(() => {progressBarChild.style.animation = null}, 500);
    stopwatchBox.style.display = "none"
    timerBox.style.display = "flex"
    toggleStopwatch.textContent = "stopwatch"
    isTimer = true
    console.log("isTimer ", isTimer);
  } 
  
  else {
    progressBarChild.style.animation = "progressBar .7s ease-in-out forwards"
    setTimeout(() => {progressBarChild.style.animation = null}, 500);
    stopwatchBox.style.display = "flex"
    timerBox.style.display = "none"
    toggleStopwatch.textContent = "timer"
    isTimer = false
    console.log("isTimer ", isTimer);
  }
})




// start and stop functions 
function start(){
  if(!isTimer) {
    watch.start()
    toggleStartBtn.textContent = "stop"
  } else {
    timer.start()
    toggleStartBtn.textContent = "stop"
  }
}

function stop(){
  if(!isTimer) {
    watch.stop()
    toggleStartBtn.textContent = "start"
  } else { 
    timer.stop()
    toggleStartBtn.textContent = "start"
  }
}


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
function Stopwatch(millSecondEl, secondEl, minuteEl, hourEl) {
  let interval = null 
  
  let millSecond = 0
  let second = 0
  let minute = 0
  let hour = 0

  let update = function(){
    millSecond ++

    if(millSecond / 10 === 1) {
      millSecond = 0
      second ++
    }

    if(second / 60 === 1) {
      second = 0
      minute ++
    }

    if(minute / 60 === 1) {
      minute = 0
      hour ++
    }
    
    
    millSecondEl.textContent = millSecond
    secondEl.textContent = (second < 10) ? `0${second}` : second;
    minuteEl.textContent = (minute < 10) ? `0${minute}` : minute;
    hourEl.textContent = (hour < 10) ? `0${hour}` : hour;
}

  this.isOn = false

  this.start = function (){
    if(!this.isOn) {
      interval = window.setInterval(update, 100);
      this.isOn = true
    } 
  }

  this.stop = function (){
    if(this.isOn) {
      window.clearInterval(interval)
      this.isOn = false
    }
  }

  this.reset = function (){
    window.clearInterval(interval)
    millSecond = 0
    second = 0
    minute = 0
    hour = 0

    millSecondEl.textContent = "0"
    secondEl.textContent = "00"
    minuteEl.textContent = "00"
    hourEl.textContent = "00"
    this.isOn = false
  }
}


/***/ }),

/***/ "./src/scripts/modules/Timer.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Timer.js ***!
  \**************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
function Timer(countdown, tSecond, tMinute, tHour){

  let timer = countdown
  let second, minute, hour
  let interval = null

  let update = function(){
    second = parseInt(timer % 60, 10)
    minute = (timer >= 3600) ? parseInt((timer /60) % 60, 10) : parseInt(timer / 60, 10)
    hour = parseInt(timer / 3600, 10)

    tSecond.textContent = (second < 10) ? `0${second}` : second;
    tMinute.textContent = (minute < 10) ? `0${minute}` : minute;
    tHour.textContent = (hour < 10) ? `0${hour}` : hour;

    if(timer -- < 0) {
      timer = countdown
    }
}

  this.isOne = false

  this.start = function (){
    if(!this.isOn) {
      interval = window.setInterval(update, 1000)
      this.isOn = true

    } 
  }

  this.stop = function (){
    if(this.isOn) {
      window.clearInterval(interval)
      this.isOn = false
    }
  }

  this.reset = function (){
    window.clearInterval(interval)
    second = 0
    minute = 0
    hour = 0

    tSecond.textContent = "00"
    tMinute.textContent = "00"
    tHour.textContent = "00"
    this.isOn = false
  }
}


/***/ })

/******/ });