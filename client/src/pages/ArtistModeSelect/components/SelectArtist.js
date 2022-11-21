import React, { useEffect, useState } from "react";
import triangleIcon from "../../../assets/icons/triangle-icon.svg";
const SelectArtist = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <div className="select-wrapper">
        <h4 className="select__textPrompt uppercase">Select an artist</h4>
        <div className="select__prompt" onClick={() => setIsOpen(!isOpen)}>
          <img className="select__triangle" src={triangleIcon} />
          <p className="p1 select__artistText">{props.selectedArtists}</p>
        </div>
        {isOpen ? (
          <div className="choice-wrapper">
            {" "}
            {props.artists.map((artist) => (
              <div
                className="select__artist p3"
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
