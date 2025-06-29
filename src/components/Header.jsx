import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderMobileMenu = () => {
    return (
      isMobileMenuOpen && (
        <div className="mobile-menu-popup">
          <div className="mobile-menu-content">
            <button className="close-button font-semibold" onClick={closeMobileMenu}>
              X
            </button>
            <Link to="/" className="mobile-menu-link">
              Home
            </Link>
            <Link to="/about" className="mobile-menu-link">
              About
            </Link>
            <Link to="/events" className="mobile-menu-link">
              Events
            </Link>
            <Link to="/contact" className="mobile-menu-link">
              Contact
            </Link>
          </div>
        </div>
      )
    );
  };

  return (
    <header className="s-header">
      <Box className="header-logo">
        <Link className="logo" href="/">
          <img src={require("../assets/logo/logo.png")} width="6%" alt="logo" />
        </Link>
      </Box>
 
      <nav className="header-nav-wrap">
        <div className="mt-0 py-1 flex items-center nav-icon justify-between">
          {/* <div className="mobile-menu-icon mobile-menu-button md:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                clipRule="evenodd"
              />
            </svg>
          </div> */}
        </div>
        <ul className="header-nav">
          <li className="current">
            <Link to="/" title="Home">
              <Typography variant="h6" paragraph>
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/about" title="About">
              <Typography variant="h6" paragraph>
                About
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/events" title="Services">
              <Typography variant="h6" paragraph>
                Events
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact us">
              <Typography variant="h6" paragraph>
                Contact
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
      {renderMobileMenu()}
      <Link className="header-menu-toggle mobile-menu-button md:hidden" onClick={toggleMobileMenu} href="#0">
        <span>Menu</span>
      </Link>


    </header>
  );
};
