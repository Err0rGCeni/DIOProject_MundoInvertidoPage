const switcher = document.getElementById("switch-theme-button")

function togglerTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

switcher.addEventListener("click", togglerTheme)
