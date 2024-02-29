import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {postRegister} from "../../utils/http";
import {AuthContext} from "../../Context/auth-context";

const Register = () => {
  const ctx = useContext(AuthContext);
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
      ctx.displayNotification("Registered succesfully");
      navigate("/signin?type=login");
    }
  };
  return (
    <motion.div className="flex flex-col m-auto w-[25rem] absolute  justify-center shadow-[0_8px_32px_0_rgba(135,92,31,0.37)] backdrop-blur-[14.5px] border px-12 py-8 rounded-2xl border-solid border-[rgba(255,255,255,0.18)] left-0 top-0 bg-[#ffffff1a]">
      <h3 className="text-[2.5rem] font-semibold bg-clip-text mx-0 my-4 font-header gradient-secondary">
        Register
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="text-[aliceblue] text-base font-light mx-0 my-[0.8rem] px-4 py-[0.7rem] rounded-[0.7rem] border-[0.3px] border-solid border-[#F3B391] bg-transparent font-content"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="text-[aliceblue] text-base font-light mx-0 my-[0.8rem] px-4 py-[0.7rem] rounded-[0.7rem] border-[0.3px] border-solid border-[#F3B391] bg-transparent font-content"
        />
        {/* <input type="email" name="email" placeholder="E-mail" /> */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="text-[aliceblue] text-base font-light mx-0 my-[0.8rem] px-4 py-[0.7rem] rounded-[0.7rem] border-[0.3px] border-solid border-[#F3B391] bg-transparent font-content"
        />
        <button
          type="submit"
          className="text-[antiquewhite] transition-all duration-[0.4s] ease-[ease-in] mx-0 my-4 p-2 rounded-2xl border-[none] hover:scale-[1.03] gradient"
        >
          Register
        </button>
      </form>

      <Link
        to={{pathname: "/signin", search: "?type=login"}}
        className="text-[rgb(173,173,173)] text-center m-4"
      >
        Already have an account? Login
      </Link>
    </motion.div>
  );
};

export default Register;
