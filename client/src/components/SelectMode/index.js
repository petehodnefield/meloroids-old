import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import SelectArtist from "../SelectArtist";
import intervalIcon from "../../assets/icons/interval-icon.jpg";
import freestyleIcon from "../../assets/icons/freestyle-icon.jpg";

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
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Jack_Harlow_from_Warner_Music_New_Zealand_video.png",
    },
    {
      name: "Doja Cat",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/Doja_Cat_in_2021.jpg",
    },
    {
      name: "21 Savage",
      photo:
        "https://www.etonline.com/sites/default/files/styles/max_640x640/public/images/2020-02/gettyimages-1202009222.jpg?h=b4681939&itok=E9SFAWNn",
    },
    {
      name: "Gunna",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Gunna_in_2021.png",
    },
    {
      name: "Juice WRLD",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Juice_WRLD_-_Les_Ardentes_2019_%28cropped%29.jpg",
    },
  ];
  return (
    <div className="container">
      <div>
        <h2>Select an artist</h2>
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
      <div className="data-container">
        <h2>Select a mode</h2>
        <div className="button-container">
          {modes.map((mode) => (
            <button
              className={`btn select-btn ${
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
              className="btn start-btn"
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
