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
let toggleAppBtns = document.querySelectorAll('.js-toggle-app')
let progressBarChildren = document.querySelectorAll('.progress-bar-child')
let appStopwatch = document.querySelector('.app.stopwatch')
let appTimer = document.querySelector('.app.timer')

// stopwatch elements 
let millSecondEl = document.querySelector('.stopwatch .js-millsecond-num')
let secondEl = document.querySelector('.stopwatch .js-second-num')
let minuteEl = document.querySelector('.stopwatch .js-minute-num')
let hourEl = document.querySelector('.stopwatch .js-hour-num')

// timer elements 
let form = document.querySelector('.form')
let inputs = document.querySelectorAll('.form input[type="text"]')


// startStop button, reset button
let toggleStartBtns = document.querySelectorAll('.js-toggleStart')
let toggleStartStopwatch = document.querySelector('.stopwatch .js-toggleStart')
let toggleStartTimer = document.querySelector('.timer .js-toggleStart')
let resetBtns = document.querySelectorAll('.reset')

// progressbar
let progressBarChild = document.querySelector('.progress-bar-child')

// dark or white mode
let body = document.querySelector('body')
let progressBars = document.querySelectorAll('.js-progress-bar')
let buttonContainers = document.querySelectorAll('.btn')
let modeBtns = document.querySelectorAll('.mode')

// Instances 
let watch = new _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_0__["Stopwatch"]()
let mode = new _modules_Mode__WEBPACK_IMPORTED_MODULE_1__["Mode"](body, progressBars, inputs, buttonContainers, modeBtns)
let timer

let isTimer = false


for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function(e){
    if(this.value.length == 2) {
      //move to the next input, if any
      let nextNext = this.nextElementSibling.nextElementSibling
      if(nextNext && nextNext.type == 'text') {
        this.blur()
        nextNext.focus()
      }
    }

    else if (this.value.length == 0 ) {
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

form.addEventListener('submit', function(e){
  e.preventDefault();
  let usrInput
  for(let i = 0; i < inputs.length; i++){
    usrInput = {
      hours: inputs[0].value,
      minutes: inputs[1].value,
      seconds: inputs[2].value
    }
  }
  timer = new _modules_Timer__WEBPACK_IMPORTED_MODULE_2__["Timer"](usrInput)
  timer.start()
  toggleStartTimer.textContent = "stop"

  inputs.forEach(input => input.blur())
})

// toggle buttons
toggleStartBtns.forEach(toggleStartBtn =>
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
    toggleStartStopwatch.textContent = "stop"
  } else {
    timer.start()
    toggleStartTimer.textContent = "stop"
  }
}

function stop(){
  if(!isTimer) {
    watch.stop()
    toggleStartStopwatch.textContent = "start"
  } else { 
    timer.stop()
    toggleStartTimer.textContent = "start"
  }
}


resetBtns.forEach(resetBtn => 
  resetBtn.addEventListener('click', () => {
      if(!isTimer) {
      watch.reset()
      toggleStartStopwatch.textContent = "start"
    } else {
      timer.reset()
      toggleStartTimer.textContent = "start"
    }
  })
)


modeBtns.forEach(modeBtn =>
  modeBtn.addEventListener('click', () => {
    mode.change()
    })
)

toggleAppBtns.forEach(toggleAppBtn => 
  toggleAppBtn.addEventListener('click', () => {
      if(!isTimer) {
        toggleAppBtns.forEach(toggleAppBtn => toggleAppBtn.textContent = "stopwatch")
        appTimer.style.display = "flex"
        appStopwatch.style.display = "none"
        progressBarChildren.forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
        setTimeout(() => {progressBarChildren.forEach(a => a.style.animation = null)}, 500);
        isTimer = true
      } else {
          toggleAppBtns.forEach(toggleAppBtn => toggleAppBtn.textContent = "timer")
          appTimer.style.display = "none"
          appStopwatch.style.display = "flex"
          progressBarChildren.forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
          setTimeout(() => {progressBarChildren.forEach(a => a.style.animation = null)}, 500);
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
function Mode(body, progressBars, inputs, buttonContainers, modeBtns){
  this.isDark = false
  
  this.change = () => {
    if(!this.isDark) {
      body.classList.add('js-toggle-body')
      progressBars.forEach(bar => bar.classList.add('js-toggle-progress'))
      inputs.forEach(input => input.classList.add('js-toggle-input'))
      buttonContainers.forEach(btn => btn.classList.add('js-toggle-btn'))
      modeBtns.forEach(modeBtn => modeBtn.textContent = "white mode")
      this.isDark = true
    } else {
        body.classList.remove('js-toggle-body')
        progressBars.forEach(bar => bar.classList.remove('js-toggle-progress'))
        inputs.forEach(input => input.classList.remove('js-toggle-input'))
        buttonContainers.forEach(btn => btn.classList.remove('js-toggle-btn'))
        modeBtns.forEach(modeBtn => modeBtn.textContent = "dark mode")
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
function Stopwatch(){
  let millSecondEl = document.querySelector('.stopwatch .js-millsecond-num')
  let secondEl = document.querySelector('.stopwatch .js-second-num')
  let minuteEl = document.querySelector('.stopwatch .js-minute-num')
  let hourEl = document.querySelector('.stopwatch .js-hour-num')

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
    
    millSecondEl.textContent = (millSeconds.length < 2) ? `0${millSeconds}` : millSeconds;
    secondEl.textContent = (seconds.length < 2) ? `0${seconds}` : seconds;
    minuteEl.textContent = (minutes.length < 2) ? `0${minutes}` : minutes;
    hourEl.textContent = (hours.length < 2) ? `0${hours}` : hours;
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

    millSecondEl.textContent = "00"
    secondEl.textContent = "00"
    minuteEl.textContent = "00"
    hourEl.textContent = "00"
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
function Timer(usrInput){
  let secondEl = document.querySelector('.timer .seconds')
  let minuteEl = document.querySelector('.timer .minutes')
  let hourEl = document.querySelector('.timer .hours')
  let progressBarChild = document.querySelector('.timer .js-progress-bar-timer-child')
 
  let interval
  let offSet
  let remaining
  let seconds = (usrInput.seconds) * 1000
  let minutes = (usrInput.minutes) * 60000
  let hours = (usrInput.hours) * 3600000
  let initialcountDownMilliseconds = seconds + minutes + hours
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

      secondEl.value = "00"
      minuteEl.value = "00"
      hourEl.value = "00"
  }

  let update = ()=>{
    if(this.isOn) {
      timeFormatter()
      initialcountDownMilliseconds = countDownMilliseconds
      remaining = countDownMilliseconds -= delta()
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
    
    secondEl.value = (formattedSeconds.length < 2) ? `0${formattedSeconds}` : formattedSeconds;
    minuteEl.value = (formattedMinutes.length < 2) ? `0${formattedMinutes}` : formattedMinutes;
    hourEl.value = (formattedHours.length < 2) ? `0${formattedHours}` : formattedHours;

    if(countDownMilliseconds < 0) {
      this.reset()
    }
  }

  let defaultTransform = -100
  let updateProgressBar = ()=>{
    if(this.isOn) {
      let progress = ((initialcountDownMilliseconds-remaining) / initialcountDownMilliseconds) * 100
      let moveToRight = defaultTransform + progress 
      progressBarChild.style.transform = `translateX(${moveToRight}%)`
    }
  }
} 


/***/ })

/******/ });