import React, {useContext} from "react";
import Logo from "../../assets/PicassoAI.png";
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {AuthContext} from "../../Context/auth-context";

const Navbar = () => {
  const ctx = useContext(AuthContext);
  return (
    <motion.div
      animate={{y: -10, opacity: 1}}
      initial={{y: -50, opacity: 0}}
      transition={{duration: 1, type: "tween"}}
      className={classes.container}
    >
      <Link to="/">
        <img src={Logo} alt="PicassoAI" />
      </Link>
      <div className={classes.nav_links}>
        <ul>
          <Link to="/community">Community</Link>
          <Link to="/">Tutorial</Link>
          <Link to="/pricing">Pricing</Link>
          {ctx.isLoggedIn && <Link to={`/generate/${ctx.id}`}>Generate</Link>}
        </ul>

        {!ctx.isLoggedIn ? (
          <Link
            to={{pathname: "/signin", search: "?type=register"}}
            className={classes.button}
          >
            SIGN IN
          </Link>
        ) : (
          <button
            className={classes.button}
            onClick={() => {
              ctx.onLogout();
            }}
          >
            LOGOUT
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
