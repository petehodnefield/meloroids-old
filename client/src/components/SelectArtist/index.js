import React, { useState, useEffect } from "react";

function SelectArtist() {
  // State
  const [selectedArtists, setSelectedArtists] = useState("");
  console.dir(selectedArtists);

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

  //   function selectedArtists() {
  //     console.log("hi");
  //   }
  return (
    <div className="container">
      <h2>Step 1:</h2>
      <p>Select the artist(s) you want to make loops in the style of</p>
      <div className="row">
        {artists.map((artist) => (
          <div
            className={`artist-container ${
              selectedArtists === artist.name ? "selected-artist" : ""
            }`}
            onClick={(e) => setSelectedArtists(artist.name)}
          >
            <h3>{artist.name}</h3>
            <img
              src={artist.photo}
              className="artist-img"
              alt={`${artist.name}`}
            />
          </div>
        ))}
      </div>
      {!selectedArtists ? "" : <h3>Selected artist: {selectedArtists} </h3>}
    </div>
  );
}

export default SelectArtist;
