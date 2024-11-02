import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

function footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.gridContainer}`}>
        <div className={`${styles.footerdiv1}`}>
          <Image
            src={"/Images/Logo.png"}
            alt="footerImage"
            width={100}
            height={100}
            className={`${styles.footerLogo}`}
          />
          <p>
            We are dedicated to providing you with seamless booking experiences
            and exceptional customer service. Whether you are planning a weekend
            getaway, a family vacation, or a business trip, our platform offers
            a wide range of options tailored to your needs.
          </p>
        </div>
        <div className={`${styles.footerdiv2}`}>
          <h1>Quick Links</h1>
          <div className={`${styles.linkParent}`}>
            <Link href={"/about"} className={`${styles.link}`}>
              About Us
            </Link>
            <Link href={"/contact"} className={`${styles.link}`}>
              Contact Us
            </Link>
            <Link href={""} className={`${styles.link}`}>
              Offers & Discounts
            </Link>
            <Link href={""} className={`${styles.link}`}>
              Get Coupon
            </Link>
          </div>
        </div>
        <div className={`${styles.footerdiv3}`}>
          <h1>Support</h1>
          <div className={`${styles.linkParent}`}>
            <Link href={""} className={`${styles.link}`}>
              Frequently Asked Questions
            </Link>
            <Link href={""} className={`${styles.link}`}>
              Terms & Conditions
            </Link>
            <Link href={""} className={`${styles.link}`}>
              Privacy Policy
            </Link>
            <Link href={""} className={`${styles.link}`}>
              Report a Payment Issue
            </Link>
          </div>
        </div>
      </div>
      <h1 className={`${styles.developedby}`}>
        Developed by <span>Abdu Subhan</span> | All Rights Reserved
      </h1>
    </footer>
  );
}

export default footer;
