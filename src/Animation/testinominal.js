import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TestinominalAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger:{
        start: "20% 80%",
        end: "60% 100%",
        scrub: 3,
        scroller: "body",
        // markers:true,
        trigger: ".Testimonials-section"
      }
    });
    tl.from(".Testimonials-section h1", {
        opacity:0,
        y:300,
        stagger:0.3
    })
   
    
})} 
export default TestinominalAnimation; 