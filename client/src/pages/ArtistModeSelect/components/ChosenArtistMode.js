import React from "react";

const ChosenArtistMode = ({ selectedArtistsPhoto, selectedModePhoto }) => {
  return (
    <div className=" selected-data-wrapper">
      <div className="box-shadow selected__imgWrapper">
        <img className="selected__artistPhoto" src={selectedArtistsPhoto} />
      </div>
      <div className="box-shadow selected__imgWrapper selected-mode-wrapper ">
        <img
          className="selected__artistPhoto selected__mode "
          src={selectedModePhoto}
        />
      </div>
    </div>
  );
};
export default ChosenArtistMode;
