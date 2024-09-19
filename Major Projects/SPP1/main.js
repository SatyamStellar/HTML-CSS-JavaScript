gsap.to(".vid_div", {
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
  },
  '--clip': "0%",
  ease: Power2,
  duration: 2,
})