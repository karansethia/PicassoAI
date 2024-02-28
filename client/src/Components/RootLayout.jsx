import React, {useContext} from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import {AuthContext} from "../Context/auth-context";
import Notification from "./Notification/Notification";

const RootLayout = () => {
  const {UI} = useContext(AuthContext);

  return (
    <>
      {UI.showModal && <Notification text={UI.message} />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
