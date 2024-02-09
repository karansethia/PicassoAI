import React, {useEffect} from "react";
import {useAuth} from "../hooks/use-auth";
import {useNavigate} from "react-router-dom";
const ProtectedRoute = ({children}) => {
  console.log("routed via protected route");
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/signin?type=register", {replace: true});
    }
  }, [navigate, user]);
  return children;
};

export default ProtectedRoute;
