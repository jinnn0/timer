export function reset(){
  resetBtn.addEventListener('click', stopTimer)
  function stopTimer(){
    window.clearInterval(interval)
    second = 0
    minute = 0
    hour = 0
    toggleBtn.textContent = "start"
    secondEl.textContent = "00"
    minuteEl.textContent = "00"
    hourEl.textContent = "00"
  }
}