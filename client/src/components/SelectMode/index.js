import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import SelectArtist from "../SelectArtist";
import intervalIcon from "../../assets/icons/interval-icon.jpg";
import freestyleIcon from "../../assets/icons/freestyle-icon.jpg";
import Gunna from "../../assets/artists/gunna.jpeg";
import Doja from "../../assets/artists/doja.png";
import Juice from "../../assets/artists/juice.jpeg";
import Harlow from "../../assets/artists/harlow.png";
import Twenty1 from "../../assets/artists/21.jpeg";

function SelectMode() {
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedModePhoto, setSelectedModePhoto] = useState("");

  const modes = [
    {
      name: "Interval",
      photo: intervalIcon,
    },
    {
      name: "Freestyle",
      photo: freestyleIcon,
    },
  ];

  // State
  const [selectedArtists, setSelectedArtists] = useState("");
  const [selectedArtistsPhoto, setSelectedArtistsPhoto] = useState("");

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
  // Artist array
  const artists = [
    {
      name: "Jack Harlow",
      photo: Harlow,
    },
    {
      name: "Doja Cat",
      photo: Doja,
    },
    {
      name: "21 Savage",
      photo: Twenty1,
    },
    {
      name: "Gunna",
      photo: Gunna,
    },
    {
      name: "Juice WRLD",
      photo: Juice,
    },
  ];
  return (
    <div className="container">
      <div className="select-container">
        <h2 className="select__text">Select an artist</h2>
        <select
          name="artists"
          id="artists"
          className="artistSelect"
          onChange={(e) => setSelectedArtists(e.target.value)}
        >
          <option selected></option>
          {artists.map((artist) => (
            <option key={artist.name}>{artist.name}</option>
          ))}
        </select>
      </div>
      <div className="select-container">
        <h2 className="select__text">Select a mode</h2>
        <div className="button-container">
          {modes.map((mode) => (
            <button
              className={`btn btn-primary ${
                selectedMode === mode.name ? "selected-mode" : ""
              }`}
              onClick={() => setSelectedMode(mode.name)}
            >
              {mode.name}
            </button>
          ))}
        </div>
        {!selectedArtists ? (
          ""
        ) : (
          <div className="selectedDataContainer">
            <div className="artistPhotoContainer">
              <img className="selectedPhoto" src={selectedArtistsPhoto} />
            </div>
            <div className="artistPhotoContainer">
              <img className="selectedPhoto" src={selectedModePhoto} />
            </div>
          </div>
        )}

        {!selectedMode || !selectedArtists ? (
          ""
        ) : (
          <div>
            <div>
              <img />
            </div>
            <Link
              className="btn btn-secondary"
              to={`/artists/${selectedArtists}/${selectedMode}`}
            >
              Start
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectMode;
