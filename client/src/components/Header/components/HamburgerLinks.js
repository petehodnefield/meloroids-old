import React from "react";

const HamburgerLinks = ({ isOpen, setIsOpen }) => {
  return (
    <div className="hamburger-links-wrapper">
      <ul className="hamNav__list">
        <li className="hamNav__li">
          <a className="h3">Train</a>
        </li>
        <li className="hamNav__li">
          <a className="h3">Learn</a>
        </li>
        <li className="hamNav__li">
          <a className="h3">Stats</a>
        </li>
      </ul>
      <button className="btn btn-primary btn-hamburger h3">Login</button>
    </div>
  );
};
export default HamburgerLinks;
