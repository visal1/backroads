import React from "react";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" rel="noreferrer" className="footer-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" rel="noreferrer" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" rel="noreferrer" className="footer-link">
            services
          </a>
        </li>
        <li>
          <a href="#featured" rel="noreferrer" className="footer-link">
            featured
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
