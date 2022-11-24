import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../../assets/logo/meloroids.png";
import logoSmall from "../../assets/logo/logo-small.png";

import NavLinks from "./components/NavLinks";
import Hamburger from "./components/Hamburger";
import HamburgerLinks from "./components/HamburgerLinks";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      {" "}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
      {isOpen ? (
        <HamburgerLinks isOpen={isOpen} setIsOpen={setIsOpen}></HamburgerLinks>
      ) : (
        ""
      )}
      <div className="logo-wrapper">
        <Link className="home-link" to={`/`}>
          <img className="logo-full" src={logoFull} />
          <img className="logo-small" src={logoSmall} />
        </Link>
      </div>
      <NavLinks></NavLinks>
    </div>
  );
};
export default Header;
