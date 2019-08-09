import {stopwatch} from './modules/_stopwatch'

    let secondEl = document.querySelector('.js-second-num')
    let minuteEl = document.querySelector('.js-minute-num')
    let hourEl = document.querySelector('.js-hour-num')
    let toggleBtn = document.querySelector('.toggle')
    let resetBtn = document.querySelector('.reset')
    let modeBtn = document.querySelector('.mode')


    let second = 0
    let minute = 0
    let hour = 0

    function callTimer(){
          second ++ 

          if(second / 60 === 1) {
            second = 0
            minute ++
          }

          if(minute / 60 === 1) {
            minute = 0
            hour ++
          }

          if(second < 10) {
            secondEl.textContent = `0${second}`
          } else {
            secondEl.textContent = second
          }


          if(minute < 10) {
            minuteEl.textContent = `0${minute}`
          } else {
            minuteEl.textContent = minute
          }

          if(hour < 10) {
            hourEl.textContent = `0${hour}`
          } else {
            hourEl.textContent = hour
          }
    }


    let interval = null
    let status = "stopped"

    toggleBtn.addEventListener('click', startStop)
    function startStop(){

      if(status === "stopped") {

        interval = window.setInterval(callTimer, 10);
        toggleBtn.textContent = "stop"
        status = "started"
      } 
      else {

        window.clearInterval(interval)
        toggleBtn.textContent = "start"
        status = "stopped"
      }
    }


    let mode = "white"

    modeBtn.addEventListener('click', changeMode)
    function changeMode(){
        let body = document.querySelector('body')
        let progressBar = document.querySelector('.js-progress-bar')
        let buttons = document.querySelectorAll('.btn')


        if(mode === "white") {
          body.classList.add('js-toggle-body')
          progressBar.classList.add('js-toggle-progress')
          buttons.forEach(btn => btn.classList.add('js-toggle-btn'))
          modeBtn.textContent = "white mode"
          mode = "dark"
        }
        else {
          body.classList.remove('js-toggle-body')
          progressBar.classList.remove('js-toggle-progress')
          buttons.forEach(btn => btn.classList.remove('js-toggle-btn'))
          modeBtn.textContent = "dark mode"
          mode = "white"
        }
    }


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


