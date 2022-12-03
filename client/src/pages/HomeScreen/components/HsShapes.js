import React from "react";

const HsShapes = () => {
  return (
    <div className="hs-shape-wrapper">
      <img
        className="hs__shape"
        src={require("../../../assets/images/pink-shape.png")}
      ></img>
      <div className="hs-shape-img-wrapper">
        <img
          className="hs__shape-img"
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        ></img>
      </div>
    </div>
  );
};

export default HsShapes;
