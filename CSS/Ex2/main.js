const cancel = () => {
    var form = document.getElementById('form')
    form.reset()
}

const toggleMenu = () => {
    var toggle = document.getElementById('side-bar')
    var container = document.getElementById('container')
    toggle.style.display = "none";
    container.style.left = "156px";
  }
