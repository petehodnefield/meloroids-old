import { React } from "react";

import { useQuery } from "@apollo/client";
import { SINGLE_SONG } from "../../../utils/queries";
import Juice from "../../../assets/artists/juice.jpeg";
import TwentyOne from "../../../assets/artists/21.jpeg";
import Doja from "../../../assets/artists/doja.png";
import Harlow from "../../../assets/artists/harlow.png";
import Gunna from "../../../assets/artists/gunna.jpeg";
import ReferenceSongs from "../../../components/ReferenceSongs/index";
import KeyTempoChords from "../../../components/KeyTempoChords";
import ReRoll from "../../../components/KeyTempoChords/ReRoll";
import { chordIcon, keyIcon, tempoIcon } from "../../../data/icons";

function FreestyleCard({ artist_name }) {
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
      <div className="container">
        {" "}
        <div className="artist-container">
          <ReRoll></ReRoll>
          <div className="card-img-container">
            {" "}
            <img src={artistImg} className="  card__img"></img>
          </div>
          <div className="card-wrapper">
            <h2 className="card__header">"{selectedSong}"</h2>
            <KeyTempoChords
              selectedKey={selectedKey}
              selectedTempo={selectedTempo}
              selectedProgression={selectedProgression}
            ></KeyTempoChords>
          </div>
        </div>
        <ReferenceSongs
          artist_name={artist_name}
          progression={selectedProgression}
        ></ReferenceSongs>
      </div>
    );
  }
}

export default FreestyleCard;
