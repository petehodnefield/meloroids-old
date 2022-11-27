import React, { Component } from "react";

const NavLinks = ({ navSelected, setNavSelected }) => {
  return (
    <div className="nav-links-wrapper">
      <ul className="nav__ul">
        <li>
          <a
            onClick={() => setNavSelected("Train")}
            className={`p1 ${navSelected === "Train" ? "selected__nav" : ""}`}
          >
            Train
          </a>
        </li>
        <li>
          <a
            onClick={() => setNavSelected("Learn")}
            className={`p1 ${navSelected === "Learn" ? "selected__nav" : ""}`}
          >
            Learn
          </a>
        </li>
        <li>
          <a
            onClick={() => setNavSelected("Stats")}
            className={`p1 ${navSelected === "Stats" ? "selected__nav" : ""}`}
          >
            Stats
          </a>
        </li>

        <button
          onClick={() => setNavSelected("Login")}
          className="pill btn-tertiary p1"
        >
          Login
        </button>
      </ul>
    </div>
  );
};

export default NavLinks;
