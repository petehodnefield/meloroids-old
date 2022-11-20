import React from "react";
import { Link } from "react-router-dom";
import logoFull from "../../assets/logo/meloroids.png";
import logoSmall from "../../assets/logo/logo-small.png";
const Header = () => {
  return (
    <div className="header">
      {" "}
      <div className="hamburger-wrapper">
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
      <div className="logo-wrapper">
        <Link className="home-link" to={`/`}>
          <img className="logo-full" src={logoFull} />
          <img className="logo-small" src={logoSmall} />
        </Link>
      </div>
    </div>
  );
};
export default Header;
