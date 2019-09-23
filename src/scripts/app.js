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
let watch = new Stopwatch()
let mode = new Mode(body, progressBars, inputs, buttonContainers, modeBtns)
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
  timer = new Timer(usrInput)
  timer.start()
  toggleStartTimer.textContent = "stop"
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
