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
            start: "-5% 30%",
            end: "15% 50%",
            // markers: true
          }}
        );
        // const tl2 = gsap.timeline( 
        //     {}
        // );
        const tl3 = gsap.timeline({
          scrollTrigger: {
            scrub: 1,
            trigger: ".Services-content-section",
            start: "70% 50%",
            end: "110% 70%",
            // markers: true
          }
        });
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
          tl1.from(".service-responsive-screenshot, .service-code-screenshot", {
          opacity:0,
          y:200,
          duration:2,
          scale:0,
          scrollTrigger: {
            scrub: 3,
            scroller: "body",
            trigger: ".Services-content-section", 
            start: "20% 40%",
            end: "30% 60%",
            // markers: true
          }
          })
          tl3.from(".heading-icon", {
            stagger: 0.5,  // Adds delay between each animation
            duration: 1,   // Each animation lasts 1 second
            opacity:1,
            y: 100,        // Moves up from 100px
            scale: 0       // Starts from scale 0
          });
       
    })}  
export default ServiceAnimation;

