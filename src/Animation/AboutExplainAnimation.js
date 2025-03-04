import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutExplainAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)

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
            start: "top 11%",
            scrub: 2,
            end: "bottom 20%",
            markers:true,
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
            start: "top 11%",
            scrub: 2,
            end: "bottom 20%",
          }
        }
      )

      tl.to(
        ".About-Explain-section .About-Explain:nth-child(3)",
        { 
            position: "relative",     
           duration: 1,
          top:"300px",
          scrollTrigger: {
            trigger: ".About-Explain-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
          
            end: "bottom 20%",
          }
        }
      )
    }
    )
    return () => [AboutExplainPin.revert()];
} 
,[])
}
export default AboutExplainAnimation