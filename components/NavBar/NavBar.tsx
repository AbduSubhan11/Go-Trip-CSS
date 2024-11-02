"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const pathname = usePathname();

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const toggleMenu = () => {
    setIsHamburger(false);
  };

  return (
    <nav className={`${styles.nav} `}>
      <div>
        <Image
          src={"/Images/Logo.png"}
          alt="logo"
          width={100}
          height={100}
          className={`${styles.navlogo}`}
        />
      </div>
      <div
        className={`${styles.navLinksParent}  ${
          isHamburger
            ? `${styles.hamburgerClickNavLinks} `
            : `${styles.hamburgerNotClickNavLinks} `
        }`}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className={`${styles.navLink}  ${
            pathname === "/" ? `${styles.active}` : ""
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${styles.svg} ${
              isHamburger
                ? `${styles.hamburgerClickNavSvg}`
                : `${styles.hamburgerNotClickNavSvg}`
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          HOME
        </Link>
        <Link
          href="/about"
          onClick={toggleMenu}
          className={`${styles.navLink} ${
            pathname === "/about" ? `${styles.active}` : " "
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${styles.svg} ${
              isHamburger
                ? `${styles.hamburgerClickNavSvg}`
                : `${styles.hamburgerNotClickNavSvg}`
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          ABOUT US
        </Link>
        <Link
          href="/package"
          onClick={toggleMenu}
          className={`${styles.navLink} ${
            pathname === "/package" ? `${styles.active}` : " "
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${styles.svg} ${
              isHamburger
                ? `${styles.hamburgerClickNavSvg}`
                : `${styles.hamburgerNotClickNavSvg}`
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
          PACKAGES
        </Link>
        <Link
          href="/contact"
          onClick={toggleMenu}
          className={`${styles.navLink} ${
            pathname === "/contact" ? `${styles.active}` : " "
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${styles.svg} ${
              isHamburger
                ? `${styles.hamburgerClickNavSvg}`
                : `${styles.hamburgerNotClickNavSvg}`
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          CONTACT US
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className={`${styles.Hamburger}`}>
        <button className={`${styles.HamburgerButton}`} onClick={hamburHandler}>
          <span
            className={`${styles.HamburgerSpan} ${
              isHamburger ? `${styles.HamburgerSpan1Rotate}` : ""
            }`}
          ></span>
          <span
            className={`${styles.HamburgerSpan}  ${
              isHamburger ? `${styles.HamburgerSpan2Opacity}` : ""
            }`}
          ></span>
          <span
            className={` ${styles.HamburgerSpan} ${
              isHamburger ? `${styles.HamburgerSpan3Rotate}` : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
