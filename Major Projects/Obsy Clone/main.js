import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    .from(".sec1", {
      y: 1600,
      opacity: 0,
      ease: "power4",
      duration: 1
    })
    .to(".loader", {
      display: "none"
    });
}

const buttons = document.querySelectorAll('nav a');

buttons.forEach(button => {
  let boundingRect = button.getBoundingClientRect();

  window.addEventListener('resize', () => {
    boundingRect = button.getBoundingClientRect();
  });

  button.addEventListener('mousemove', (e) => {
    const mousePosX = e.clientX - boundingRect.left;
    const mousePosY = e.clientY - boundingRect.top;

    gsap.to(button, {
      x: (mousePosX - boundingRect.width / 2) * 1,
      y: (mousePosY - boundingRect.height / 2) * 1,
      duration: 0.8,
      ease: 'power3.out',
    });
  });

  button.addEventListener('mouseleave', () => {

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});
