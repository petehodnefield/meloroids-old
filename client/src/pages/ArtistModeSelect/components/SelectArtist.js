import React, { useEffect, useState } from "react";
const SelectArtist = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <div className="select-wrapper">
        <h5 className="select__text uppercase">Select an artist</h5>
        <div
          className="select__prompt"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
        {isOpen ? (
          <div className="choice-wrapper">
            {" "}
            {props.artists.map((artist) => (
              <div
                className="select__artist"
                onClick={() => {
                  props.setSelectedArtists(artist.name);
                  setIsOpen(!isOpen);
                }}
                key={artist.name}
              >
                {artist.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default SelectArtist;
