import React from "react";
import classes from "./Service.module.css";
import Data from "./Data";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Service = () => {
  return (
    <>
      <div className={classes.strip}>
        <h1 className="">For Individual</h1>
      </div>
      <div className={classes.container}>
        {Data.map((plan) => (
          <>
            <div className={classes.card}>
              <div className={classes.top}>
                <img src="https://picsum.photos/50" alt="" />
                <h3 className={classes.title}>
                  <u> {plan.title} </u>
                </h3>
                <h4 className={classes.title}>
                  ₹999
                  <p>
                    <s>₹2499</s>
                  </p>
                </h4>
                <div className={classes.content}>
                  <p>
                    Cover income from
                    <ul>
                      {plan.covers.map((cover) => (
                        <li>{cover}</li>
                      ))}
                    </ul>
                  </p>
                </div>
                <div className={classes.but}>
                  <button className={classes.greenButton}>BUY NOW</button>
                </div>
                <h3 className={classes.title}>Know More </h3>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 className={classes.titleCenter}>All Plan Include</h1>

      <ul className={classes.hori}>
        <li>
          {" "}
          <AiOutlineCheckCircle /> Dedicated expert & account manager
        </li>
        <li>
          {" "}
          <AiOutlineCheckCircle /> Data review & correction by expert
        </li>
        <li>
          {" "}
          <AiOutlineCheckCircle /> Post return filing support
        </li>
        <li>
          {" "}
          <AiOutlineCheckCircle /> Suggestions on best tax saving options
        </li>
      </ul>
    </>
  );
};

export default Service;
