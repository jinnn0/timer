import '../styles/style.scss';

import * as htmlElements from './modules/htmlElements';
import runStopwatch from './modules/runStopwatch';
import runTimer from './modules/runTimer';
import Mode from './modules/Mode';

let mode = new Mode();
let isTimerMode = false;

runStopwatch();
runTimer();

// common functionality
htmlElements.modeBtns.forEach((modeBtn) =>
  modeBtn.addEventListener('click', () => {
    mode.change();
  })
);

htmlElements.toggleAppBtns.forEach((toggleAppBtn) =>
  toggleAppBtn.addEventListener('click', () => {
    if (!isTimerMode) {
      htmlElements.toggleAppBtns.forEach((toggleAppBtn) => (toggleAppBtn.textContent = 'stopwatch'));
      htmlElements.appTimer.style.display = 'flex';
      htmlElements.appStopwatch.style.display = 'none';
      htmlElements.progressBarChildren.forEach(
        (a) => (a.style.animation = 'progressBar .7s ease-in-out forwards')
      );
      setTimeout(() => {
        htmlElements.progressBarChildren.forEach((a) => (a.style.animation = null));
      }, 500);
      isTimerMode = true;
    } else {
      htmlElements.toggleAppBtns.forEach((toggleAppBtn) => (toggleAppBtn.textContent = 'timer'));
      htmlElements.appTimer.style.display = 'none';
      htmlElements.appStopwatch.style.display = 'flex';
      htmlElements.progressBarChildren.forEach(
        (a) => (a.style.animation = 'progressBar .7s ease-in-out forwards')
      );
      setTimeout(() => {
        htmlElements.progressBarChildren.forEach((a) => (a.style.animation = null));
      }, 500);
      isTimerMode = false;
    }
  })
);
