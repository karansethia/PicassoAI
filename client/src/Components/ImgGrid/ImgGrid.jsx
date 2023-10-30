import React from "react";
import classes from "./ImgGrid.module.css";

const ImgGrid = (props) => {
  return (
    <div>
      <div className={classes.gridbox}>
        <div className={classes.column}>
          {props.images.map((img, index) => (
            <img src={img.imageUrl} alt="" key={index} />
          ))}
        </div>
        {/* <div className={classes.column}>
          {props.images.slice(4, 8).map((img, index) => (
            <img src={img} alt="" key={index} />
          ))}
        </div>
        <div className={classes.column}>
          {props.images.slice(8, 12).map((img, index) => (
            <img src={img} alt="" key={index} />
          ))}
        </div>
        <div className={classes.column}>
          {props.images.slice(12, 16).map((img, index) => (
            <img src={img} alt="" key={index} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ImgGrid;
