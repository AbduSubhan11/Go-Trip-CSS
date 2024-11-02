import React from "react";
import styles from "./package.module.css"
import PackagesCards from "../../../components/Packages Cards/PackagesCards";
import Link from "next/link";

function Page() {
  return (
    <div>
      <h1 className={`${styles.packageHeading}`}>
        Our Packages
      </h1>
      <div >
        <h1 className={`${styles.populardestinationHead}`}>Popular Destinations</h1>
        <p className={`${styles.packagePara}`}>
          We all live in an age that belongs to the young at heart. Life that is
          becoming extremely fast, day to.
        </p>
      </div>
      {/* CARD GRID */}
      <div className={`${styles.gridContainer}`}>
        <PackagesCards
          image="/Images/packagecard1.webp"
          price={999}
          name="The Street View"
        />
        <PackagesCards
          image="/Images/packagecard2.webp"
          price={1499}
          name="The Mountain View"
        />
        <PackagesCards
          image="/Images/packagecard3.webp"
          price={1299}
          name="The Sea Beach View"
        />
        <PackagesCards
          image="/Images/packagecard4.webp"
          price={1999}
          name="The Sea Beach View"
        />
        <PackagesCards
          image="/Images/packagecard5.webp"
          price={1499}
          name="The Dark Forest Adventure"
        />
        <PackagesCards
          image="/Images/favouriteCard2.jpg"
          price={1299}
          name="The Mountain in Forest"
        />
      </div>
      <div className={`${styles.notFindPackageContainer}`}>
        <h1>
          Did not find your Package? Feel free to ask us. We will make it for you
        </h1>
        <Link
          href={"/contact"}
          className={`${styles.customPackageRequestBtn}`}
        >
          REQUEST CUSTOM PRICE
        </Link>
      </div>
    </div>
  );
}
export default Page;
