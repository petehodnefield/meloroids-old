import React from "react";
import logoLarge from "../../assets/logo/meloroids.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="logo-footer-wrapper">
        <img className="logo-footer" src={logoLarge}></img>
      </div>
      <p className="p2">No more illiterate producers.</p>
      <p className="p3">©2022 Meloroids LLC</p>
    </footer>
  );
}

export default Footer;
