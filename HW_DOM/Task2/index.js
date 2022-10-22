const popupLink = document.querySelector('#popup__link');
let popup = document.querySelector('.popup');

popupLink.addEventListener('click', function(e) {
   popup.classList.toggle('open');
   popupLink.classList.toggle('hidden');
});