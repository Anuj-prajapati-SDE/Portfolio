import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const LoaderAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.add("same-time-in, same-time-up, same-time-go")
   tl.to(".name-show p", {
    duration:0.3,
    transform :" translateX(0px)",
    scrub:3,
     opacity:1,
   }, "same-time-in")
   tl.to(".name-show ", {
    duration:1.2,
    transform :" translateX(0px)",
    scrub:2,
    opacity:1,
   }, "same-time-in") 
   tl.to(".name-show h3", {
    duration:1, 
    transform :" translateY(-150px)",
    scrub:2,
   }, "same-time-up") 
   .to(".loader-page .title-portfolio", {
    duration:1,
    transform :" translateY(-150px)", 
    scrub:2,
   }, "same-time-up") 
   .to(".dotted-loader", {
    duration:1,
    transform :" translateY(200px)",
    scrub:2,
    opacity:0
   }, "same-time-up") 

   tl.to(".loader-page", {
    height: "-10%",
    duration:1,
    scrub:3,
    padding:"0px"
   }, "same-time-go")
   tl.to(".Loader-section", {
    height: "0vh",
    duration:0.5,
    delay:0.3,
    display:"none",
    scrub:3,
   }, "same-time-go")
  })
}

export default LoaderAnimation;