import React, {useState, useRef} from "react";
import p1 from "../../assets/p1.png";
import ImgSlider from "../../Components/ImgSlider/ImgSlider";
import SliderInput from "../../Components/SliderInput/SliderInput";
import classes from "./PromptPanel.module.css";
import {
  patchShareImage,
  postGenerateImage,
  postSaveImage,
} from "../../utils/http";
import {useParams, useNavigate} from "react-router-dom";
import ImageResponse from "../../Components/ImageResponse/ImageResponse";
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
  const [currentImage, setCurrentImage] = useState(p1);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  const [filteredImage, setFilteredImage] = useState({
    src: currentImage,
    style: {},
  });

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
  const onDownload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const img = new Image();
    img.setAttribute("crossorigin", "anonymous");
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.filter = getImageStyle().filter;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Trigger download
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "filtered-image.png";
      link.click();
    };
    console.log(currentImage);
    img.src = currentImage;
  };
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const promptRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const prompt = {
      prompt_details: formData.get("prompt"),
      num: +formData.get("num"),
      size: formData.get("size"),
    };
    console.log(prompt);
    setIsLoading(true);
    try {
      const response = postGenerateImage({id: params.id, prompt}).then(
        (data) => {
          console.log(data);
          const {openAIResponse} = data;
          console.log(openAIResponse);
          setCurrentImage(openAIResponse.data[0].url);
          setFetchedData(openAIResponse.data);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    const imageDetails = {
      imageUrl: currentImage,
      prompt_details: promptRef.current.value,
    };
    try {
      const response = postSaveImage({id: params.id, imageDetails}).then(
        (res) => {
          console.log(res);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onShareHandler = (e) => {
    e.preventDefault();
    try {
      const response = patchShareImage({
        id: params.id,
        imageVisibility: "public",
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSetImageHandler = (url) => {
    setCurrentImage(url);
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
              <select name="size" id="" defaultValue={"1024x1024"}>
                <option>Choose</option>
                <option>1024x1024</option>
                <option>512x512</option>
                <option>256x256</option>
              </select>
            </div>
            <div
              style={{
                marginTop: "1.5rem",
              }}
            >
              <button type="submit">Generate</button>
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
        <div className={classes.result_container}>
          <ImageResponse
            isLoading={isLoading}
            fetchedData={fetchedData}
            imageStyle={getImageStyle}
            currentImage={currentImage}
            onSet={onSetImageHandler}
          />
          <div className={classes.actionBtnContainer}>
            <button type="submit" onClick={onDownload}>
              Download
            </button>
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
