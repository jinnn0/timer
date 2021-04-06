import * as htmlElements from './htmlElements';
import Timer from './Timer';

let timer;
let timerUserInput;
let isTimerUserInputSubmitted = false;

function runTimer() {
  // changing focus to next input field
  for (let i = 0; i < htmlElements.timerInputs.length; i++) {
    htmlElements.timerInputs[i].addEventListener('input', function (e) {
      if (this.value.length == 2) {
        let nextNext = this.nextElementSibling.nextElementSibling;
        if (nextNext && nextNext.type == 'text') {
          this.blur();
          nextNext.focus();
        }
      } else if (this.value.length == 0) {
        let previous = this.previousElementSibling;
        if (!previous) {
          return;
        }
        let previousPrevious = this.previousElementSibling.previousElementSibling;
        if (previousPrevious && previousPrevious.type == 'text') {
          this.blur();
          previousPrevious.focus();
        }
      }
    });
  }

  // click to submit and start the timer on mobile device
  htmlElements.timerSubmitButton.addEventListener('click', () => {
    if (isTimerUserInputSubmitted && !timer.isOn) {
      startTimer();
    } else {
      stopTimer();
    }
  });

  // click "start" button or press "enter" to submit and start the timer
  htmlElements.timerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let timerInputs = htmlElements.timerInputs;

    for (let i = 0; i < timerInputs.length; i++) {
      timerUserInput = {
        hours: timerInputs[0].value,
        minutes: timerInputs[1].value,
        seconds: timerInputs[2].value
      };
    }

    let inputsCombined = timerUserInput.hours + timerUserInput.minutes + timerUserInput.seconds;
    let useInput = inputsCombined.trim();

    if (useInput) {
      timer = new Timer(timerUserInput);
      isTimerUserInputSubmitted = true;
      startTimer();
      removeTimerSubmitButton();
      htmlElements.timerInputs.forEach((input) => input.blur());
    } else {
      console.log('insert input value.');
    }
  });

  htmlElements.toggleStartTimer.addEventListener('click', () => {
    if (isTimerUserInputSubmitted && !timer.isOn) {
      console.log('start timer function...');
      startTimer();
    } else {
      console.log('stop timer function...');
      stopTimer();
    }
  });

  // reset
  htmlElements.resetTimer.addEventListener('click', () => {
    timer.reset();
    htmlElements.toggleStartTimer.textContent = 'start';
    isTimerUserInputSubmitted = false;
  });

  function startTimer() {
    timer.start();
    htmlElements.toggleStartTimer.textContent = 'stop';
  }

  function stopTimer() {
    timer.stop();
    htmlElements.toggleStartTimer.textContent = 'start';
  }

  function removeTimerSubmitButton() {
    htmlElements.timerSubmitButton.style.display = 'none';
    htmlElements.toggleStartTimer.style.display = 'block';
  }
}

export default runTimer;
