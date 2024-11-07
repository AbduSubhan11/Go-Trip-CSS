import React from "react";
import styles from "./tourQuote.module.css";

function TourQuote() {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.quote} `}>
        Some places are so good to stay in, you do not want to generate a rush
        on them.
      </h1>
      <p className={`${styles.advisor} `}>Mpho N - Trip Advisor</p>
    </div>
  );
}

export default TourQuote;
