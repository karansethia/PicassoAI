import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
