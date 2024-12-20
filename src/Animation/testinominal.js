import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TestinominalAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger:{
        start: "150% 10%",
        end: "180% 20%",
        scrub: 3,
        scroller: "body",
        // markers:true,
        trigger: ".Testimonials-section"
      }
    });
    let tl1 = gsap.timeline();
    tl.from(".Testimonials-section h1", {
        opacity:0,
        y:300,
        stagger:0.3
    })
    tl1.to(".Testimonials-person", {
        opacity:1,
        stagger:0.3,
        scrollTrigger:{
          start: "150%",
          end: "200% ",
          trigger: ".Testimonials-person",
          scrub: 2,
          scroller: "body",
          // markers:true,
          trigger: ".Testimonials-section"
        }
    })
    
})} 
export default TestinominalAnimation; 