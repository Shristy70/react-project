import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="./src/style/mypick.jpg" alt="protofilo"  id="img"/>
      <h1> <span>I a'm Shristy Gour</span> , Softwre Developer</h1>
      <p>I am a Frontend and Backend Developer</p>
      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
export default Hero;
