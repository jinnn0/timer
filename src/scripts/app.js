import {Stopwatch} from './modules/Stopwatch'
import {Mode} from './modules/Mode'

 
let secondEl = document.querySelector('.js-second-num')
let minuteEl = document.querySelector('.js-minute-num')
let hourEl = document.querySelector('.js-hour-num')
let toggleBtn = document.querySelector('.toggle')
let resetBtn = document.querySelector('.reset')
let modeBtn = document.querySelector('.mode')

let body = document.querySelector('body')
let progressBar = document.querySelector('.js-progress-bar')
let buttons = document.querySelectorAll('.btn')


let watch = new Stopwatch(secondEl, minuteEl, hourEl)
let mode = new Mode(body, progressBar, buttons, modeBtn)


function start(){
  watch.start(secondEl, minuteEl, hourEl)
  toggleBtn.textContent = "stop"
}

function stop(){
  watch.stop()
  toggleBtn.textContent = "start"
}


toggleBtn.addEventListener('click', function(){
  (!watch.isOn) ? start() : stop()
})

resetBtn.addEventListener('click', function(){
  watch.reset()
  toggleBtn.textContent = "start"
})


modeBtn.addEventListener('click', function(){
   mode.change()
})