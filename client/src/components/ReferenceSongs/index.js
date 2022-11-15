import React from "react";
import { useQuery } from "@apollo/client";
import { REFERENCE_SONGS, ARTIST_AND_PROGRESSION } from "../../utils/queries";
const ReferenceSongs = ({ artist_name, progression }) => {
  console.log(progression);
  const { data, loading, error } = useQuery(REFERENCE_SONGS, {
    variables: { artistName: artist_name, progression: progression },
  });
  if (loading) {
    return <h1>loading</h1>;
  } else {
    const songArray = data.referenceSongs;

    console.log(songArray);
    let artistNameConcat = artist_name.split(" ").join("");
    if (artistNameConcat === "21Savage") {
      artistNameConcat = "twentyone";
    }
    console.log(artistNameConcat);

    return (
      <div>
        <div className="ref-song-grid">
          {songArray.map((song) => (
            <div className={`ref-song-container ${artistNameConcat}`}>
              <p className="ref__text">"{song.song_name}"</p>
              <p className="ref__text ref__album">{song.album_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default ReferenceSongs;
