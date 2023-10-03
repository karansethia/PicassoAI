import React, {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import classes from "./PromptPanel.module.css";
import Footer from "../../Components/Footer/Footer";
import ImgSlider from "../../Components/ImgSlider/ImgSlider";
import SliderInput from "../../Components/SliderInput/SliderInput";
const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

const PromptPanel = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({target}) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return {...option, value: target.value};
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return {filter: filters.join(" ")};
  }
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.prompt_container}>
          <form action="">
            <label htmlFor="prompt">Prompt</label>
            <textarea type="text" placeholder="A castle in the night sky" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <label htmlFor="prompt">Number of images</label>
              <select name="" id="">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <label htmlFor="prompt">Size of Image</label>
              <select name="" id="">
                <option>Choose</option>
                <option>1024*1024</option>
                <option>512*512</option>
                <option>256*256</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <button>Generate</button>
              <button>Create variations</button>
            </div>
          </form>
          <div>
            <p style={{marginTop: "4rem"}}>Edit Image</p>
            <div className={classes.sliderBtnContainer}>
              {options.map((option, index) => {
                return (
                  <SliderInput
                    key={index}
                    name={option.name}
                    active={index === selectedOptionIndex}
                    handleClick={() => setSelectedOptionIndex(index)}
                  />
                );
              })}
            </div>
            <ImgSlider
              min={selectedOption.range.min}
              max={selectedOption.range.max}
              value={selectedOption.value}
              handleChange={handleSliderChange}
            />
          </div>
        </div>
        <div className={classes.images_container}>
          <div className={classes.mainImage} style={getImageStyle()}></div>
          <div className={classes.variant_container}>
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PromptPanel;
