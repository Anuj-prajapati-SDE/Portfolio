import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseFollower = () => {
  const circleRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(circleRef.current, {
        x: event.clientX - 10, // Adjust to center the circle on the cursor
        y: event.clientY - 10,
        duration: 1.5,
        ease: "elastic.out",
      });
    };
 window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: "fixed",
    width: "10px",
    height: "10px",
    zIndex: 9999,
    backgroundColor: "#08afff",
    borderRadius: "50%",
    pointerEvents: "none", // Prevents the circle from interfering with mouse events
  };

  return <div ref={circleRef} style={circleStyle}></div>;
};

export default MouseFollower;
