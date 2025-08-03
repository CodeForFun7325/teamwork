"use client"; 
import React, { useState } from 'react'; 

import "./mobileNav.css"; 

export default function MobileNav() { 
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpenClose = () => { 
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="hamburger-menu" onClick={handleMenuOpenClose}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <ul className="mobile-nav-window">
          <li className="close-button" onClick={handleMenuOpenClose}>&times;</li>
          <li className="mobile-nav-link"><a href="/">Home</a></li>
          <li className="mobile-nav-link"><a href="/about">About</a></li>
          <li className="mobile-nav-link"><a href="/contact">Contact</a></li>
        </ul>
      )}
    </>
  );
}