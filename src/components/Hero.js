import React, {useEffect} from 'react';
import ContactCard from './ContactCard';
import gsap from 'gsap';

const Hero = (props) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to("#logo", { y: "0%", opacity: 1, duration: 1, stagger: 0.25 });
    tl.to("#slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to("#intro", { y: "-100%", duration: 1 }, "-=1");

    tl.to(".card", { x: "0%", duration: 0.5 });
    tl.to(".welcome", { y: "0%", opacity: 1, duration: 1 });
  }, [])


  return (
    <div className="hero-container panel">
      <div className="intro" id="intro">
        <img src="./logo.png" id="logo" className="my-logo" alt="MTG logo"></img>
      </div>
      <div className="slider" id="slider"></div>
      <div className="hero container">
        <ContactCard {...props}>
        </ContactCard>
        <div className="welcome">
          <p className="welcome-text">Welcome</p>
          <p className="welcome-text">to my</p>
          <p className="welcome-text">Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;