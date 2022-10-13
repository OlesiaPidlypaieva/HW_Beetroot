//fancybox

Fancybox.bind('[data-fancybox="gallery"]', {
   caption: function (fancybox, carousel, slide) {
      return (
         `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
   },
});

//swiper
//main swiper
const pageSwiper = new Swiper('#pageSwiper', {
   wrapperClass: "page__wrapper",
   slideClass: "page__screen",
   direction: 'vertical',
   slidesPerView: 'auto',

   keyboard: {
      enabled:true,
      onlyInViewport:true,
      pageUpDown:true,
   },

   mousewheel: {
      sensitivity:1,
   },

   watchOverflow:true,
   speed:900,
   observer:true,
   observeParents:true,
   observeSlideChildren:true,

   pagination: {
      el: '.page__pagination',
      type: 'bullets',
      clickable:true,
      bulletClass: 'page__bullet',
      bulletActiveClass: 'page__bullet_active',
   },

   init:false,

   on: {
      init: function(){
         menuSlider();
      },

      slideChange: function(){
         menuSliderRemove()
         menuLinks [pageSwiper.realIndex].classList.add('active');
      }
   },
});


let pagination = $('.page__pagination');
let bullet = $('.page__bullet');
let screen = $('.page__screen');


$(document).on('mousewheel', screen, function(){
   if ((bullet.attr('aria-label') == "Go to slide 1") && (bullet.attr('aria-current') == "true")) {
      pagination.toggleClass('light');
   } else {
      pagination.removeClass('light');
   }
}
)

$(document).ready(function() {
   if ((bullet.attr('aria-label') == "Go to slide 1") && (bullet.attr('aria-current') == "true")) {
   pagination.toggleClass('light');
   }
})

//header links

let menuLinks = document.querySelectorAll('.navigation__link');

function menuSlider(){
   if(menuLinks.lenth > 0) {
      menuLinks [pageSwiper.realIndex].classList.add('active');
      for (let index = 0; index < menuLinks.lenth; index++) {
         const menuLink = menuLinks[index];
         menuLink.addEventListener("click", function (e) {
            menuSliderRemove();
            pageSwiper.slideTo(index , 800);
            menuLink.classList.add('active')
            e.preventDefault();
         })
      }
   }
}

function menuSliderRemove() {
   let menuLinkActive = document.querySelectorAll('.navigation__link.active');
   if(menuLinkActive) {
      menuLinkActive.classList.remove('active');
   }
}

pageSwiper.init();

//swiper news

const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: '3',
   pagination: {
      el: '.swiper-pagination',
   },
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
   swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
   swiper.slideNext();
})

//animation

const wow = new WOW({
   boxClass: 'wow',
   animateClass: 'animate__animated',  
   mobile: false, 
   live: true 
})
wow.init(); 

//maps

function Map() {
   let mapProp = {
      zoom:13,
      center: {lat: 40.670068, lng:-73.8974411778513},
      styles: [
         {
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#f5f5f5"
               }
            ]
            },
            {
            "elementType": "labels.icon",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#616161"
               }
            ]
            },
            {
            "elementType": "labels.text.stroke",
            "stylers": [
               {
                  "color": "#f5f5f5"
               }
            ]
            },
            {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#bdbdbd"
               }
            ]
            },
            {
            "featureType": "poi",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#eeeeee"
               }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#757575"
               }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#e5e5e5"
               }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#9e9e9e"
               }
            ]
            },
            {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#ffffff"
               }
            ]
            },
            {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "road.arterial",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#757575"
               }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#dadada"
               }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#616161"
               }
            ]
            },
            {
            "featureType": "road.local",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#9e9e9e"
               }
            ]
            },
            {
            "featureType": "transit",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
            },
            {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#e5e5e5"
               }
            ]
            },
            {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#eeeeee"
               }
            ]
            },
            {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#c9c9c9"
               }
            ]
            },
            {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#9e9e9e"
               }
            ]
            }
         ]       
   };
   let map = new google.maps.Map(document.getElementById('map'),mapProp); 
   new google.maps.Marker ({
      position: {lat: 40.678872, lng: -73.896542},
      map,
      title: "You can find us here",
      icon: 'file:src/img/5.Contact/mapicon.svg'
   })
}

//form

document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('form')
   form.addEventListener('submit', function (e){
      e.preventDefault();
      let error = formValidate(form);

      if (error === 0) {
            alert('Our manager will contact you soon!')
      } else {
            alert('Please, fill required filds...')
            }
   });

   function formValidate (form) {
      let error = 0;
      let formReq = document.querySelectorAll('.req');
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
}

   function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

   function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});
