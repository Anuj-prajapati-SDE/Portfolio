import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutAnimation = () => {
  // gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline();
    const tl1  = gsap.timeline(); 
    tl.to(".img-frame-1", {
      x: 30,
      y: 60,
      scrollTrigger: {
        scrub: 3,
        scroller: "body",
        trigger: ".hero-section",
        start: "20% ",
        end: "100% ",
      }
    })
    tl1.to("svg .svg-elem-26, svg .svg-elem-25, svg .svg-elem-24, svg .svg-elem-23,  svg .svg-elem-22,  svg .svg-elem-21,  svg .svg-elem-20,  svg .svg-elem-19,  svg .svg-elem-18, svg .svg-elem-17, svg .svg-elem-16, svg .svg-elem-15, svg .svg-elem-14, svg .svg-elem-13, svg .svg-elem-12, svg .svg-elem-11, svg .svg-elem-10, svg .svg-elem-9, svg .svg-elem-8, svg .svg-elem-7, svg .svg-elem-6, svg .svg-elem-5, svg .svg-elem-4, svg .svg-elem-3, svg .svg-elem-2, svg .svg-elem-1", {
      fill:"#08afff",
      duration: 0.9,
      scrollTrigger: {
        scrub:2,
        scroller: "body",
        trigger: ".hero-section",
        start: "10% ",
        end: "20% ",
        // markers: true
      }
    })
  })
}

export default AboutAnimation;