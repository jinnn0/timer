import * as htmlElements from './htmlElements'
import Stopwatch from './Stopwatch'

let stopwatch = new Stopwatch()

function runStopwatch(){
  // start / stop 
  htmlElements.toggleStartStopwatch.addEventListener('click', (e)=>{
    if(!stopwatch.isOn) {
      stopwatch.start()
      e.target.textContent = "stop"
    } else {     
      stopwatch.stop()
      e.target.textContent = "start"
    }
  }) 
   
  // reset
  htmlElements.resetStopwatch.addEventListener('click', ()=>{
    stopwatch.reset() 
    htmlElements.toggleStartStopwatch.textContent = "start"
  })
}

export default runStopwatch