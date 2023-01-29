  // var menu
  var menuMedia = document.querySelector("#menu-media");
  var navbarMenu = document.querySelector(".pages ul");
  var closeMenu = document.querySelector("#close-menu");
  // open cart
  menuMedia.onclick = () => {
    navbarMenu.classList.add("act");
  };
  // close cart
  closeMenu.onclick = () => {
    navbarMenu.classList.remove("act");
  };

// select all
  var selectField = document.getElementById('selectfield')
  var selectText = document.getElementById('selecttext')
  var options = document.getElementsByClassName('options')
  var list = document.getElementById('list')
  var arrowIcon = document.getElementById('arrowIcon')

  selectField.onclick = function() {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate')
  }

  for(option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate')
      }
  }