var navMain = document.querySelector('.main-nav');
var userMenu = document.querySelector('.user-menu');
var navToggle = document.querySelector('.page-header__open-menu-btn');
var modalWindow = document.querySelector('.modal-window');
var modalOpen = document.querySelector('.week-item__btn');

navMain.classList.remove('main-nav--nojs');
userMenu.classList.remove('user-menu--nojs');
navToggle.classList.remove('page-header__open-menu-btn--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed') || userMenu.classList.contains('user-menu--closed')) {
    navMain.classList.remove('main-nav--closed');
    userMenu.classList.remove('user-menu--closed');
    navToggle.classList.add('page-header__open-menu-btn--close');
  } else {
    navMain.classList.add('main-nav--closed');
    userMenu.classList.add('user-menu--closed');
    navToggle.classList.remove('page-header__open-menu-btn--close');
  }
});

modalOpen.addEventListener('click', function () {
  modalWindow.classList.add('modal-window--open');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWindow.classList.contains("modal-window--open")) {
      modalWindow.classList.remove("modal-window--open");
    }
  }
});
