import React, {useContext} from "react";
import classes from "./Login.module.css";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import axios from "axios";
import {postLogin} from "../../utils/http";
import {AuthContext} from "../../Context/auth-context";

const Login = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const response = await postLogin({username, password});
    console.log(response);
    if (response.status == 200) {
      ctx.displayNotification("Logged in succesfully");
      ctx.onLogin(
        response.data.username,
        response.data.id,
        response.data.accessToken
      );

      navigate(`/user/${response.data.id}`);
    }
  };
  return (
    <motion.div className={classes.container}>
      <h3>Login</h3>
      <form onSubmit={handleLogin} className={classes.form_container}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      <Link to={{pathname: "/signin", search: "?type=register"}}>
        Don't have an account? Register
      </Link>
    </motion.div>
  );
};

export default Login;
