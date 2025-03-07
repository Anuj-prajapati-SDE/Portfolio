import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

const HomeAnimation = () => {
    useGSAP(() => {
        const tl = gsap.timeline(); 
        tl.to("", {
            x: 30,
            y: 50
          }
        )
      })
}

export default HomeAnimation;