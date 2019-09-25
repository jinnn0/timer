import * as htmlEls from './htmlElements'

export function Mode(){
  this.isDark = false
   
  this.change = () => {
    if(!this.isDark) {
      htmlEls.body.classList.add('js-toggle-body')
      htmlEls.progressBars.forEach(bar => bar.classList.add('js-toggle-progress'))
      htmlEls.timerInputs.forEach(input => input.classList.add('js-toggle-input'))
      htmlEls.buttonContainers.forEach(btn => btn.classList.add('js-toggle-btn'))
      htmlEls.modeBtns.forEach(modeBtn => modeBtn.textContent = "white mode")
      this.isDark = true
    } else {
        htmlEls.body.classList.remove('js-toggle-body')
        htmlEls.progressBars.forEach(bar => bar.classList.remove('js-toggle-progress'))
        htmlEls.timerInputs.forEach(input => input.classList.remove('js-toggle-input'))
        htmlEls.buttonContainers.forEach(btn => btn.classList.remove('js-toggle-btn'))
        htmlEls.modeBtns.forEach(modeBtn => modeBtn.textContent = "dark mode")
        this.isDark = false
    }
  }
}
