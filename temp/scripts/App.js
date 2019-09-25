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
/* harmony import */ var _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/htmlElements */ "./src/scripts/modules/htmlElements.js");
/* harmony import */ var _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Stopwatch */ "./src/scripts/modules/Stopwatch.js");
/* harmony import */ var _modules_Mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Mode */ "./src/scripts/modules/Mode.js");
/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Timer */ "./src/scripts/modules/Timer.js");




     
// Instances 
let isTimer = false
let watch = new _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_1__["Stopwatch"]()
let mode = new _modules_Mode__WEBPACK_IMPORTED_MODULE_2__["Mode"]()
let timer


for(let i = 0; i < _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"].length; i++) {
  _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"][i].addEventListener('input', function(e){
      if(this.value.length == 2) {
        let nextNext = this.nextElementSibling.nextElementSibling
        if(nextNext && nextNext.type == 'text') {
          this.blur()
          nextNext.focus()
        }
    }

    else if (this.value.length == 0) {
      let previous = this.previousElementSibling
      if(!previous){
        return;
      }
      let previousPrevious = this.previousElementSibling.previousElementSibling
      if(previousPrevious && previousPrevious.type == 'text') {
        this.blur()
        previousPrevious.focus()
      }
      } 
  })
}



_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerForm"].addEventListener('submit', function(e){
  e.preventDefault();
  let usrInput
  for(let i = 0; i < _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"].length; i++){
    usrInput = {
      hours: _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"][0].value,
      minutes: _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"][1].value,
      seconds: _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"][2].value
    }
  }
  timer = new _modules_Timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](usrInput)
  timer.start()
  _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartTimer"].textContent = "stop"

  _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"].forEach(input => input.blur())
})

// toggle buttons
_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartBtns"].forEach(toggleStartBtn =>
  toggleStartBtn.addEventListener('click', function(){
    if(!isTimer){
      (!watch.isOn) ? start() : stop()
    } else {
       (!timer.isOn) ? start() : stop()
    }
  })
)

// start and stop functions 
function start(){
  if(!isTimer) {
    watch.start()
    _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartStopwatch"].textContent = "stop"
  } else {
    timer.start()
    _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartTimer"].textContent = "stop"
  }
}

function stop(){
  if(!isTimer) {
    watch.stop()
    _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartStopwatch"].textContent = "start"
  } else { 
    timer.stop()
    _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartTimer"].textContent = "start"
  }
}


_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["resetBtns"].forEach(resetBtn => 
  resetBtn.addEventListener('click', () => {
      if(!isTimer) {
      watch.reset()
      _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartStopwatch"].textContent = "start"
    } else {
      timer.reset()
      _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleStartTimer"].textContent = "start"
    }
  })
)


_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["modeBtns"].forEach(modeBtn =>
  modeBtn.addEventListener('click', () => {
    mode.change()
    })
)

_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleAppBtns"].forEach(toggleAppBtn => 
  toggleAppBtn.addEventListener('click', () => {
      if(!isTimer) {
        _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleAppBtns"].forEach(toggleAppBtn => toggleAppBtn.textContent = "stopwatch")
        _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["appTimer"].style.display = "flex"
        _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["appStopwatch"].style.display = "none"
        _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["progressBarChildren"].forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
        setTimeout(() => {_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["progressBarChildren"].forEach(a => a.style.animation = null)}, 500);
        isTimer = true
      } else {
          _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["toggleAppBtns"].forEach(toggleAppBtn => toggleAppBtn.textContent = "timer")
          _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["appTimer"].style.display = "none"
          _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["appStopwatch"].style.display = "flex"
          _modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["progressBarChildren"].forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
          setTimeout(() => {_modules_htmlElements__WEBPACK_IMPORTED_MODULE_0__["progressBarChildren"].forEach(a => a.style.animation = null)}, 500);
          isTimer = false
        }
    })
  ) 




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
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ "./src/scripts/modules/htmlElements.js");


