import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
function MarqueeAnimation() {  
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline();
    useGSAP(() => {    
        tl.to(".top-aqua-line .heading-or-folwer", {
            transform:"translateX(-150%)",
            scrollTrigger: {
                trigger: ".top-aqua-line",
                scroller: "body",
                start: "80% 11%",
                end: "200% 20%",
                scrub: 2,
                // markers:true,
            }
        })
        tl.to(".bottom-black-line .heading-or-folwer", {
            transform:"translateX(-150%)",
            scrollTrigger: {
                trigger: ".bottom-black-line",
                scroller: "body",
                start: "80% 11%",
                end: "200% 20%",
                scrub: 2,
                // markers:true,
            }
        })
    })
}

export default MarqueeAnimation
// const marqueeContainer  = document.querySelector(".ScrollSlide-section");
// marqueeContainer.addEventListener('mousemove', (event) => {
//     console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);
// });