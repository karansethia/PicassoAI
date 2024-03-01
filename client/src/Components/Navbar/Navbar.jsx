import React, {useContext} from "react";
import Logo from "../../assets/PicassoAI.png";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AuthContext} from "../../Context/auth-context";
import {postLogout} from "../../utils/http";

const Navbar = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const response = await postLogout();
    console.log(response.status);
    // todo Notification banner for successful logout
    if (response.status === 204) {
      ctx.displayNotification("Logged out succesfully");
      ctx.onLogout();
      navigate("/signin?type=login");
    }
  };
  return (
    <motion.div
      animate={{y: -10, opacity: 1}}
      initial={{y: -50, opacity: 0}}
      transition={{duration: 1, type: "tween"}}
      className="w-full max-w-[1440px] flex items-center justify-between text-[1.2rem] font-medium sticky z-[100000] bg-[#04080fa6] px-12 py-6 top-0 font-content"
    >
      <Link to="/">
        <img src={Logo} alt="PicassoAI" className="w-28" />
      </Link>
      <div className="flex place-items-center gap-8">
        <ul className="flex place-items-center gap-8 m-0.5">
          <Link to="/community">Community</Link>
          <Link to="/">Tutorial</Link>
          <Link to="/pricing">Pricing</Link>
          {ctx.isLoggedIn && <Link to={`/generate/${ctx.id}`}>Generate</Link>}
        </ul>

        {!ctx.isLoggedIn ? (
          <Link
            to={{pathname: "/signin", search: "?type=register"}}
            className="gradient text-white tracking-[1px] font-semibold text-base cursor-pointer m-0.5 px-8 py-2 rounded-md border-[none]"
          >
            SIGN IN
          </Link>
        ) : (
          <button
            className="gradient text-white tracking-[1px] font-semibold text-base cursor-pointer m-0.5 px-8 py-2 rounded-md border-[none]"
            onClick={logoutHandler}
          >
            LOGOUT
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
