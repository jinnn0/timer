export function Timer(usrInput){
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
