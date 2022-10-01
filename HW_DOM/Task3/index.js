
let lightColour = document.getElementsByClassName('traffic-color');
let button = document.querySelector('#button');
console.log(lightColour);

let item = 0;
button.onclick = function light () {
   item++;
   if (item == 1) {
      lightColour[0].classList.add('active'); 
   }
   else if (item == 2) {
      lightColour[0].classList.remove('active');
      lightColour[1].classList.add('active');
   }
   else if (item == 3) {
      lightColour[0, 1].classList.remove('active');
      lightColour[2].classList.add('active');
   }
   else if (item > 3) {
      lightColour[0, 1, 2].classList.remove('active');
      item = 0;
      light ();
   }
}
