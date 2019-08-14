export function Mode(body, progressBar, buttons, modeBtn){
  let isDark = false

  this.change = function(){
    if(!isDark) {
      body.classList.add('js-toggle-body')
      progressBar.classList.add('js-toggle-progress')
      buttons.forEach(btn => btn.classList.add('js-toggle-btn'))
      modeBtn.textContent = "white mode"
      isDark = true
    } else {
      body.classList.remove('js-toggle-body')
      progressBar.classList.remove('js-toggle-progress')
      buttons.forEach(btn => btn.classList.remove('js-toggle-btn'))
      modeBtn.textContent = "dark mode"
      isDark = false
    }
  }
}