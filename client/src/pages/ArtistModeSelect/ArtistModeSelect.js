import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SelectArtist from "./components/SelectArtist";
import SelectMode from "./components/SelectMode";
import ChosenArtistMode from "./components/ChosenArtistMode";
import { artistsPhotos } from "../../data/artistsPhotos";
import { modesList } from "../../data/modesList";

import logoFull from "../../assets/logo/meloroids.png";

function ArtistModeSelect() {
  // import artistarray
  const artists = artistsPhotos;

  // import modeslist
  const modes = modesList;

  // State
  const [selectedArtists, setSelectedArtists] = useState("");
  const [selectedArtistsPhoto, setSelectedArtistsPhoto] = useState("");

  const [selectedMode, setSelectedMode] = useState("");
  const [selectedModePhoto, setSelectedModePhoto] = useState("");

  const [intervalLength, setIntervalLength] = useState("5");
  console.log("interval", intervalLength);

  useEffect(() => {
    artists.forEach((artist) => {
      if (artist.name === selectedArtists) {
        setSelectedArtistsPhoto(artist.photo);
      } else {
        return;
      }
    });
  }, [selectedArtists]);

  useEffect(() => {
    modes.forEach((mode) => {
      if (mode.name === selectedMode) {
        setSelectedModePhoto(mode.photo);
      } else {
        return;
      }
    });
  }, [selectedMode]);

  return (
    <div className="artist-mode-container">
      <div className="homepage-logo-wrapper">
        <img className="homepage-logo" src={logoFull}></img>
      </div>
      <div className="artist-mode-wrapper">
        <SelectArtist
          setSelectedArtists={setSelectedArtists}
          selectedArtists={selectedArtists}
          artists={artists}
        ></SelectArtist>
        <SelectMode
          modes={modes}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          intervalLength={intervalLength}
          setIntervalLength={setIntervalLength}
        ></SelectMode>

        {!selectedArtists || !selectedMode ? (
          ""
        ) : (
          <ChosenArtistMode
            selectedArtistsPhoto={selectedArtistsPhoto}
            selectedModePhoto={selectedModePhoto}
          ></ChosenArtistMode>
        )}

        <button
          className={` btn-primary btn-link ${
            !selectedArtists || !selectedMode
              ? "btn-cloudy"
              : "btn btn-nonCloudy"
          }`}
        >
          <Link
            className="primary uppercase p2"
            to={`/train/artists/${selectedArtists}/${selectedMode}`}
            state={{ from: intervalLength }}
          >
            Start
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ArtistModeSelect;
