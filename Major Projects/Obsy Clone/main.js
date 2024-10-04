
Shery.imageEffect(".img__div", {
  style: 5,
  debug: true,
  gooey: true,
});




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



document.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    top: dets.y,
    left: dets.x,
  })
})
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



// loaderAnimation();
locomotiveAnimation();
magnateEffect();




