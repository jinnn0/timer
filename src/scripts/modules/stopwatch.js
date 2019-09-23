export function Stopwatch(){
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