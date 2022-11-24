import React from "react";
import { useQuery } from "@apollo/client";
import { REFERENCE_SONGS, ARTIST_AND_PROGRESSION } from "../../utils/queries";
const ReferenceSongs = ({ artist_name, progression }) => {
  const { data, loading, error } = useQuery(REFERENCE_SONGS, {
    variables: { artistName: artist_name, progression: progression },
  });
  if (loading) {
    return (
      <div className="loading-container">
        <h1>loading</h1>
      </div>
    );
  } else {
    const songArray = data.referenceSongs;

    let artistNameConcat = artist_name.split(" ").join("");
    if (artistNameConcat === "21Savage") {
      artistNameConcat = "twentyone";
    }

    return (
      <div className="ref-container">
        <div className="ref-header-wrapper">
          <h3 className="ref__header">Other songs that use</h3>{" "}
          <span className="bold pill pd1 btn-primary primary">
            {progression}
          </span>
        </div>
        <div className="ref-song-grid">
          {songArray.map((song) => (
            <div className={`ref-song-container ${artistNameConcat}`}>
              <h2 className="ref__text bold">"{song.song_name}"</h2>
              <p className="ref__text ref__album">{song.album_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default ReferenceSongs;
