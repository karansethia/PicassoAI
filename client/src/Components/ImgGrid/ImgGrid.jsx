import React from "react";
import classes from "./ImgGrid.module.css";

const ImgGrid = (props) => {
  return (
    <div className={classes.column}>
      {props.images.map((img, index) => (
        <img src={img.imageUrl} alt="" key={index} />
      ))}
    </div>
  );
};

export default ImgGrid;
