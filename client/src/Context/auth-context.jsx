import React, {useState} from "react";
import {axiosReq} from "../utils/axios";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  username: "",
  id: null,
  onLogin: (name, id, token) => {},
  onLogout: () => {},
});

const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({name: "", id: null});

  const loginHandler = (name, id, token) => {
    setIsLoggedIn(true);
    setUser({name: name, id: id});
    axiosReq.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        name: user.name,
        id: user.id,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
