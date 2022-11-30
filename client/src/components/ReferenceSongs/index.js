import React from "react";
import { useQuery } from "@apollo/client";
import { REFERENCE_SONGS, ARTIST_AND_PROGRESSION } from "../../utils/queries";
import AlbumArtwork from "./AlbumArtwork";
const ReferenceSongs = ({ artist_name, progression, selectedSong }) => {
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
    let artistNameNewConcat = artist_name.split(" ").join("");
    if (artistNameConcat === "21Savage") {
      artistNameConcat = "twentyone";
    }

    const displayReferenceSongs = (song) => {
      console.log(song);

      return song.map((song) => {
        return (
          <div className={`ref-song-container ${artistNameConcat}`}>
            <div className="ref__textWrapper">
              <p className="ref__text ">"{song.song_name}"</p>
              {/* <p className="ref__text ref__album">{song.album_name}</p> */}
            </div>
            <AlbumArtwork
              album={song.album_name}
              artist={artistNameNewConcat}
            ></AlbumArtwork>
          </div>
        );
      });
    };

    return (
      <div className="ref-container-blank">
        {" "}
        {songArray.length <= 1 ? (
          <div className="ref-container-noRef">
            <p className="ref__noRef bold">
              There are no other songs by {artist_name} with this progression!
            </p>
          </div>
        ) : (
          <div className="ref-container">
            <div className="ref-header-wrapper">
              <h3 className="ref__header">Other songs that use</h3>{" "}
              <span className="bold pill pd1 btn-primary primary">
                {progression}
              </span>
            </div>
            <div className="ref-song-grid">
              {displayReferenceSongs(songArray)}
            </div>{" "}
          </div>
        )}
      </div>
    );
  }
};
export default ReferenceSongs;
