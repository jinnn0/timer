import {Stopwatch} from './modules/Stopwatch'
import {Mode} from './modules/Mode'
import {Timer} from './modules/Timer'


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
let watch = new Stopwatch(millSecondEl, secondEl, minuteEl, hourEl)
let mode = new Mode(body, progressBar, buttons, modeBtn)
let timer

let isTimer = false

form.addEventListener('submit', function(e){
  e.preventDefault()
  let userInput = inputEl.value
  let countdown = 60 * userInput

  timer = new Timer(countdown, timerSecond, timerMinute, timerHour)
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
