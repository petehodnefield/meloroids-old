import { React } from "react";
import chordIcon from "../../assets/icons/chord-icon.png";
import keyIcon from "../../assets/icons/key-icon.png";
import tempoIcon from "../../assets/icons/tempo-icon.png";
import { useQuery } from "@apollo/client";
import { SINGLE_SONG } from "../../utils/queries";
import Timer from "../Timer";
import Juice from "../../assets/artists/juice.jpeg";
import TwentyOne from "../../assets/artists/21.jpeg";
import Doja from "../../assets/artists/doja.png";
import Harlow from "../../assets/artists/harlow.png";
import Gunna from "../../assets/artists/gunna.jpeg";
import Reference from "../Reference/index";

function Card({ artist_name }) {
  const {
    data: songData,
    loading: songLoading,
    error: songError,
  } = useQuery(SINGLE_SONG, {
    variables: { artistName: artist_name },
  });
  if (songLoading) {
    return <p>loading</p>;
  } else {
    const randomIndex =
      songData.song[Math.floor(Math.random() * songData.song.length)];
    const selectedSong = randomIndex.song_name;
    const selectedKey = randomIndex.key;
    const selectedProgression = randomIndex.progression;
    const selectedTempo = randomIndex.tempo;

    let artistImg;
    if (artist_name === "Juice WRLD") {
      artistImg = Juice;
    } else if (artist_name === "Doja Cat") {
      artistImg = Doja;
    } else if (artist_name === "Gunna") {
      artistImg = Gunna;
    } else if (artist_name === "21 Savage") {
      artistImg = TwentyOne;
    } else if (artist_name === "Jack Harlow") {
      artistImg = Harlow;
    }

    return (
      <div className="container">
        {" "}
        <div className="artist-container">
          <button
            className="btn btn-reroll"
            onClick={() => {
              document.location.reload();
            }}
          >
            🎲
          </button>
          <div className="row">
            <Timer></Timer>
            <div className="img-container">
              {" "}
              <img src={artistImg} className="artist-img mode-img "></img>
            </div>
          </div>

          <h2 className="card__header">{selectedSong}</h2>
          <div className="row">
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
          </div>
          <button className="btn start-btn">MIDI</button>
        </div>
        <Reference
          artist_name={artist_name}
          progression={selectedProgression}
        ></Reference>
      </div>
    );
  }
}

export default Card;
