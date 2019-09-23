export function Timer(usrInput){
  let secondEl = document.querySelector('.timer .js-second-num')
  let minuteEl = document.querySelector('.timer .js-minute-num')
  let hourEl = document.querySelector('.timer .js-hour-num')
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
    if(this.isOn){
      countDownMilliseconds = 0
      clearInterval(interval) 
      interval = null 
      this.isOn = false
      
      secondEl.textContent = "00"
      minuteEl.textContent = "00"
      hourEl.textContent = "00"
    }
  }

  let update = ()=>{
    if(this.isOn) {
      timeFormatter()
      updateProgressBar()

      remaining = countDownMilliseconds -= delta()
    }
  }

  let delta = ()=>{
    let now = Date.now()  
    let timePassed = now - offSet 
    offSet = now 

    // console.log("in delta:", countDownMilliseconds);

    return timePassed
  }

  let timeFormatter = ()=>{
    // console.log("in formatter:", countDownMilliseconds);

    let formattedSeconds = Math.floor(Math.round(countDownMilliseconds / 1000) % 60).toString()
    let formattedMinutes = Math.floor(Math.round(countDownMilliseconds / (1000 * 60)) % 60).toString()
    let formattedHours = Math.floor(Math.round(countDownMilliseconds / (1000 * 60 * 60)) % 24).toString()
    
    // console.log(countDownMilliseconds, formattedMinutes);
    secondEl.textContent = (formattedSeconds.length < 2) ? `0${formattedSeconds}` : formattedSeconds;
    minuteEl.textContent = (formattedMinutes.length < 2) ? `0${formattedMinutes}` : formattedMinutes;
    hourEl.textContent = (formattedHours.length < 2) ? `0${formattedHours}` : formattedHours;

    if(formattedSeconds < 0) {
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
