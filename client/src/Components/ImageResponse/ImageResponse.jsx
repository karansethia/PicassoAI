import React from "react";
import classes from "./ImageResponse.module.css";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const ImageResponse = ({
  isLoading,
  fetchedData,
  currentImage,
  imageStyle,
  onSet,
}) => {
  return (
    <div>
      {isLoading && (
        <div className={classes.loader}>
          <Lottie animationData={loader} loop={true} />
        </div>
      )}
      {!isLoading && (
        <div className={classes.image_container}>
          <div className={classes.mainImage}>
            <img src={currentImage} alt="" style={imageStyle()} />
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
                    onSet(image.url);
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageResponse;
