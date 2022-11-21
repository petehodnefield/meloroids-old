import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SelectArtist from "./components/SelectArtist";
import SelectMode from "./components/SelectMode";
import ChosenArtistMode from "./components/ChosenArtistMode";
import { artistsPhotos } from "../../data/artistsPhotos";
import { modesList } from "../../data/modesList";

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
        ></SelectMode>

        {!selectedArtists || !selectedMode ? (
          ""
        ) : (
          <ChosenArtistMode
            selectedArtistsPhoto={selectedArtistsPhoto}
            selectedModePhoto={selectedModePhoto}
          ></ChosenArtistMode>
        )}

        {!selectedMode || !selectedArtists ? (
          ""
        ) : (
          <button className="btn btn-primary btn-link">
            <Link
              className=" uppercase p2"
              to={`/artists/${selectedArtists}/${selectedMode}`}
            >
              Start
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default ArtistModeSelect;
