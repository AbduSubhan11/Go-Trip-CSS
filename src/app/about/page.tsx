import Image from "next/image";
import React from "react";
import styles from "./about.module.css"
import TourDetails from "../../../components/Tour Details/Tour Details";
import PlateformOverview from "../../../components/Plateform Overview/Plateform Overview";

function Page() {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.aboutHeading}`}>
        About Us
      </h1>
      <div className={`${styles.gridContainer}`}>
        <div className={`${styles.imageParent}`}>
          <Image
            src="/Images/aboutImg.jpg"
            alt="aboutImg"
            width={500}
            height={500}
            className={`${styles.aboutImage}`}
          />
        </div>
        <div className={`${styles.aboutTextParent}`}>
          <h1 className={`${styles.aboutTextHeading1}`}>ABOUT OUR COMPANY</h1>
          <h1 className={`${styles.aboutTextHeading2}`}>
            We are Go Trip Ravels Support Company (1992)
          </h1>
          <p className={`${styles.aboutTextPara1}`}>
            We specialize in creating personalized travel experiences that cater
            to all kinds of explorers—whether you are a solo traveler, a family,
            or a group of friends. Our mission is to make travel easy,
            accessible, and enjoyable by offering a wide selection of curated
            tours, destinations, and activities to suit every interest and
            budget. With a dedicated team of travel experts and a passion for
            exploring the world, we ensure every journey is smooth and
            memorable. From the moment you start planning to the time you return
            home, we are here to make your travel dreams come true. Join us and
            discover the world with confidence and ease!
          </p>
          <p className={`${styles.aboutTextPara2}`}> 
            We know the difference thoughtful planning and a touch of
            personalization can make. Our team of travel experts and local
            guides work tirelessly to ensure each tour is as unique as the
            traveler who embarks on it. From 24/7 customer support to secure
            booking and customizable itineraries, we are committed to delivering
            excellence every step of the way.
          </p>
        </div>
      </div>
      <TourDetails/>
      <PlateformOverview/>
    </div>
  );
}

export default Page;
