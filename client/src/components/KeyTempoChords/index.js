import React from "react";
import { chordIcon, keyIcon, tempoIcon } from "../../data/icons";

const KeyTempoChords = ({
  selectedKey,
  selectedTempo,
  selectedProgression,
}) => {
  return (
    <div>
      <div className="card-icon-container">
        <div className="data-icon-container">
          <img className="data-icon" src={keyIcon}></img>
          <p>{selectedKey}</p>
        </div>
        <div className="data-icon-container">
          <img className="data-icon" src={tempoIcon}></img>
          <p>{selectedTempo}</p>
        </div>
        <div className="data-icon-container">
          <img className="data-icon" src={chordIcon}></img>
          <p>{selectedProgression}</p>
        </div>
        <button className="btn start-btn">MIDI</button>
      </div>
    </div>
  );
};
export default KeyTempoChords;
