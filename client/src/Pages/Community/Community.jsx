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
import ImgGrid from "../../Components/ImgGrid/ImgGrid";

const Community = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <h1>
        Explore creative minds <br />
        in our community
      </h1>
      <div className={classes.imggrid}>
        <ImgGrid
          images={[
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
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Community;
