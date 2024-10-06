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
      scrub: 1.5
    },
    x: "-200%",
    ease: Power4
  })
}

function teamPageAnimation() {
  document.querySelectorAll(".list_items")
    .forEach((elem) => {
      elem.addEventListener("mousemove", (dets) => {

        gsap.to(elem.querySelector(".picture"), {
          opacity: 1,
          x: gsap.utils.mapRange(0, innerWidth, -200, 200, dets.clientX),
          ease: Power4,
        })
      })
      elem.addEventListener("mouseleave", (dets) => {
        gsap.to(elem.querySelector(".picture"), {
          opacity: 0,
          ease: Power4,

        })
      })
    })

}

function paraPageAnimation() {

  let clutter = "";
  document.querySelector(".textpara")
    .textContent.split("")
    .forEach((e) => {
      if (e === " ") clutter += `<span>&nbsp;</span>`
      clutter += `<span>${e}</span>`
    })
  document.querySelector(".textpara").innerHTML = clutter

  gsap.set(".textpara span", {
    opacity: .1,
  })

  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".paras",
      start: "top 70%",
      end: "bottom 80%",
      scrub: 2,
    },
    opacity: 1,
    stagger: 0.1,
    ease: Power4
  })

}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}


document.querySelectorAll(".section").forEach((e) => {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => {
      document.body.setAttribute("theme", e.dataset.col)
    },
    onEnterBack: () => {
      document.body.setAttribute("theme", e.dataset.col)
    }
  })
})


loco();
homePageAnimation();
realPageAnimation();
teamPageAnimation();
paraPageAnimation();