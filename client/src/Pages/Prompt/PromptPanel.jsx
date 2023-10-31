import React, {useState, useRef} from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import classes from "./PromptPanel.module.css";
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
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);
  const promptRef = useRef();

  const [currentImage, setCurrentImage] = useState(p1);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const prompt = {
      prompt_details: formData.get("prompt"),
      num: +formData.get("num"),
      size: formData.get("size"),
    };
    console.log(prompt);
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
  // const onSaveHandler = (e) => {
  //   e.preventDefault();
  //   const imageDetails = {
  //     imageUrl: currentImage,
  //     prompt_details: promptRef,
  //   };
  //   saveImage({id: params.id, imageDetails});
  // };
  // const onShareHandler = (e) => {
  //   e.preventDefault();
  //   shareImage({id: params.id});
  // };
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
        </div>
        <div className={classes.result_container}>
          <div className={classes.image_container}>
            <div className={classes.mainImage}>
              <img src={currentImage} alt="" />
            </div>
            <div className={classes.variant_container}>
              {!isLoading &&
                fetchedData &&
                fetchedData.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt=""
                    onClick={() => {
                      setCurrentImage(image.url);
                    }}
                  />
                ))}
            </div>
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
