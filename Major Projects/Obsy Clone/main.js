function loaderAnimation() {

  gsap.registerPlugin(ScrollTrigger);


  let timer1 = document.querySelector(".timer_num");

  let incnum = 0;



  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: .2,
    delay: .5,
    duration: .6
  })
    .from(".line1_part1 h5 , .line1_part1  span ", {
      opacity: 0,
      onStart: () => {
        setInterval(() => {
          if (incnum < 100) {
            timer1.innerHTML = incnum++;
          } else {
            timer1.innerHTML = incnum;
          }
        }, 30);
      }
    })
    .to(".now_text", {
      animationName: "anime",
      opacity: 1
    })
    .to(".loader, .load_text span", {
      opacity: 0,
      duration: .4,
      delay: 3
    })
    .to(".loader", {
      display: "none"
    })
    .from("main", {
      y: 1600,
      opacity: 0,
      ease: "power4",
      duration: 1
    })
    .from("nav", {
      opacity: 0,
      duration: .2
    })
    .from("#hero1 , #hero2, #hero3 , #hero4 ", {
      y: 80,
      stagger: 0.2,
      opacity: 0,
    })
}

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });




  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1
  });
}

function videoPlay() {
  let clicked = 0;

  let video = document.querySelector("video")
  document.querySelector(".video_container").addEventListener("click", () => {
    if (clicked == 0) {
      video.play();

      document.querySelector("#vid_cur").innerHTML = `<i class="ri-pause-large-line text-xl md:text-4xl"></i>`

      gsap.to(video, {
        opacity: 1
      })
      clicked = 1
    } else {
      video.pause();

      document.querySelector("#vid_cur").innerHTML = `<i class="ri-play-fill text-xl md:text-4xl"></i>`

      gsap.to(video, {
        opacity: 0
      })
      clicked = 0
    }
  })
}

function magnateEffect() {

  const buttons = document.querySelectorAll('nav a, .menu-opener__square ');

  buttons.forEach(button => {
    let boundingRect = button.getBoundingClientRect();

    window.addEventListener('resize', () => {
      boundingRect = button.getBoundingClientRect();
    });

    button.addEventListener('mousemove', (e) => {
      const mousePosX = e.clientX - boundingRect.left;
      const mousePosY = e.clientY - boundingRect.top;

      gsap.to(button, {
        x: (mousePosX - boundingRect.width / 3) * 1,
        y: (mousePosY - boundingRect.height / 3) * 1,
        duration: 0.8,
        ease: 'power3.out',
      });
      console.log(mousePosX, mousePosY);
    });

    button.addEventListener('mouseleave', () => {

      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  })
}

function sheryAnimation() {

  Shery.imageEffect(".img__div", {
    style: 5,
    config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272787057740365 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.15, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.46, "range": [0, 10] }, "metaball": { "value": 0.6, "range": [0, 2] }, "discard_threshold": { "value": 0.73, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.55, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] } },
    gooey: true,
  });
}


function flagMove() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y,
    })
  })

  document.querySelector(".flag_text").addEventListener("mouseenter", (dets) => {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y,
      opacity: 1
    })
  })
  document.querySelector(".flag_text").addEventListener("mouseleave", () => {
    gsap.to("#flag", {
      opacity: 0
    })
  })
}
// loaderAnimation();
locomotiveAnimation();
magnateEffect();
sheryAnimation();
cursorAnimation();
videoPlay();
flagMove();