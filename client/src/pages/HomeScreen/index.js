import React from "react";
import HsHook from "./components/HsHook";
import HsShapes from "./components/HsShapes";
import HsTrain from "./components/HsTrain";
import HsTwoColumns from "./components/HsTwoColumns";

const HomeScreen = () => {
  return (
    <div className="hs-container">
      <HsShapes></HsShapes>
      <HsHook></HsHook>
      <HsTwoColumns></HsTwoColumns>
      <HsTrain></HsTrain>
    </div>
  );
};

export default HomeScreen;
