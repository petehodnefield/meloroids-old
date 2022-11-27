import { React } from "react";

import { useQuery } from "@apollo/client";
import { SINGLE_SONG } from "../../../utils/queries";
import Juice from "../../../assets/artists/juice.jpeg";
import TwentyOne from "../../../assets/artists/21.jpeg";
import Doja from "../../../assets/artists/doja.jpeg";
import Harlow from "../../../assets/artists/harlow.jpeg";
import Gunna from "../../../assets/artists/gunna.jpeg";
import ReferenceSongs from "../../../components/ReferenceSongs/index";
import ReferenceSongsFrequency from "../../../components/ReferenceSongs/ReferenceSongsFrequency";
import KeyTempoChords from "../../../components/KeyTempoChords";
import ReRoll from "../../../components/KeyTempoChords/ReRoll";
import { chordIcon, keyIcon, tempoIcon } from "../../../data/icons";

function TrainInfo({ artist_name }) {
  console.log(chordIcon, keyIcon);
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
      <div className="train-wrapper">
        <div className="train-contents">
          <div className="box-shadow train-img-container">
            {" "}
            <img src={artistImg} className="  train__img"></img>
          </div>
          <div className="song-data-wrapper">
            <h2 className="song__header ps1">{selectedSong}</h2>
            <KeyTempoChords
              selectedKey={selectedKey}
              selectedTempo={selectedTempo}
              selectedProgression={selectedProgression}
            ></KeyTempoChords>
            <ReRoll></ReRoll>
          </div>
        </div>
        <ReferenceSongsFrequency
          selectedProgression={selectedProgression}
          artist_name={artist_name}
        ></ReferenceSongsFrequency>
        <ReferenceSongs
          artist_name={artist_name}
          progression={selectedProgression}
          selectedSong={selectedSong}
        ></ReferenceSongs>
      </div>
    );
  }
}

export default TrainInfo;
