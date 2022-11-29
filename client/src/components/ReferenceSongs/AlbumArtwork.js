import React, { useRef } from "react";

const AlbumArtwork = ({ album, artist }) => {
  console.log("artist", artist);
  let albumNameConcat = album.split(" ").join("");
  console.log(albumNameConcat);
  return (
    <img
      className="ref__albumArt"
      src={require(`../../assets/aa/${artist}/${albumNameConcat}.png`)}
    ></img>
  );
};
export default AlbumArtwork;
