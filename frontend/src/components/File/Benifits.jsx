import React from "react";
import classes from "./Benifits.module.css";
import BenifitsData from "./BenifitsData";
const Benifits = () => {
  return (
    <div className="">
      <div className={classes.sectionContainer}>
        <div className={classes.textContent}>
          <h1 className={classes.benifits}>
            Benifits of E-filling <br /> income tax returns <br />
            ITR
          </h1>
        </div>
      </div>
      <div className={classes.cardContainer}>
        {BenifitsData.map((item) => (
          <>
            <div className={classes.card}>
              <img src={item.imageSrc} alt="Card" className="image" />
              <div className="data">
                <h3> {item.data} </h3>
              </div>
              <div className="about">
                {" "}
                <p> {item.about} </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
