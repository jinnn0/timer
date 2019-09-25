// toggle bewtween stopwatch and timer
export let toggleAppBtns = document.querySelectorAll('.js-toggle-app')
export let progressBarChildren = document.querySelectorAll('.progress-bar-child')
export let appStopwatch = document.querySelector('.app.stopwatch')
export let appTimer = document.querySelector('.app.timer')


// stopwatch elements 
export let stopWatchMillSecondEl = document.querySelector('.stopwatch .js-millsecond-num')
export let stopWatchSecondEl = document.querySelector('.stopwatch .js-second-num')
export let stopWatchMinuteEl = document.querySelector('.stopwatch .js-minute-num')
export let stopWatchHourEl = document.querySelector('.stopwatch .js-hour-num')


// timer elements 
export let timerForm = document.querySelector('.form')
export let timerInputs = document.querySelectorAll('.form input[type="text"]')
export let timerSecondEl = document.querySelector('.timer .seconds')
export let timerMinuteEl = document.querySelector('.timer .minutes')
export let timerHourEl = document.querySelector('.timer .hours')
export let timerProgressBarChild = document.querySelector('.timer .js-progress-bar-timer-child')


// startStop button, reset button
export let toggleStartBtns = document.querySelectorAll('.js-toggleStart')
export let toggleStartStopwatch = document.querySelector('.stopwatch .js-toggleStart')
export let toggleStartTimer = document.querySelector('.timer .js-toggleStart')
export let resetBtns = document.querySelectorAll('.reset')

// dark or white mode
export let body = document.querySelector('body')
export let progressBars = document.querySelectorAll('.js-progress-bar')
export let buttonContainers = document.querySelectorAll('.btn')
export let modeBtns = document.querySelectorAll('.mode')