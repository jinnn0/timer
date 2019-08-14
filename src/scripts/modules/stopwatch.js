export function Stopwatch(secondEl, minuteEl, hourEl) {
  let interval = null 
  let offset;
  let current;
  let second = 0
  let minute = 0
  let hour = 0
  let time = 0

  let delta = function(){
    let now = Date.now()
    let timePassed = now - offset
    offset = now

    return timePassed
  }

  let timeFormatter = function(timeMilliseconds){
    let time = new date(timeMilliseconds)
    let second = time.getSeconds()
    let minute = time.getMinutes()
    let hour = time.getHours()
  }

  let update = function(){
    time += delta()
    let formattedTime = timeFormatter(time)
    console.log(formattedTime);

    // second ++ 

    // if(second / 60 === 1) {
    //   second = 0
    //   minute ++
    // }

    // if(minute / 60 === 1) {
    //   minute = 0
    //   hour ++
    // }

    // if(second < 10) {
    //   secondEl.textContent = `0${second}`
    // } else {
    //   secondEl.textContent = second
    // }

    // if(minute < 10) {
    //   minuteEl.textContent = `0${minute}`
    // } else {
    //   minuteEl.textContent = minute
    // }

    // if(hour < 10) {
    //   hourEl.textContent = `0${hour}`
    // } else {
    //   hourEl.textContent = hour
    // }
  }


  this.isOn = false

  this.start = function start(){
    if(!this.isOn) {
      interval = window.setInterval(update, 10);
      offset = Date.now()
      this.isOn = true
    } 
  }

  this.stop = function stop(){
    if(this.isOn) {
      window.clearInterval(interval)
      this.isOn = false
    }
  }

  this.reset = function reset(){
    window.clearInterval(interval)
    second = 0
    minute = 0
    hour = 0

    secondEl.textContent = "00"
    minuteEl.textContent = "00"
    hourEl.textContent = "00"
    this.isOn = false
  }
}
