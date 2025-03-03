import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ServiceAnimation = ()=>{
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline(
            {scrollTrigger: {
            scrub: 2,
            scroller: "body",
            trigger: ".Services-section",
            start: "20% 90%",
            end: "100% 100%", 
            // markers: true
          }}
        );
        const tl1 = gsap.timeline(
            {scrollTrigger: {
            scrub: 3,
            scroller: "body",
            trigger: ".Services-content-section",
            start: "10% 80%",
            end: "50% 100%",
            // markers: true
          }}
        );
        const tl2 = gsap.timeline( 
            {scrollTrigger: {
            scrub: 3,
            scroller: "body",
            trigger: ".Services-content-section",
            start: "20% 50%",
            end: "50% 80%",
            // markers: true
          }}
        );
        tl.from(".Services-section h1", {
         opacity:0,
          y:200,
         overflow:"hidden",
          stagger:0.5

          })
          tl1.from(".Services-about-text-container", {
           scale:0,
           stagger:0.9,
           duration:4,
          })
          tl1.from(".experience-box", {
            scale:0,
            stagger:0.9,
            duration:2 
          })
          tl2.from(".service-responsive-screenshot, .service-code-screenshot", {
          opacity:0,
          y:200,
          duration:2 ,
          scale:0,
          })
         
       
    })} 
export default ServiceAnimation;

