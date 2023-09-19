import React from "react";
import classes from "./Footer.module.css";
import icon from "../../assets/icon.png";
import logo from "../../assets/PicassoAI.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={icon} alt="" />
        <img src={logo} alt="" srcset="" />
      </div>
      <div className={classes.links}>
        <a href="">Linkedin</a>
        <a href="">Facebook</a>
        <a href="">X (Twitter)</a>
        <a href="">Instagram</a>
      </div>
      <div className={classes.links}>
        <a href="">FAQ</a>
        <a href="">About Us</a>
        <a href="">Tutorials</a>
      </div>
      <div className={classes.form}>
        <p>Don't miss out on updates</p>
        <input type="text" placeholder="Email" />
      </div>
    </div>
  );
};

export default Footer;
