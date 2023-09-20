import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import classes from "./PromptPanel.module.css";
import Footer from "../../Components/Footer/Footer";

const PromptPanel = () => {
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
        </div>
        <div className={classes.images_container}>
          <img src={p1} alt="" />
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
