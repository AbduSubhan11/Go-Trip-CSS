import React from "react";
import styles from "./contact.module.css";
import TourDetails from "../../../components/Tour Details/Tour Details";

function Page() {
  return (
    <div>
      <h1 className={`${styles.contactHeading}`}>Contact Us</h1>
      {/* GRID */}
      <div className={`${styles.flexContainer}`}>
        {/* LEFT */}
        <div className={`${styles.contactLeft}`}>
          <h1 className={`${styles.getInTouchHeading}`}>Get in Touch</h1>
          <form action="">
            <div className={`${styles.NameEmailParent}`}>
              <input
                type="text"
                placeholder="Enter Your Name"
                className={`${styles.Input}`}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className={`${styles.Input}`}
              />
            </div>
            <div className={`${styles.SubjectTextarea}`}>
              <input
                type="text"
                placeholder="Enter Subject"
                className={`${styles.Input}`}
              />
              <textarea
                name="message"
                placeholder="Enter Message"
                className={`${styles.Textarea}`}
              ></textarea>
            </div>
            <div>
              <button className={`${styles.sendButton}`}>SEND</button>
            </div>
          </form>
        </div>
        {/* RIGHT */}
        <div className={`${styles.contactRight}`}>
          <div className={`${styles.MyLocationParent}`}>
            <svg
              className={`${styles.svg}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            {/* <div> */}
            <h1 className={`${styles.rightText}`}>Karachi, Pakistan</h1>
            {/* </div> */}
          </div>
          <div className={`${styles.MyNumberParent}`}>
            <svg
              className={`${styles.svg}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="7" y="4" width="10" height="16" rx="1" />{" "}
              <line x1="11" y1="5" x2="13" y2="5" />{" "}
              <line x1="12" y1="17" x2="12" y2="17.01" />
            </svg>
            <div className={`${styles.numberAndParaContainer}`}>
              <h1 className={`${styles.rightText}`}>+92 3334370902</h1>
              <p className={`${styles.paragraph}`}>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className={`${styles.MyEmailParent}`}>
            <svg
              className={`${styles.svg}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <div className={`${styles.emailAndParaContainer}`}>
              <h1 className={`${styles.rightText}`}>
                abdusubhan6678@gmail.com
              </h1>
              <p className={`${styles.paragraph}`}>
                Send us your query anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
      <TourDetails />
    </div>
  );
}

export default Page;
