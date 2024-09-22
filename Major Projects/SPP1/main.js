function homePageAnimation() {
  gsap.set(".slidem", {
    scale: 5
  })

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    }
  });

  tl
    .to(".vid_div", {
      '--clip': "0%",
      ease: Power2,
    }, 'a')
    .to(".slidem", {
      scale: 1,
      ease: Power2
    }, 'a')
    .to(".lft", {
      xPercent: -10,
      ease: Power2,
      stagger: .03
    }, 'b')
    .to(".rgt", {
      xPercent: 10,
      ease: Power2,
      stagger: .03
    }, 'b')
}

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      markers: true,
      scrub: 1.5
    },
    x: "-200%",
    ease: Power4
  })
}



homePageAnimation();
realPageAnimation();