import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const ServiceAnimation = ()=>{
  const windowWidth =window.innerWidth;
    // gsap.registerPlugin(ScrollTrigger)
    if( windowWidth>500){ 
    useGSAP(() => {
        const tl = gsap.timeline(
            {scrollTrigger: {
            scrub: 3,    
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
            start: "5% 80%",
            end: "50% 100%",
            // markers: true
          }}
        );
        tl.from(".Services-section h1", {
         opacity:0,
          y:200,
          duration:2,
         overflow:"hidden",
          stagger:0.5

          })
          tl1.from(".Services-about-text-container", {
           scale:0,
           stagger:0.9,
           duration:2,
          })
          tl1.from(".experience-box", {
            scale:0,
            stagger:0.9,
            duration:1 
          })
   
    })}  

  else{
    useGSAP(() => {
      const tl = gsap.timeline(
          {scrollTrigger: {
          scrub: 3,
          scroller: "body",
          trigger: ".Services-section", 
          start: "20% 90%",
          end: "100% 100%", 
          // markers: true
        }}
      );
      const tl1 = gsap.timeline(
          {scrollTrigger: {
          scrub: 4,
          scroller: "body",
          trigger: ".Services-content-section",
          start: "1% 80%",
          end: "30% 100%",
          // markers: true
        }}
      );
      
      tl.from(".Services-section h1", {
       opacity:0,
        y:200,
        duration:2,
       overflow:"hidden",
        stagger:0.5

        })
        tl1.from(".Services-about-text-container", {
         scale:0,
         stagger:0.9,
         duration:2,
        })
        tl1.from(".experience-box", {
          scale:0,
          stagger:0.9,
          duration:1 
        })      
  })}
  }
export default ServiceAnimation;

