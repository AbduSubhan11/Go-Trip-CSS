import React from "react";
import styles from "./tourQuote.module.css"

function TourQuote() {
  return (
    <div className={`${styles.container} bg-[url('/Images/buildings.jpg')] bg-cover bg-center bg-opacity-10 bg-fixed text-white mb-20 space-y-8 p-6 h-[400px] md:h-[500px] flex flex-col justify-center items-center`}>
      <h1 className={`${styles.quote} text-2xl md:text-4xl lg:text-5xl font-bold md:px-20 lg:px-48 text-center`}>
        Some places are so good to stay in, you do not want to generate a rush
        on them.
      </h1>
      <p className={`${styles.advisor} text-base md:text-lg lg:text-xl font-bold underline`}>
        Mpho N - Trip Advisor
      </p>
    </div>
  );
}

export default TourQuote;
