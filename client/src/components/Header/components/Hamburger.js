import React, { useState, useEffect } from "react";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`hamburger-wrapper ${
        isOpen ? "hamburger__open" : "hamburger__close"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
};

export default Hamburger;
