import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const  ExperienceAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Work-project-section",
        scroller: "body",
        start: "top 70%",
        scrub: 2,
        // markers:true,
        end: "bottom 90%",
      }
    });
    const tl = gsap.timeline();
    const tl0 = gsap.timeline();
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();
    const tl5 = gsap.timeline();
    tl.add("same-time-pin"); 
    const  ExperienceAnimationPin = gsap.context(() => {

      headingTl.from(".Work-project-section h1",{
         opacity:0,
         stagger:0.3,
         y:200,
      })
      tl.to(
        ".project-frame .project-frame-img-frame-1",
        {  
            scaleX:"0",
            scaleY:"0",
          scrollTrigger: {
            trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            markers:true,
            end: "bottom 20%",
            pin: true,
          }
        },
      )
      tl.to(
        ".project-frame .project-frame-img-frame-2",
        {     
            scaleX:"1",
            scaleY:"1",
            stagger:1,
          scrollTrigger: {
            trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
          }
        }
      )      
        
           
     tl0.to(".project-year .year-container .year-1", {
       opacity:0,
       y:-50,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl0.to(" .project-year .year-container .year-2", {
       opacity:1,
       y:-25,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl1.to(".project-role .roles .role-1", {
       opacity:0,
       y:-50,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl1.to(".project-role .roles .role-2", {
       opacity:1,
       y:-20,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl2.to(".projects-description .project-1-description", {
       opacity:0,
       y:-200,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl2.to(".projects-description .project-2-description", {
       opacity:1,
       y:-100,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl3.to(".project-frame-count-name .project-count-name .project-count span .project-count-1", {
       opacity:0,
       y:-50,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl3.to(".project-frame-count-name .project-count-name .project-count span .project-count-2", {
       opacity:1,
       y:-33,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl4.to(".project-frame-count-name .project-name .project-1-name", {
       y:-100,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl4.to(".project-frame-count-name .project-name .project-2-name", {
       y:-80,
       opacity:1,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl5.to(".project-work-frame .img-frames  .project-work-frame-1", {
      height:0,
      duration:0.5,
      scrollTrigger:{
       trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
     tl5.to(".project-work-frame .img-frames  .project-work-frame-2", {
       height:"100%",
       duration:0.5,
      scrollTrigger:{
        trigger: ".Work-project-show-section",
            scroller: "body",
            start: "top 11%",
            scrub: 2,
            // markers:true,
            end: "bottom 20%",
      }
     })
    }
    )  
    return () => [ExperienceAnimationPin.revert()];
}
,[])
}
export default ExperienceAnimation