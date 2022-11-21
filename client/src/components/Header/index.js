import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../../assets/logo/meloroids.png";
import logoSmall from "../../assets/logo/logo-small.png";

import Hamburger from "./components/Hamburger";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      {" "}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
      {isOpen ? (
        <div className="hamburger-links-wrapper">
          <ul>
            <li>
              <a>Hello</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
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
