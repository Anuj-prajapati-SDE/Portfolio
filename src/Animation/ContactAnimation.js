import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ContactAnimation = () => {
    const windowWidth =window.innerWidth;
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        if(windowWidth>550){
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 3,
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
    } 
    else{
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 3,
                scroller: "body", 
                trigger: ".contact-section",
                start: "10% 90%",
                end: "30% 100%",
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
    }           
                
           
    })
}
export default ContactAnimation; 