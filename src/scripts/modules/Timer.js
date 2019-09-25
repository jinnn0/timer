import * as htmlEls from './htmlElements'

export function Timer(usrInput){
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

      htmlEls.timerSecondEl.value = null
      htmlEls.timerMinuteEl.value = null
      htmlEls.timerHourEl.value = null

      htmlEls.timerProgressBarChild.style.transform = "translateX(-100%)"
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
    
    htmlEls.timerSecondEl.value = (formattedSeconds.length < 2) ? `0${formattedSeconds}` : formattedSeconds;
    htmlEls.timerMinuteEl.value = (formattedMinutes.length < 2) ? `0${formattedMinutes}` : formattedMinutes;
    htmlEls.timerHourEl.value = (formattedHours.length < 2) ? `0${formattedHours}` : formattedHours;

    if(countDownMilliseconds < 0) {
        this.stop()
        htmlEls.timerSecondEl.value = "00"
        htmlEls.timerMinuteEl.value = "00"
        htmlEls.timerHourEl.value = "00"
    }
  }

  let defaultTransform = -100
  let updateProgressBar = ()=>{
    if(this.isOn) {
      let initialcountDownMilliseconds = seconds + minutes + hours
      let progress = ((initialcountDownMilliseconds-remaining) / initialcountDownMilliseconds) * 100
      let moveToRight = defaultTransform + progress 
      htmlEls.timerProgressBarChild.style.transform = `translateX(${moveToRight}%)`
    }
  }
} 
