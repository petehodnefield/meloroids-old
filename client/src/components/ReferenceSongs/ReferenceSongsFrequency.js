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
    return <h1>Loading</h1>;
  } else {
    const totalSongs = singleData.song.length;
    const songsWithProgression = data.artistAndProgression.length;

    const progressionFrequency = (songsWithProgression / totalSongs) * 100;
    const frequencyRound = Math.floor(progressionFrequency);
    return (
      <div>
        <h2>
          {artist_name} uses{" "}
          <span className="text-emphasis">{selectedProgression}</span> in{" "}
          {frequencyRound}% of their songs
        </h2>
        <div className="frequency-container">
          <div
            className="frequency__bar"
            style={{ width: progressionFrequency + "%" }}
          ></div>
        </div>
      </div>
    );
  }
};
export default ReferenceSongsFrequency;
