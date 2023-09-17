import React from "react";
import Logo from "../../assets/PicassoAI.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <img src={Logo} alt="PicassoAI" />
      <div className={classes.nav_links}>
        <ul>
          <li>Community</li>
          <li>Tutorial</li>
          <li>Pricing</li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
