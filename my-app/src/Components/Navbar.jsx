import React, { useState } from "react";
import "./nav.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">My-News</div>
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/login" onClick={closeMenu}>
                Login
              </a>
            </li>
            <li>
              <a href="/signup" onClick={closeMenu}>
                Register
              </a>
            </li>
            <li>
              <a href="favorites" onClick={closeMenu}>
              Favorites
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "active" : ""}`} />
          <div className={`bar ${isMenuOpen ? "active" : ""}`} />
          <div className={`bar ${isMenuOpen ? "active" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
