import React from "react";

const HamburgerLinks = ({ isOpen, setIsOpen }) => {
  return (
    <div className="hamburger-links-wrapper">
      <ul className="hamNav__list">
        <li>
          <a>Login</a>
        </li>
        <li>
          <a>Train</a>
        </li>
        <li>
          <a>Learn</a>
        </li>
        <li>
          <a>Stats</a>
        </li>
      </ul>
    </div>
  );
};
export default HamburgerLinks;
