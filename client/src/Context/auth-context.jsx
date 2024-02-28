import React, {useEffect, useState} from "react";
import {axiosReq} from "../utils/axios";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  username: "",
  id: null,
  onLogin: (name, id, token) => {},
  onLogout: () => {},
  UI: {showModal: false, message: null},
  displayNotification: (message) => {},
});

const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({name: "", id: null});
  const [notification, setNotification] = useState({
    showModal: false,
    message: null,
  });

  const loginHandler = (name, id, token) => {
    setIsLoggedIn(true);
    setUser({name: name, id: id});
    axiosReq.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUser({name: "", id: null});
  };
  const notificationHandler = (message) => {
    setNotification({showModal: true, message: message});
    setTimeout(() => {
      setNotification({showModal: false, message: null});
    }, 10000);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        name: user.name,
        id: user.id,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        UI: notification,
        displayNotification: notificationHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
