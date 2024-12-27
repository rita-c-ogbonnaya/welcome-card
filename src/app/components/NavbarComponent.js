"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import styles from "@/app/styles/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <>
        <meta charSet="utf-8" />
        <title>A local card for International Travellers - Welcome Card</title>
        <meta
          content="A local card for International Travellers"
          name="description"
        />
        <meta
          content="A local card for International Travellers - Welcome Card"
          property="og:title"
        />
        <meta
          content="A local card for International Travellers"
          property="og:description"
        />
        <meta
          content="A local card for International Travellers - Welcome Card"
          property="twitter:title"
        />
        <meta
          content="A local card for International Travellers"
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="HCyGIn7MGhirscygXNSqF4kQRat-J2nUPQUsb0AS5l8"
          name="google-site-verification"
        />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="css/welcomecard.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        {/* [if lt IE 9]><![endif] */}
        <link
          href="images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />
      </>
      
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img src="/images/WC-1.svg" alt="Welcome Card Logo" />
        </a>

        {/* Menu Button */}
        <div className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className={styles.icon} /> // Display cancel icon when menu is open
          ) : (
            <FiMenu className={styles.icon} /> // Display hamburger icon when menu is closed
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${styles.navbarMenu} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a href="#About" className={styles.navLink}>
            About
          </a>
          <a href="#Features" className={styles.navLink}>
            Features
          </a>
          <a href="#FAQ" className={styles.navLink}>
            FAQs
          </a>
          <a href="#Try-app" className={styles.buttonPrimary}>
            Download App
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
