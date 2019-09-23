export function Mode(body, progressBars, inputs, buttonContainers, modeBtns){
  this.isDark = false
  
  this.change = () => {
    if(!this.isDark) {
      body.classList.add('js-toggle-body')
      progressBars.forEach(bar => bar.classList.add('js-toggle-progress'))
      inputs.forEach(input => input.classList.add('js-toggle-input'))
      buttonContainers.forEach(btn => btn.classList.add('js-toggle-btn'))
      modeBtns.forEach(modeBtn => modeBtn.textContent = "white mode")
      this.isDark = true
    } else {
        body.classList.remove('js-toggle-body')
        progressBars.forEach(bar => bar.classList.remove('js-toggle-progress'))
        inputs.forEach(input => input.classList.remove('js-toggle-input'))
        buttonContainers.forEach(btn => btn.classList.remove('js-toggle-btn'))
        modeBtns.forEach(modeBtn => modeBtn.textContent = "dark mode")
        this.isDark = false
    }
  }
}
