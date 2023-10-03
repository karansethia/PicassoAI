import React from "react";
import classes from "./ImgSlider.module.css";

const ImgSlider = ({min, max, value, handleChange}) => {
  return (
    <div className={classes.sliderContainer}>
      <input
        type="range"
        className={classes.slider}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ImgSlider;
