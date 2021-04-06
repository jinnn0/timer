import * as htmlElements from './htmlElements';

function Mode() {
  this.isDark = false;

  this.change = () => {
    if (!this.isDark) {
      htmlElements.body.classList.add('js-toggle-body');
      htmlElements.progressBars.forEach((bar) => bar.classList.add('js-toggle-progress'));
      htmlElements.timerInputs.forEach((input) => input.classList.add('js-toggle-input'));
      htmlElements.buttonContainers.forEach((btn) => btn.classList.add('js-toggle-btn'));
      htmlElements.modeBtns.forEach((modeBtn) => (modeBtn.textContent = 'white mode'));
      this.isDark = true;
    } else {
      htmlElements.body.classList.remove('js-toggle-body');
      htmlElements.progressBars.forEach((bar) => bar.classList.remove('js-toggle-progress'));
      htmlElements.timerInputs.forEach((input) => input.classList.remove('js-toggle-input'));
      htmlElements.buttonContainers.forEach((btn) => btn.classList.remove('js-toggle-btn'));
      htmlElements.modeBtns.forEach((modeBtn) => (modeBtn.textContent = 'dark mode'));
      this.isDark = false;
    }
  };
}

export default Mode;
