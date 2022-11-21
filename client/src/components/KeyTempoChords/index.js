import React from "react";
import { chordIcon, keyIcon, tempoIcon } from "../../data/icons";

const KeyTempoChords = ({
  selectedKey,
  selectedTempo,
  selectedProgression,
}) => {
  return (
    <div className="icon-data-wrapper">
      <div className="song-data-container">
        <img className="data-icon" src={keyIcon}></img>
        <p className="p1">{selectedKey}</p>
      </div>
      <div className="song-data-container">
        <img className="data-icon" src={tempoIcon}></img>
        <p className="p1">{selectedTempo} BPM</p>
      </div>
      <div className="song-data-container">
        <img className="data-icon" src={chordIcon}></img>
        <p className="p1">{selectedProgression}</p>
      </div>
    </div>
  );
};
export default KeyTempoChords;
