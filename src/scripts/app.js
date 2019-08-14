import {Stopwatch} from './modules/Stopwatch'
import {Mode} from './modules/Mode'

 
let millSecondEl = document.querySelector('.js-millsecond-num')
let secondEl = document.querySelector('.js-second-num')
let minuteEl = document.querySelector('.js-minute-num')
let hourEl = document.querySelector('.js-hour-num')
let toggleStartBtn = document.querySelector('.js-toggleStart')
let resetBtn = document.querySelector('.reset')

// toggle stopwatch or timer
let toggleStopwatch = document.querySelector('.js-toggleStopwatch')
let progressBarChild = document.querySelector('.progress-bar-child')
let stopwatchBox = document.querySelector('.record-container.stopwatch')
let timerBox = document.querySelector('.record-container.timer')

// dark or white mode
let body = document.querySelector('body')
let progressBar = document.querySelector('.js-progress-bar')
let buttons = document.querySelectorAll('.btn')
let modeBtn = document.querySelector('.mode')


let watch = new Stopwatch(millSecondEl, secondEl, minuteEl, hourEl)
let mode = new Mode(body, progressBar, buttons, modeBtn)


function start(){
  watch.start(secondEl, minuteEl, hourEl)
  toggleStartBtn.textContent = "stop"
}

function stop(){
  watch.stop()
  toggleStartBtn.textContent = "start"
}


toggleStartBtn.addEventListener('click', function(){
  (!watch.isOn) ? start() : stop()
})

resetBtn.addEventListener('click', function(){
  watch.reset()
  toggleStartBtn.textContent = "start"
})


modeBtn.addEventListener('click', function(){
   mode.change()
})


toggleStopwatch.addEventListener('click', function(){
  toggleStopwatch.textContent = "stopwatch"
  progressBarChild.style.animation = "progressBar .7s ease-in-out"
  stopwatchBox.style.display = "none"
  timerBox.style.display = "flex"
})




function Timer(){

}



var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  console.log( days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ");
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
