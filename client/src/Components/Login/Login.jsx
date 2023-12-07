import React from "react";
import classes from "./Login.module.css";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.container}>
      <h3>Login</h3>
      <form action="" className={classes.form_container}>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button>Register</button>
      </form>

      <Link to={{pathname: "/signin", search: "?type=register"}}>
        Don't have an account? Register
      </Link>
    </div>
  );
};

export default Login;