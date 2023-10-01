import React from "react";
import classes from "./Pricing.module.css";
import Check from "./Check";
import Navbar from "../../Components/Navbar/Navbar";

const Pricing = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <section className={classes.pricingPlans}>
        <div className={`${classes.pricingCard} ${classes.basic}`}>
          <div className={classes.heading}>
            <h4>BASIC</h4>
            <p>for everyday creativity</p>
          </div>
          <p className={classes.price}>
            $5
            <sub>/month</sub>
          </p>
          <ul className={classes.features}>
            <li>
              <Check />
              <strong>300 Credits for Images </strong>
            </li>
            <li>
              <Check />
              <strong>500MB of disk space </strong>
            </li>
            <li>
              <Check />
              AI Image enhancer
            </li>
            <li>
              <Check />
              Image Editor for free
            </li>
          </ul>
          <button className={classes.btn}>SELECT</button>
        </div>
        <div className={`${classes.pricingCard} ${classes.standard}`}>
          <div className={classes.heading}>
            <h4>STANDARD</h4>
            <p>for illustration level art</p>
          </div>
          <p className={classes.price}>
            $10
            <sub>/month</sub>
          </p>
          <ul className={classes.features}>
            <li>
              <Check />
              <strong>300 Credits for Images </strong>
            </li>
            <li>
              <Check />
              <strong>1GB of disk space </strong>
            </li>
            <li>
              <Check />
              <strong>Image Editor for free</strong>
            </li>
            <li>
              <Check />
              AI Image enhancer
            </li>
          </ul>
          <button className={classes.btn}>SELECT</button>
        </div>
        <div className={`${classes.pricingCard} ${classes.premium}`}>
          <div className={classes.heading}>
            <h4>PREMIUM</h4>
            <p>for small businesses</p>
          </div>
          <p className={classes.price}>
            $20
            <sub>/month</sub>
          </p>
          <ul className={classes.features}>
            <li>
              <Check />
              <strong>300 Credits for Images </strong>
            </li>
            <li>
              <Check />
              <strong>5GB of disk space </strong>
            </li>
            <li>
              <Check />
              <strong>Image Editor for free</strong>
            </li>
            <li>
              <Check />
              <strong>AI Image enhancer</strong>
            </li>
          </ul>
          <button className={classes.btn}>SELECT</button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
