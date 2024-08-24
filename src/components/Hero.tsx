import gsap from "gsap";
import React, { useEffect } from "react";
import ContactCard from "./ContactCard";

// Define types for the props
interface HeroProps {
  [key: string]: any; // This allows for any additional props that ContactCard might need
}

const Hero: React.FC<HeroProps> = (props) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to("#logo", { y: "0%", opacity: 1, duration: 1, stagger: 0.25 });
    tl.to("#slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to("#intro", { y: "-100%", duration: 1 }, "-=1");

    tl.to(".card", { x: "0%", duration: 0.5 });
    tl.to(".welcome", { y: "0%", opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="bg-[url('/5651978.png')] bg-cover bg-center h-screen flex panel">
      <div
        className="bg-white flex-grow absolute z-50 top-0 left-0 w-full h-full grid place-content-center overflow-hidden intro"
        id="intro"
      >
        <img
          src="./logo.png"
          alt="Logo"
          id="logo"
          className="my-logo translate-y-full opacity-0 w-16 animate-spin"
        />
      </div>
      <div
        className="bg-yellow fixed top-0 left-0 w-full h-100 slider"
        id="slider"
      ></div>
      <div className="relative justify-center m-auto flex flex-wrap lg:flex-nowrap hero container lg:justify-between">
        <ContactCard {...props} />
        <div className="welcome lg:flex flex-col my-auto hidden flex-1 text-current text-right text-4xl opacity-0 translate-y-full font-serif">
          <p className="welcome-text mb-0 shad">Welcome</p>
          <p className="welcome-text mb-0">to my</p>
          <p className="welcome-text mb-0">Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
