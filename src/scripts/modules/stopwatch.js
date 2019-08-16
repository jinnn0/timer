export function Stopwatch(millSecondEl, secondEl, minuteEl, hourEl) {
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
    secondEl.textContent = (second < 10) ? `0${second}` : second;
    minuteEl.textContent = (minute < 10) ? `0${minute}` : minute;
    hourEl.textContent = (hour < 10) ? `0${hour}` : hour;
}

  this.isOn = false

  this.start = function (){
    if(!this.isOn) {
      interval = window.setInterval(update, 100);
      this.isOn = true
    } 
  }

  this.stop = function (){
    if(this.isOn) {
      window.clearInterval(interval)
      this.isOn = false
    }
  }

  this.reset = function (){
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
