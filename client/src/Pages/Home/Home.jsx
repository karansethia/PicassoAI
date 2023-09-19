import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className={classes.info}>
        <div>
          <h3>
            Cultivate <br /> Originality
          </h3>
          <p>
            Your imagination, our technology. Generate distinctive art with
            pre-trained AI models.
          </p>
        </div>
        <div>
          <h3>
            Simplified <br /> Mastery
          </h3>
          <p>
            Easy to grasp, rewarding to perfect. Be proficient in producing
            exquisite content quickly and efficiently.
          </p>
        </div>
        <div>
          <h3>
            Turbocharge <br /> Innovation
          </h3>
          <p>
            Fast-forward your ideation process. Conceptualise, iterate, and
            experiment at light speed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
