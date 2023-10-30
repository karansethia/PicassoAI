import React, {useState, useRef} from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import {useMutation} from "@tanstack/react-query";
import classes from "./PromptPanel.module.css";
import ImgSlider from "../../Components/ImgSlider/ImgSlider";
import SliderInput from "../../Components/SliderInput/SliderInput";
import {
  patchShareImage,
  postGenerateImage,
  postSaveImage,
} from "../../utils/http";
import {useParams, useNavigate} from "react-router-dom";
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
  const params = useParams();
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  const promptRef = useRef();

  function handleSliderChange({target}) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return {...option, value: target.value};
      });
    });
  }

  // function getImageStyle() {
  //   const filters = options.map((option) => {
  //     return `${option.property}(${option.value}${option.unit})`;
  //   });

  //   return {filter: filters.join(" ")};
  // }

  const [currentImage, setCurrentImage] = useState(p1);
  const {data, mutate, isLoading, error, isError} = useMutation({
    mutationFn: postGenerateImage,
  });
  const {mutate: saveMutate} = useMutation({
    mutationFn: postSaveImage,
    onSuccess: () => {
      navigate(`/user/${params.id}`);
    },
  });
  const {mutate: shareMutate} = useMutation({
    mutationFn: patchShareImage,
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const prompt_details = {
      prompt: formData.get("prompt"),
      num: formData.get("num"),
      size: formData.get("size"),
    };
    mutate({id: params.id, prompt: prompt_details});
    console.log(prompt_details);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    const imageDetails = {
      imageUrl: currentImage,
      prompt_details: promptRef,
    };
    saveMutate({id: params.id, imageDetails});
  };
  const onShareHandler = (e) => {
    e.preventDefault();
    shareMutate({id: params.id});
  };
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.prompt_container}>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="prompt">Prompt</label>
            <textarea
              type="text"
              placeholder="A castle in the night sky"
              name="prompt"
              ref={promptRef}
            />
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
              <select name="num" id="">
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
              <select name="size" id="" defaultValue={"1024*1024"}>
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
              <button type="submit">Generate</button>
              <button onClick={() => {}}>Create variations</button>
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
          <div
            className={classes.mainImage}
            style={{
              background: `url(${currentImage})`,
            }}
          ></div>
          <div className={classes.variant_container}>
            <img
              src={p1}
              alt=""
              onClick={() => {
                setCurrentImage(p1);
              }}
            />
            <img
              src={p2}
              alt=""
              onClick={() => {
                setCurrentImage(p2);
              }}
            />
            <img
              src={p3}
              alt=""
              onClick={() => {
                setCurrentImage(p3);
              }}
            />
          </div>
          <div className={classes.actionBtnContainer}>
            <button type="submit" onClick={onSaveHandler}>
              Save
            </button>
            <button type="submit" onClick={onShareHandler}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPanel;
