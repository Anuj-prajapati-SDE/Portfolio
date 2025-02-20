import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ContactAnimation = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 2,
                scroller: "body", 
                trigger: ".contact-section",
                start: "90% 10%",
                end: "120% 30%",
            //    markers:true
              }
        });
        tl.from(".contact-section h1", {
            y:400,
            opacity:0,
            duration:1
        }) 
        tl.from(".contact-link", {
            y:100,
            opacity:0,
            stagger:0.3,

        }
        )            
           
    })
}
export default ContactAnimation; 