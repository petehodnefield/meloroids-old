import React from "react";
import { useQuery } from "@apollo/client";

import { SINGLE_SONG, ARTIST_AND_PROGRESSION } from "../../utils/queries";

const ReferenceSongsFrequency = ({ selectedProgression, artist_name }) => {
  const { data, loading, error } = useQuery(ARTIST_AND_PROGRESSION, {
    variables: { artistName: artist_name, progression: selectedProgression },
  });
  const {
    data: singleData,
    loading: singleLoading,
    singleError,
  } = useQuery(SINGLE_SONG, {
    variables: { artistName: artist_name },
  });
  if (loading || singleLoading) {
    return (
      <div className="loading-container">
        <h1>loading</h1>
      </div>
    );
  } else {
    const totalSongs = singleData.song.length;
    const songsWithProgression = data.artistAndProgression.length;

    const progressionFrequency = (songsWithProgression / totalSongs) * 100;
    const frequencyRound = Math.floor(progressionFrequency);
    return (
      <div className="frequency-bar-container">
        <h5 className="frequency__text">
          <span className="btn-selected bold  pill pd1">
            {selectedProgression}
          </span>{" "}
          is used in <span className="bold">{frequencyRound}% </span> of{" "}
          {artist_name}'s songs
        </h5>
        <div className="box-shadow frequency__barfr pill">
          <div
            className="frequency__barbg pill"
            style={{ width: progressionFrequency + "%" }}
          ></div>
        </div>
      </div>
    );
  }
};
export default ReferenceSongsFrequency;