function Mode(){
  this.isDark = false
   
  this.change = () => {
    if(!this.isDark) {
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["body"].classList.add('js-toggle-body')
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["progressBars"].forEach(bar => bar.classList.add('js-toggle-progress'))
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"].forEach(input => input.classList.add('js-toggle-input'))
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["buttonContainers"].forEach(btn => btn.classList.add('js-toggle-btn'))
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["modeBtns"].forEach(modeBtn => modeBtn.textContent = "white mode")
      this.isDark = true
    } else {
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["body"].classList.remove('js-toggle-body')
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["progressBars"].forEach(bar => bar.classList.remove('js-toggle-progress'))
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerInputs"].forEach(input => input.classList.remove('js-toggle-input'))
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["buttonContainers"].forEach(btn => btn.classList.remove('js-toggle-btn'))
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["modeBtns"].forEach(modeBtn => modeBtn.textContent = "dark mode")
        this.isDark = false
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
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ "./src/scripts/modules/htmlElements.js");


function Stopwatch(){
  let interval 
  let time = 0
  let offSet
 
  function update(){ 
    if(this.isOn){
      time += delta()
    }

    timeFormatter(time)
  }
  
  function delta(){
    let now = Date.now()
    let timePassed = now - offSet
    offSet = now
    return timePassed
  }
  
  function timeFormatter(timeMilliseconds){
    let time = new Date(timeMilliseconds)
    let millSeconds = (time.getMilliseconds() / 10).toFixed(0)
    let seconds = time.getSeconds().toString()
    let minutes = time.getMinutes().toString()
    let hours = time.getUTCHours().toString()
    
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchMillSecondEl"].textContent = (millSeconds.length < 2) ? `0${millSeconds}` : millSeconds;
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchSecondEl"].textContent = (seconds.length < 2) ? `0${seconds}` : seconds;
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchMinuteEl"].textContent = (minutes.length < 2) ? `0${minutes}` : minutes;
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchHourEl"].textContent = (hours.length < 2) ? `0${hours}` : hours;
  }


  this.isOn = false

  this.start = function(){
    if(!this.isOn){
      interval = setInterval(update.bind(this), 100)
      this.isOn = true
      offSet = Date.now()
    }
  }

  this.stop = function(){
    if(this.isOn){
      clearInterval(interval)
      interval = null
      this.isOn = false
    }
  }

  this.reset = function(){
    time = 0
    clearInterval(interval)
    interval = null

    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchMillSecondEl"].textContent = "00"
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchSecondEl"].textContent = "00"
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchMinuteEl"].textContent = "00"
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["stopWatchHourEl"].textContent = "00"
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
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ "./src/scripts/modules/htmlElements.js");


function Timer(usrInput){
  let interval
  let offSet
  let remaining
  let seconds = (usrInput.seconds) * 1000
  let minutes = (usrInput.minutes) * 60000
  let hours = (usrInput.hours) * 3600000
  let countDownMilliseconds = seconds + minutes + hours

  this.isOn = false

  this.start = function(){
    if(!this.isOn){
      interval = setInterval(update.bind(this), 1000)
      this.isOn = true
      offSet = Date.now()
    }
  }

  this.stop = function(){
    if(this.isOn){
      clearInterval(interval)
      interval = null
      this.isOn = false
    }
  }

  this.reset = ()=>{
      countDownMilliseconds = 0
      clearInterval(interval) 
      interval = null 
      this.isOn = false

      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerSecondEl"].value = null
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerMinuteEl"].value = null
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerHourEl"].value = null

      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerProgressBarChild"].style.transform = "translateX(-100%)"
  }

  let update = ()=>{
    if(this.isOn) {
      remaining = countDownMilliseconds -= delta()
      timeFormatter()
    }
  }

  let delta = ()=>{
    let now = Date.now()  
    let timePassed = now - offSet 
    offSet = now 

    return timePassed
  }

  let timeFormatter = ()=>{
    updateProgressBar()

    let formattedSeconds = Math.floor(Math.round(countDownMilliseconds / 1000) % 60).toString()
    let formattedMinutes = Math.floor((countDownMilliseconds / (1000 * 60)) % 60).toString()
    let formattedHours = Math.floor((countDownMilliseconds / (1000 * 60 * 60)) % 24).toString()
    
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerSecondEl"].value = (formattedSeconds.length < 2) ? `0${formattedSeconds}` : formattedSeconds;
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerMinuteEl"].value = (formattedMinutes.length < 2) ? `0${formattedMinutes}` : formattedMinutes;
    _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerHourEl"].value = (formattedHours.length < 2) ? `0${formattedHours}` : formattedHours;

    if(countDownMilliseconds < 0) {
        this.stop()
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerSecondEl"].value = "00"
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerMinuteEl"].value = "00"
        _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerHourEl"].value = "00"
    }
  }

  let defaultTransform = -100
  let updateProgressBar = ()=>{
    if(this.isOn) {
      let initialcountDownMilliseconds = seconds + minutes + hours
      let progress = ((initialcountDownMilliseconds-remaining) / initialcountDownMilliseconds) * 100
      let moveToRight = defaultTransform + progress 
      _htmlElements__WEBPACK_IMPORTED_MODULE_0__["timerProgressBarChild"].style.transform = `translateX(${moveToRight}%)`
    }
  }
} 


/***/ }),

/***/ "./src/scripts/modules/htmlElements.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/htmlElements.js ***!
  \*********************************************/
/*! exports provided: toggleAppBtns, progressBarChildren, appStopwatch, appTimer, stopWatchMillSecondEl, stopWatchSecondEl, stopWatchMinuteEl, stopWatchHourEl, timerForm, timerInputs, timerSecondEl, timerMinuteEl, timerHourEl, timerProgressBarChild, toggleStartBtns, toggleStartStopwatch, toggleStartTimer, resetBtns, body, progressBars, buttonContainers, modeBtns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAppBtns", function() { return toggleAppBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarChildren", function() { return progressBarChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStopwatch", function() { return appStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appTimer", function() { return appTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWatchMillSecondEl", function() { return stopWatchMillSecondEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWatchSecondEl", function() { return stopWatchSecondEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWatchMinuteEl", function() { return stopWatchMinuteEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWatchHourEl", function() { return stopWatchHourEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerForm", function() { return timerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerInputs", function() { return timerInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerSecondEl", function() { return timerSecondEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerMinuteEl", function() { return timerMinuteEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerHourEl", function() { return timerHourEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerProgressBarChild", function() { return timerProgressBarChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleStartBtns", function() { return toggleStartBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleStartStopwatch", function() { return toggleStartStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleStartTimer", function() { return toggleStartTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBtns", function() { return resetBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBars", function() { return progressBars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonContainers", function() { return buttonContainers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeBtns", function() { return modeBtns; });
// toggle bewtween stopwatch and timer
let toggleAppBtns = document.querySelectorAll('.js-toggle-app')
let progressBarChildren = document.querySelectorAll('.progress-bar-child')
let appStopwatch = document.querySelector('.app.stopwatch')
let appTimer = document.querySelector('.app.timer')


// stopwatch elements 
let stopWatchMillSecondEl = document.querySelector('.stopwatch .js-millsecond-num')
let stopWatchSecondEl = document.querySelector('.stopwatch .js-second-num')
let stopWatchMinuteEl = document.querySelector('.stopwatch .js-minute-num')
let stopWatchHourEl = document.querySelector('.stopwatch .js-hour-num')


// timer elements 
let timerForm = document.querySelector('.form')
let timerInputs = document.querySelectorAll('.form input[type="text"]')
let timerSecondEl = document.querySelector('.timer .seconds')
let timerMinuteEl = document.querySelector('.timer .minutes')
let timerHourEl = document.querySelector('.timer .hours')
let timerProgressBarChild = document.querySelector('.timer .js-progress-bar-timer-child')


// startStop button, reset button
let toggleStartBtns = document.querySelectorAll('.js-toggleStart')
let toggleStartStopwatch = document.querySelector('.stopwatch .js-toggleStart')
let toggleStartTimer = document.querySelector('.timer .js-toggleStart')
let resetBtns = document.querySelectorAll('.reset')

// dark or white mode
let body = document.querySelector('body')
let progressBars = document.querySelectorAll('.js-progress-bar')
let buttonContainers = document.querySelectorAll('.btn')
let modeBtns = document.querySelectorAll('.mode')

/***/ })

/******/ });