import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TestinominalAnimation = () => {
  const windowWidth =window.innerWidth;
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {

    if(windowWidth>550){
      let tl = gsap.timeline({
        scrollTrigger:{
          start: "420% 100%",
          end: "200% 80%",
          scrub: 3, 
          scroller: "body",
          // markers:true,
          trigger: ".Testimonials-heading"
        }
      });
      tl.from("#testimonials h1", {
          opacity:0,
          y:300, 
          stagger:0.3
      })
    }
    else{
      let tl = gsap.timeline();
      tl.from("#testimonials h1", {
        opacity:0,
        y:300, 
        stagger:0.3, 
        scrollTrigger:{
          start: "-10% 90%", 
          end: '80% 60%',
          scrub: 3, 
          scroller: "body",
          // markers:true,
          trigger: ".Testimonials-section"
        }
        
    })
 
    }
      
})} 
export default TestinominalAnimation; 