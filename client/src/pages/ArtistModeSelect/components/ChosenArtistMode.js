import React from "react";

const ChosenArtistMode = ({ selectedArtistsPhoto, selectedModePhoto }) => {
  return (
    <div>
      <div className="selectedDataContainer">
        <div className="artistPhotoContainer">
          <img className="selectedPhoto" src={selectedArtistsPhoto} />
        </div>
        <div className="artistPhotoContainer">
          <img className="selectedPhoto" src={selectedModePhoto} />
        </div>
      </div>
    </div>
  );
};
export default ChosenArtistMode;
