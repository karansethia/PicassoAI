import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
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
    <motion.div className="flex flex-col w-[25rem] absolute translate-x-[130%] translate-y-36 justify-center shadow-[0_8px_32px_0_rgba(135,92,31,0.37)] backdrop-blur-[14.5px] border px-12 py-8 rounded-2xl border-solid border-[rgba(255,255,255,0.18)] left-0 top-0 bg-[#ffffff1a]">
      <h3 className="text-[2.5rem] font-semibold bg-clip-text mx-0 my-4 font-header gradient-secondary">
        Login
      </h3>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="text-[aliceblue] text-base font-light mx-0 my-[0.8rem] px-4 py-[0.7rem] rounded-[0.7rem] border-[0.3px] border-solid border-[#F3B391] bg-transparent font-content"
        />
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
          Login
        </button>
      </form>

      <Link
        to={{pathname: "/signin", search: "?type=register"}}
        className="text-[rgb(173,173,173)] text-center m-4"
      >
        Don't have an account? Register
      </Link>
    </motion.div>
  );
};

export default Login;
