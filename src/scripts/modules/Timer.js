export function Timer(countdown, tSecond, tMinute, tHour){

  let timer = countdown
  let second, minute, hour
  let interval = null

  let update = function(){
    second = parseInt(timer % 60, 10)
    minute = (timer >= 3600) ? parseInt((timer /60) % 60, 10) : parseInt(timer / 60, 10)
    hour = parseInt(timer / 3600, 10)

    tSecond.textContent = (second < 10) ? `0${second}` : second;
    tMinute.textContent = (minute < 10) ? `0${minute}` : minute;
    tHour.textContent = (hour < 10) ? `0${hour}` : hour;

    if(timer -- < 0) {
      timer = countdown
    }
}

  this.isOne = false

  this.start = function (){
    if(!this.isOn) {
      interval = window.setInterval(update, 1000)
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
    second = 0
    minute = 0
    hour = 0

    tSecond.textContent = "00"
    tMinute.textContent = "00"
    tHour.textContent = "00"
    this.isOn = false
  }
}
