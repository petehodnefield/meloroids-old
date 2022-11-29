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
      if (song.length <= 1) {
        return <div>No other songs with us</div>;
      } else {
        return song.map((song) => {
          if (song.song_name === selectedSong) {
            return;
          } else {
            return (
              <div className={`ref-song-container ${artistNameConcat}`}>
                <div className="ref__textWrapper">
                  <h2 className="ref__text bold">"{song.song_name}"</h2>
                  <p className="ref__text ref__album">{song.album_name}</p>
                </div>
                <AlbumArtwork
                  album={song.album_name}
                  artist={artistNameNewConcat}
                ></AlbumArtwork>
              </div>
            );
          }
        });
      }
    };

    return (
      <div className="ref-container">
        <div className="ref-header-wrapper">
          <h3 className="ref__header">Other songs that use</h3>{" "}
          <span className="bold pill pd1 btn-primary primary">
            {progression}
          </span>
        </div>

        <div className="ref-song-grid">{displayReferenceSongs(songArray)}</div>
      </div>
    );
  }
};
export default ReferenceSongs;
