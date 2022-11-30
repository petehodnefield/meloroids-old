import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../../assets/logo/meloroids.png";
import logoSmall from "../../assets/logo/logo-small.png";

import NavLinks from "./components/NavLinks";
import Hamburger from "./components/Hamburger";
import HamburgerLinks from "./components/HamburgerLinks";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSelected, setNavSelected] = useState("");
  console.log(navSelected);
  return (
    <div className="header">
      {" "}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
      {isOpen ? (
        <HamburgerLinks
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navSelected={navSelected}
          setNavSelected={setNavSelected}
        ></HamburgerLinks>
      ) : (
        ""
      )}
      <div className="logo-wrapper">
        <Link className="home-link" to={`/train`}>
          <img className="logo-full" src={logoFull} />
          <img className="logo-small" src={logoSmall} />
        </Link>
      </div>
      <NavLinks
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></NavLinks>
    </div>
  );
};
export default Header;
