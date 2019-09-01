import {Stopwatch} from './modules/Stopwatch'
import {Mode} from './modules/Mode'
import {Timer} from './modules/Timer'
 

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
let form = document.querySelector('form')
let inputEl = document.querySelector('input')
let timerSecond = document.querySelector('.timer .js-second-num')
let timerMinute = document.querySelector('.timer .js-minute-num')
let timerHour = document.querySelector('.timer .js-hour-num')

// startStop button, reset button
let toggleStartBtns = document.querySelectorAll('.js-toggleStart')
let toggleStartStopwatch = document.querySelector('.stopwatch .js-toggleStart')
let toggleStartTimer = document.querySelector('.timer .js-toggleStart')
let resetBtns = document.querySelectorAll('.reset')

// 
let progressbar = document.querySelector('progress')

// dark or white mode
let body = document.querySelector('body')
let progressBars = document.querySelectorAll('.js-progress-bar')
let buttonContainers = document.querySelectorAll('.btn')
let modeBtns = document.querySelectorAll('.mode')

// Instances 
let watch = new Stopwatch(millSecondEl, secondEl, minuteEl, hourEl)
let mode = new Mode(body, progressBars, buttonContainers, modeBtns)
let timer

let isTimer = false

form.addEventListener('submit', function(e){
  e.preventDefault()
  let userInput = inputEl.value
  let countdown = 60 * userInput

  timer = new Timer(countdown, timerSecond, timerMinute, timerHour, progressbar)
  timer.start()
  toggleStartTimer.textContent = "stop"
  timer.isOn = true
})

toggleStartBtns.forEach(toggleSartBtn =>
  toggleSartBtn.addEventListener('click', function(){
    if(!isTimer){
      (!watch.isOn) ? start() : stop()
    } else {
       (!timer.isOn) ? start() : stop()
    }
  })
)


resetBtns.forEach(resetBtn => 
  resetBtn.addEventListener('click', function(){
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
  modeBtn.addEventListener('click', function(){
    mode.change()
    })
)


toggleAppBtns.forEach(toggleAppBtn => 
  toggleAppBtn.addEventListener('click', function(){
      if(!isTimer) {
        console.log( toggleAppBtn.textContent);
        progressBarChildren.forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
        setTimeout(() => {progressBarChildren.forEach(a => a.style.animation = null)}, 500);
        appStopwatch.style.display = "none"
        appTimer.style.display = "flex"
        toggleAppBtn.textContent = "timer"
        isTimer = true
      } 
      
      else {
        console.log( toggleAppBtn.textContent);
        progressBarChildren.forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
        setTimeout(() => {progressBarChildren.forEach(a => a.style.animation = null)}, 500);
        appStopwatch.style.display = "flex"
        appTimer.style.display = "none"
        toggleAppBtn.textContent = "stopwatch"
        isTimer = false
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


function Progressbar(){


}
// Progressbar()