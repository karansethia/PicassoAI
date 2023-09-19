import React from "react";
import classes from "./Hero.module.css";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";
import Hero3 from "../../assets/hero3.png";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>
          Unleash your <span>Inner Artist</span> with the power of PicassoAI
        </h1>
        <p>
          Create production-quality visual assets for your projects with
          unprecedented quality, speed, and style-consistency
        </p>
        <button>Try Now</button>
      </div>
      <div className={classes.images}>
        <img src={Hero1} alt="" />
        <img src={Hero2} alt="" />
        <img src={Hero3} alt="" />
      </div>
    </div>
  );
};

export default Hero;
