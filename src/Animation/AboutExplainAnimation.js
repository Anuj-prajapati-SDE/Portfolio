import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutExplainAnimation = () => {
  // gsap.registerPlugin(ScrollTrigger)
  const windowWidth = window.innerWidth;
  if(windowWidth>550){
    useEffect(() => { 
      const tl = gsap.timeline();
      tl.add("same-time-pin"); 
      const  AboutExplainPin= gsap.context(() => {
        tl.to( 
          ".About-Explain-section .About-Explain:nth-child(1)",
          { 
              position: "relative",     
             duration: 1,
            top:"-300px",
            scrollTrigger: {
              trigger: ".About-Explain-section", 
              scroller: "body",
              start: "5% 11%", 
              scrub: 2,
              end: "bottom 20%",
            // markers:true,
              pin: true, 
            }
          }
        ) 
        tl.to( 
          ".About-Explain-section .About-Explain:nth-child(2)",
          { 
              position: "relative",     
            opacity:0,
            scrollTrigger: {
              trigger: ".About-Explain-section",
              scroller: "body",
              start: "5% 11%",
              scrub: 2,
              end: "30% 20%", 
              // markers:true
            }
          }
        )
  
        tl.to(
          ".About-Explain-section .About-Explain:nth-child(3)",
          {  
              position: "relative",     
             duration: 1,
            top:"500px",
            scrollTrigger: {
              trigger: ".About-Explain-section",
              scroller: "body",
              start: "5% 11%", 
              scrub: 2,
              end: "bottom 20%",
            }
          }
        )
        tl.to(
          ".About-thinking",
          { 
            scale:1, 
            opacity:1,
            scrollTrigger: {
              trigger: ".About-Explain-section",
              scroller: "body",
              start: "5% 11%",
              end: "bottom 20%",
              scrub: 2,
              // markers:true
            }
          }
        )
      }
      )
      return () => [AboutExplainPin.revert()];
  } 
  ,[])
  }

}
export default AboutExplainAnimation