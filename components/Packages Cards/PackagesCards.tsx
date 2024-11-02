import Image from "next/image";
import React from "react";
import styles from "./packageCards.module.css"

function PackagesCards({ image, price, name }: { image: string; price: number,name:string }) {
  return (
    // CARD
    <div className={`${styles.packageCardParent}`}>
      <div className={`${styles.imageParent}`}>
        <Image
          src={image}
          alt="card1"
          width={1000}
          height={100}
          className={`${styles.cardImage}`}
        />
      </div>
      <div className={`${styles.cardTextParent}`}>
        <h1 className={`${styles.cardTextHeading1}`}>{name}</h1>
        <p className={`${styles.cardTextHeading2}`}>United staes of America</p>
        <div className={`${styles.borderBottomContainer}`}>
          <h1 className={`${styles.packageDetails}`}>Duration</h1>
          <h1 className={`${styles.packageDetails}`}>06 days and 7 nights</h1>
        </div>
        <div className={`${styles.borderBottomContainer}`}>
          <h1 className={`${styles.packageDetails}`}>Airport</h1>
          <h1 className={`${styles.packageDetails}`}>Dubai</h1>
        </div>
        <div className={`${styles.borderBottomContainer}`}>
          <h1 className={`${styles.packageDetails}`}>Extras</h1>
          <h1 className={`${styles.packageDetails}`}>All Inclusive</h1>
        </div>
        <div className={`${styles.pricePerPersonContainer}`}>
          <h1 className={`${styles.packageDetails}`}>Price Per Person</h1>
          <button className={`${styles.priceButton}`}>${price}</button>
        </div>
      </div>
    </div>
  );
}

export default PackagesCards;
