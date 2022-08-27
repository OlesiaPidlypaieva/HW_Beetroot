
let nav__button = document.querySelectorAll('.side-bar__button');
let nav__main = document.querySelector('.nav__main-nav');
let body = document.querySelector('.body');

nav__button.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      nav__main.classList.toggle('active');
      body.classList.toggle('active');
   }
});

