import React from "react";

const HsTwoColumns = () => {
  return (
    <div className="hs-columns-wrapper">
      <div className="hs-column-wrapper">
        <h3 className="hs__column-header">
          Learn the music theory <br></br> behind your favorite songs
        </h3>
        <p className="p3 hs__column-text">
          Lorem ipsum dolor sit amet consectetur. Sit ut dictum id auctor.
          Tempus ut fringilla id volutpat amet venenatis tempor est eget.
          Imperdiet non risus velit morbi neque quis ullamcorper id interdum.
        </p>
      </div>
      <div className="hs-column-wrapper">
        <h3 className="hs__column-header">
          <span className="bold">Real</span> Artists,{" "}
          <span className="bold">Real</span> Data,<br></br> only on Meloroids{" "}
        </h3>
        <p className="p3 hs__column-text">
          Lorem ipsum dolor sit amet consectetur. Sit ut dictum id auctor.
          Tempus ut fringilla id volutpat amet venenatis tempor est eget.
          Imperdiet non risus velit morbi neque quis ullamcorper id interdum.
        </p>
      </div>
    </div>
  );
};

export default HsTwoColumns;
