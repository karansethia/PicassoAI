import React from "react";
import classes from "./ImgGrid.module.css";

const ImgGrid = (props) => {
  return (
    <div>
      <div className={classes.gridbox}>
        <div className={classes.column}>
          {props.images.slice(0, 4).map((img) => (
            <img src={img} alt="" />
          ))}
        </div>
        <div className={classes.column}>
          {props.images.slice(4, 8).map((img) => (
            <img src={img} alt="" />
          ))}
        </div>
        <div className={classes.column}>
          {props.images.slice(8, 12).map((img) => (
            <img src={img} alt="" />
          ))}
        </div>
        <div className={classes.column}>
          {props.images.slice(12, 16).map((img) => (
            <img src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgGrid;
