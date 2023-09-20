import React from "react";
import Logo from "../../assets/PicassoAI.png";
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <Link to="/">
        <img src={Logo} alt="PicassoAI" />
      </Link>
      <div className={classes.nav_links}>
        <ul>
          <Link to="/community">Community</Link>
          <Link to="/">Tutorial</Link>
          <Link to="/">Pricing</Link>
        </ul>
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
