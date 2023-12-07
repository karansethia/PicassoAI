import React from "react";
import classes from "./Register.module.css";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className={classes.container}>
      <h3>Register</h3>
      <form action="" className={classes.form_container}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button>Register</button>
      </form>

      <Link to={{pathname: "/signin", search: "?type=login"}}>
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Register;
