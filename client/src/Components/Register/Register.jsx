import React from "react";
import classes from "./Register.module.css";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {axiosReq} from "../../utils/axios";
import {postRegister} from "../../utils/http";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const name = formData.get("name");
    // const email = formData.get("email");
    const password = formData.get("password");

    const response = await postRegister({name, username, password});
    console.log(response.data.message);
    if (response.status === 201) {
      navigate("/signin?type=login");
    }
  };
  return (
    <motion.div className={classes.container}>
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className={classes.form_container}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="username" placeholder="Username" />
        {/* <input type="email" name="email" placeholder="E-mail" /> */}
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>

      <Link to={{pathname: "/signin", search: "?type=login"}}>
        Already have an account? Login
      </Link>
    </motion.div>
  );
};

export default Register;
