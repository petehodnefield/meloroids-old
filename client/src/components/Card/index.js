import { React } from "react";
import chordIcon from "../../assets/icons/chord-icon.png";
import keyIcon from "../../assets/icons/key-icon.png";
import tempoIcon from "../../assets/icons/tempo-icon.png";
import { useQuery } from "@apollo/client";
import { SINGLE_SONG } from "../../utils/queries";
import Timer from "../Timer";

function Card({ artist_name, tempo, keyData, progression }) {
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
    console.log(selectedSong);
    return (
      <div>
        {" "}
        <div className="artist-container">
          <h1>{selectedSong}</h1>
          <div className="row">
            <Timer></Timer>
            <div className="img-container">
              {" "}
              <img
                src="https://at-cdn-s02.audiotool.com/2017/12/25/documents/712790ezfzl/0/cover256x256-b433d6a06ca94fa08adaca3fdf3ecaca.jpg"
                className="artist-img mode-img"
              ></img>
            </div>

            <button
              onClick={() => {
                document.location.reload();
              }}
            >
              Reroll
            </button>
          </div>
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
        <div className=" songs-used-container">
          <h3>Songs that use this progression: </h3>
          <div className="row"></div>
        </div>
      </div>
    );
  }
}

export default Card;
