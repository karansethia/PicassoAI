import React from "react";
import classes from "./Signin.module.css";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";
import {useSearchParams} from "react-router-dom";

const Signin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <div className={classes.container}>
      {type == "register" && <Register />}
      {type == "login" && <Login />}
    </div>
  );
};

export default Signin;
