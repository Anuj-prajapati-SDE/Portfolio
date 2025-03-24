import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
gsap.registerPlugin(useGSAP);
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const  ExperienceAnimation = (ProjectRightTrue) => {
  // console.log(ProjectRightTrue)
  // gsap.registerPlugin(ScrollTrigger)
  const windowWidth =window.innerWidth;
    useEffect(() => {
      const tl = gsap.timeline();
      const tl0 = gsap.timeline();
      const tl1 = gsap.timeline();
      const tl2 = gsap.timeline();
      const tl3 = gsap.timeline();
      const tl4 = gsap.timeline();
      const tl5 = gsap.timeline();
      tl.add("same-time-pin"); 
      const  ExperienceAnimationPin = gsap.context(() => {
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
        headingTl.from(".Work-project-section h1",{
           opacity:0,
           stagger:0.3,
           y:200,
        })
        if(windowWidth>550){
        tl.to(
          ".project-frame .project-frame-img-frame-1",
          {  
              scaleX:"0",
              scaleY:"0",
            scrollTrigger: {
              trigger: ".Work-project-show-section",
              scroller: "body",
              start: "top 10%",
              scrub: 3,
              // markers:true,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
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
              scrub: 3,
              // markers:true,
              end: "bottom 20%",
        }
       })
      }
     else {
      if(ProjectRightTrue){
      
        tl.to(
          ".project-frame .project-frame-img-frame-1",
          {  
              scaleX:"0",
              scaleY:"0",
            
          },
        )
        tl.to(
          ".project-frame .project-frame-img-frame-2",
          {     
              scaleX:"1",
              scaleY:"1",
           
          }
        )              
       tl0.to(".project-year .year-container .year-1", {
         opacity:0,
         y:-20,
        
       })
       tl0.to(" .project-year .year-container .year-2", {
         opacity:1,
         y:-20,
       
       })
       tl1.to(".project-role .roles .role-1", {
         opacity:0,
         y:-40,
       
       })
       tl1.to(".project-role .roles .role-2", {
         opacity:1,
         y:-20,
        duration:0.5,
        
       })
       tl2.to(".projects-description .project-1-description", {
         opacity:0,
         y:-200,
        duration:0.5,
        
       })
       tl2.to(".projects-description .project-2-description", {
         opacity:1,
         y:-100,
        duration:0.5,
        
       })
       tl3.to(".project-frame-count-name .project-count-name .project-count span .project-count-1", {
         opacity:0,
         y:-50,
        duration:0.5,
        
       })
       tl3.to(".project-frame-count-name .project-count-name .project-count span .project-count-2", {
         opacity:1,
         y:-33,
        duration:0.5,
       
       })
       tl4.to(".project-frame-count-name .project-name .project-1-name", {
         y:-100,
        duration:0.5,
        
       })
       tl4.to(".project-frame-count-name .project-name .project-2-name", {
         y:-30,
         opacity:1,
        duration:0.5,
       
       })
       tl5.to(".project-work-frame .img-frames  .project-work-frame-1", {
        height:"0%",
        duration:0.5,
        
       })
       tl5.to(".project-work-frame .img-frames  .project-work-frame-2", {
         height:"100%",
         duration:0.5,
       })
      }
      else{
      
        tl.from(
          ".project-frame .project-frame-img-frame-1",
          {  
              scaleX:"0",
              scaleY:"0",
            
          },
        )
        tl.from(
          ".project-frame .project-frame-img-frame-2",
          {     
              scaleX:"0",
              scaleY:"0",
           
          }
        )              
       tl0.from(".project-year .year-container .year-1", {
         opacity:1,
         y:-50,
        
       })
       tl0.from(" .project-year .year-container .year-2", {
         opacity:1,
         y:25,
       
       })
       tl1.from(".project-role .roles .role-1", {
        opacity:1,
        y:-40,
      
      })
      tl1.from(".project-role .roles .role-2", {
        opacity:0,
        y:20,
       
      })
      tl3.from(".project-frame-count-name .project-count-name .project-count span .project-count-1", {
        opacity:1,
        y:-50,
       duration:0.5,
       
      })
      tl3.from(".project-frame-count-name .project-count-name .project-count span .project-count-2", {
        opacity:1,
        y:33,
       duration:0.5,
      
      })

      tl4.from(".project-frame-count-name .project-name .project-1-name", {
        y:10,
       duration:0.5,
       
      })
      tl4.from(".project-frame-count-name .project-name .project-2-name", {
        y:30,
        opacity:0,
       duration:0.5,
      
      })
      tl5.from(".project-work-frame .img-frames  .project-work-frame-1", {
        
        height:"0%",
        
       })
       tl5.from(".project-work-frame .img-frames  .project-work-frame-2", {
         height:"0%",
        
       })
      } 
     }
     
      } 
      )  
      return () => [ExperienceAnimationPin.revert()];
  }
  ,[ProjectRightTrue])
  }
export default ExperienceAnimation