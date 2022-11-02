import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>No more illiterate producers.</p>
      <p>© {currentYear} Meloroids LLC</p>
    </footer>
  );
}

export default Footer;
