const waitForMe = gsap.delayedCall(1.2, goAgain);

gsap.set('.card__box', {
   autoAlpha: 1, 
})

function goAgain() {
   gsap.to('.card__box', {
      autoAlpha: 1, 
      duration: 2,
      rotateY: 360,
      stagger: {
      each: 3,
      from: 'random'
      },
   onComplete:() => waitForMe.restart(true)
   });
}


