import "../styles/style.scss"

import * as htmlEls from './modules/htmlElements'
import {Stopwatch} from './modules/Stopwatch'
import {Mode} from './modules/Mode'
import {Timer} from './modules/Timer'

// Instances    
let isTimer = false   
let watch = new Stopwatch()
let mode = new Mode() 
let timer

let helloThere = 3
console.log(helloThere);

for(let i = 0; i < htmlEls.timerInputs.length; i++) {
  htmlEls.timerInputs[i].addEventListener('input', function(e){
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



htmlEls.timerForm.addEventListener('submit', function(e){
  e.preventDefault();
  let usrInput
  for(let i = 0; i < htmlEls.timerInputs.length; i++){
    usrInput = {
      hours: htmlEls.timerInputs[0].value,
      minutes: htmlEls.timerInputs[1].value,
      seconds: htmlEls.timerInputs[2].value
    }
  }
  timer = new Timer(usrInput)
  timer.start()
  htmlEls.toggleStartTimer.textContent = "stop"

  htmlEls.timerInputs.forEach(input => input.blur())
})

// toggle buttons
htmlEls.toggleStartBtns.forEach(toggleStartBtn =>
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
    htmlEls.toggleStartStopwatch.textContent = "stop"
  } else {
    timer.start()
    htmlEls.toggleStartTimer.textContent = "stop"
  }
}

function stop(){
  if(!isTimer) {
    watch.stop()
    htmlEls.toggleStartStopwatch.textContent = "start"
  } else { 
    timer.stop()
    htmlEls.toggleStartTimer.textContent = "start"
  }
}


htmlEls.resetBtns.forEach(resetBtn => 
  resetBtn.addEventListener('click', () => {
      if(!isTimer) {
      watch.reset()
      htmlEls.toggleStartStopwatch.textContent = "start"
    } else {
      timer.reset()
      htmlEls.toggleStartTimer.textContent = "start"
    }
  })
)


htmlEls.modeBtns.forEach(modeBtn =>
  modeBtn.addEventListener('click', () => {
    mode.change()
    })
)

htmlEls.toggleAppBtns.forEach(toggleAppBtn => 
  toggleAppBtn.addEventListener('click', () => {
      if(!isTimer) {
        htmlEls.toggleAppBtns.forEach(toggleAppBtn => toggleAppBtn.textContent = "stopwatch")
        htmlEls.appTimer.style.display = "flex"
        htmlEls.appStopwatch.style.display = "none"
        htmlEls.progressBarChildren.forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
        setTimeout(() => {htmlEls.progressBarChildren.forEach(a => a.style.animation = null)}, 500);
        isTimer = true
      } else {
          htmlEls.toggleAppBtns.forEach(toggleAppBtn => toggleAppBtn.textContent = "timer")
          htmlEls.appTimer.style.display = "none"
          htmlEls.appStopwatch.style.display = "flex"
          htmlEls.progressBarChildren.forEach(a => a.style.animation = "progressBar .7s ease-in-out forwards")
          setTimeout(() => {htmlEls.progressBarChildren.forEach(a => a.style.animation = null)}, 500);
          isTimer = false
        }
    })
  ) 


