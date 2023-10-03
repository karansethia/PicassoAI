import React from "react";
import classes from "./SliderInput.module.css";

const SliderInput = ({name, active, handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className={
        active
          ? `${classes.active} ${classes.sliderBtn}`
          : `${classes.sliderBtn}`
      }
    >
      {name}
    </button>
  );
};

export default SliderInput;
