export function Mode(body, progressBars, buttonContainers, modeBtns){
  let isDark = false

  this.change = function(){
    if(!isDark) {
      body.classList.add('js-toggle-body')
      progressBars.forEach(bar => bar.classList.add('js-toggle-progress'))
      buttonContainers.forEach(btn => btn.classList.add('js-toggle-btn'))
      modeBtns.textContent = "white mode"
      isDark = true
    } else {
      body.classList.remove('js-toggle-body')
      progressBars.forEach(bar => bar.classList.remove('js-toggle-progress'))
      buttonContainers.forEach(btn => btn.classList.remove('js-toggle-btn'))
      modeBtns.textContent = "dark mode"
      isDark = false
    }
  }
}