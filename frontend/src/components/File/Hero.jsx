import React from "react";
import Piggy from "./piggy.jpg";
import classes from "./Hero.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="">
      <div className={classes.sectionContainer}>
        <img src={Piggy} alt="Hero" className={classes.imageContainer} />
        <div className={classes.textContent}>
          <h2>File ITR in 30 Min</h2>
          <p>
            <AiOutlineCheckCircle /> Upload Your Document
          </p>
          <p>
            <AiOutlineCheckCircle /> Connect With Experts
          </p>
          <p>
            <AiOutlineCheckCircle /> Get Your ITR Filled
          </p>
          <form className={classes.formContainer} action="">
            <input
              type="tel"
              placeholder="Phone number"
              pattern="[0-9]{10}"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <h1 className={classes.about}>
        Let our experts manage your <br />
        tax and business compliances
      </h1>
    </div>
  );
};

export default Hero;
