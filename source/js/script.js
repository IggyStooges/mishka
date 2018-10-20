var navMain = document.querySelector('.page-header__container');
var navToggle = document.querySelector('.page-header__open-menu-btn');
var modalWindow = document.querySelector('.modal-window');
var modalOpen = document.querySelector('.week-item__btn');

navMain.classList.remove('page-header__container--nojs');
navToggle.classList.remove('page-header__open-menu-btn--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__container--closed')) {
    navMain.classList.remove('page-header__container--closed');
    navToggle.classList.add('page-header__open-menu-btn--close');
  } else {
    navMain.classList.add('page-header__container--closed');
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
