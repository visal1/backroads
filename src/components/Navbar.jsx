import React from "react";
import logo from "../images/logo.svg";
import { pagelinks } from "../data";
import { sociallinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pagelinks.map((cur) => {
            return (
              <li key={cur.id}>
                <a href={cur.href} className="nav-link">
                  {" "}
                  {cur.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {sociallinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
