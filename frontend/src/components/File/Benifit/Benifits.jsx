import React from "react";
import classes from "./Benifits.module.css";
import BenifitsData from "./BenifitsData";
const Benifits = () => {
  return (
    <div>
      <div>
        <h1 className={classes.benifits}>
          Benifits of E-filling income tax returns ITR
        </h1>
        <hr />
      </div>

      <div className={classes.cardContainer}>
        {BenifitsData.map((item) => (
          <>
            <div className={classes.card}>
              <img
                src={item.imageSrc}
                alt="Card"
                className={classes.imageItem}
              />
              <center>
                <div className={classes.data}>
                  <h3> {item.data} </h3>
                </div>
                <div className={classes.about}>
                  {" "}
                  <p> {item.about} </p>
                </div>
              </center>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
