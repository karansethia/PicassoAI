import React, {useState} from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  username: "",
  id: null,
  onLogin: (username) => {},
  onLogout: () => {},
});

const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [id, setId] = useState(null);

  const loginHandler = (username, id) => {
    setIsLoggedIn(true);
    setUsername(username);
    setId(id);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        username: username,
        id: id,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
