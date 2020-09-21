import React from "react";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <img
          className="logo-img"
          src="https://www.booksloth.com/a/i/logo.png"
          alt="book sloth logo"
        />

        <ul className="social-links">
          <li className="social-link">
            <i class="fab fa-facebook-f"></i>
          </li>
          <li className="social-link">
            <i class="fab fa-instagram"></i>
          </li>
          <li className="social-link">
            <i class="fab fa-twitter"></i>
          </li>
        </ul>
      </nav>
      <h1 className="header-title">Community</h1>
    </header>
  );
}

export default Header;
