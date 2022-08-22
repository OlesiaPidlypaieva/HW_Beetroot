let header__burger = document.querySelectorAll('.header__burger,.header__link');
let header__nav = document.querySelector('.header__nav');
let back = document.querySelector('body');

header__burger.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      header__nav.classList.toggle('active');
      back.classList.toggle('lock');
   }
});