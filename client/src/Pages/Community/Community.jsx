import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
} from "./data";
import classes from "./Community.module.css";
import Footer from "../../Components/Footer/Footer";

const Community = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <h1>
        Explore creative minds <br />
        in our community
      </h1>
      <div className={classes.gridbox}>
        <div className={classes.column}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className={classes.column}>
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
        <div className={classes.column}>
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
        <div className={classes.column}>
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
