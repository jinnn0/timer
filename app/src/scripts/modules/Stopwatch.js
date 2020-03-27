import * as htmlEls from './htmlElements'

export function Stopwatch(){
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
    
    htmlEls.stopWatchMillSecondEl.textContent = (millSeconds.length < 2) ? `0${millSeconds}` : millSeconds;
    htmlEls.stopWatchSecondEl.textContent = (seconds.length < 2) ? `0${seconds}` : seconds;
    htmlEls.stopWatchMinuteEl.textContent = (minutes.length < 2) ? `0${minutes}` : minutes;
    htmlEls.stopWatchHourEl.textContent = (hours.length < 2) ? `0${hours}` : hours;
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

    htmlEls.stopWatchMillSecondEl.textContent = "00"
    htmlEls.stopWatchSecondEl.textContent = "00"
    htmlEls.stopWatchMinuteEl.textContent = "00"
    htmlEls.stopWatchHourEl.textContent = "00"
  }
}