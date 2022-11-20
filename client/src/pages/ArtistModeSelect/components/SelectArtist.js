import React from "react";
const SelectArtist = (props) => {
  return (
    <>
      <div className="select-container">
        <h2 className="select__text">Select an artist</h2>
        <select
          name="artists"
          id="artists"
          className="artistSelect"
          onChange={(e) => props.setSelectedArtists(e.target.value)}
        >
          <option selected></option>
          {props.artists.map((artist) => (
            <option key={artist.name}>{artist.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectArtist;
