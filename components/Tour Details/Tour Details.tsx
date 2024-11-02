import Image from "next/image";
import React from "react";
import styles from "./tourdetails.module.css";

function TourDetails() {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.card}`}>
        <Image
          src="/Images/guide.png"
          alt="man"
          width={100}
          height={100}
          className={`${styles.cardImage}`}
        />
        <h1 className={`${styles.cardText}`}>8000+ Our Local Guides</h1>
      </div>
      <div className={`${styles.card}`}>
        <Image
          src="/Images/done.png"
          alt="man"
          width={100}
          height={100}
          className={`${styles.cardImage}`}
        />
        <h1 className={`${styles.cardText}`}>100% Trusted Tour Agency</h1>
      </div>
      <div className={`${styles.card}`}>
        <Image
          src="/Images/world.png"
          alt="man"
          width={100}
          height={100}
          className={`${styles.cardImage}`}
        />
        <h1 className={`${styles.cardText}`}>28+ Years of Travel Experience</h1>
      </div>
      <div className={`${styles.card}`}>
        <Image
          src="/Images/like.png"
          alt="man"
          width={100}
          height={100}
          className={`${styles.cardImage}`}
        />
        <h1 className={`${styles.cardText}`}>98% Our Travelers are Happy</h1>
      </div>
    </div>
  );
}

export default TourDetails;
