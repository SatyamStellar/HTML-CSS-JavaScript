import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.from(".line h1", {
  y: 150,
  stagger: .2,
})