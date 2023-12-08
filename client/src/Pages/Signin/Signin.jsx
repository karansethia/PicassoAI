import React from "react";
import classes from "./Signin.module.css";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";
import {useSearchParams} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Signin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <div className={classes.container}>
      <AnimatePresence mode="wait">
        {type == "register" && (
          <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 1, type: "tween", delay: 1}}
          >
            <Register />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {type == "login" && (
          <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 1, type: "tween", delay: 1}}
          >
            <Login />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Signin;
