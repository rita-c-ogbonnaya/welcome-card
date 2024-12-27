"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // 
import styles from "@/app/styles/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
  );
};

export default Navbar;
