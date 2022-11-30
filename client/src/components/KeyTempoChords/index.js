import React from "react";
import { chordIcon, keyIcon, tempoIcon } from "../../data/icons";

const KeyTempoChords = ({
  selectedKey,
  selectedTempo,
  selectedProgression,
}) => {
  return (
    <div className="song-data-card">
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
      <a download href={require(`../../assets/midi/i-bVII-bVI-bVII.mid`)}>
        <button className="btn btn-tertiary btn-midi">MIDI</button>
      </a>
    </div>
  );
};
export default KeyTempoChords;
