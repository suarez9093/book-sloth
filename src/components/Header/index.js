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
          <li className="social-item">
            <a
              className="social-link"
              href="https://www.facebook.com/booksloth/"
            >
              {" "}
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              href="https://www.instagram.com/bookslothapp/?hl=en"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              href="https://twitter.com/bookslothapp?lang=en"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="header-title">Community</h1>
    </header>
  );
}

export default Header;
