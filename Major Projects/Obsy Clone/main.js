import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  .to(".loader", {
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