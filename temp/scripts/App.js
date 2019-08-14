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



 
let millSecondEl = document.querySelector('.js-millsecond-num')
let secondEl = document.querySelector('.js-second-num')
let minuteEl = document.querySelector('.js-minute-num')
let hourEl = document.querySelector('.js-hour-num')
let toggleStartBtn = document.querySelector('.js-toggleStart')
let resetBtn = document.querySelector('.reset')

// toggle stopwatch or timer
let toggleStopwatch = document.querySelector('.js-toggleStopwatch')
let progressBarChild = document.querySelector('.progress-bar-child')
let stopwatchBox = document.querySelector('.record-container.stopwatch')
let timerBox = document.querySelector('.record-container.timer')

// dark or white mode
let body = document.querySelector('body')
let progressBar = document.querySelector('.js-progress-bar')
let buttons = document.querySelectorAll('.btn')
let modeBtn = document.querySelector('.mode')


let watch = new _modules_Stopwatch__WEBPACK_IMPORTED_MODULE_0__["Stopwatch"](millSecondEl, secondEl, minuteEl, hourEl)
let mode = new _modules_Mode__WEBPACK_IMPORTED_MODULE_1__["Mode"](body, progressBar, buttons, modeBtn)


function start(){
  watch.start(secondEl, minuteEl, hourEl)
  toggleStartBtn.textContent = "stop"
}

function stop(){
  watch.stop()
  toggleStartBtn.textContent = "start"
}


toggleStartBtn.addEventListener('click', function(){
  (!watch.isOn) ? start() : stop()
})

resetBtn.addEventListener('click', function(){
  watch.reset()
  toggleStartBtn.textContent = "start"
})


modeBtn.addEventListener('click', function(){
   mode.change()
})


toggleStopwatch.addEventListener('click', function(){
  toggleStopwatch.textContent = "stopwatch"
  progressBarChild.style.animation = "progressBar .7s ease-in-out"
  stopwatchBox.style.display = "none"
  timerBox.style.display = "flex"
})




function Timer(){

}



var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  console.log( days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ");
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


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

  this.isOn = false

  this.start = function start(){
    if(!this.isOn) {
      interval = window.setInterval(update, 100);
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


/***/ })

/******/ });