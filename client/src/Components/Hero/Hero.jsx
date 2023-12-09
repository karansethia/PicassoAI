import React from "react";
import classes from "./Hero.module.css";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";
import Hero3 from "../../assets/hero3.png";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

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
        <Link to="/signin?type=register">
          <button>Try Now</button>
        </Link>
      </div>
      <div className={classes.images}>
        <motion.img
          animate={{x: 10, opacity: 1}}
          initial={{x: 50, opacity: 0}}
          transition={{duration: 1, type: "tween"}}
          src={Hero1}
          alt=""
        />
        <motion.img
          animate={{x: 10, opacity: 1}}
          initial={{x: 50, opacity: 0}}
          transition={{duration: 1, type: "tween", delay: 0.5}}
          src={Hero2}
          alt=""
        />
        <motion.img
          animate={{x: 10, opacity: 1}}
          initial={{x: 50, opacity: 0}}
          transition={{duration: 1, type: "tween", delay: 1}}
          src={Hero3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
