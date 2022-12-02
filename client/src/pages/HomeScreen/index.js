import React from "react";
import HsHook from "./components/HsHook";
import HsTrain from "./components/HsTrain";
import HsTwoColumns from "./components/HsTwoColumns";

const HomeScreen = () => {
  return (
    <div className="hs-container">
      <HsHook></HsHook>
      <HsTwoColumns></HsTwoColumns>
      <HsTrain></HsTrain>
    </div>
  );
};

export default HomeScreen;
