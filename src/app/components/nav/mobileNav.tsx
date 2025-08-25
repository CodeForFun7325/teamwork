"use client"; 
import React, { useState } from 'react'; 
import Link from 'next/link';

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
        <div className="mobile-nav-window">
          <div className="nav-header">
            <h2>Teamworks</h2>
            <button className="close-button" onClick={handleMenuOpenClose}>&times;</button>
          </div>
          
          <div className="mobile-nav-links">
            <Link className="mobile-nav-link" href="/">Home</Link>
            <Link className="mobile-nav-link" href="/">About</Link>
            <Link className="mobile-nav-link" href="/">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}