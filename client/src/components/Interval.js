import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ARTISTS, SINGLE_ARTIST, SINGLE_SONG } from "../utils/queries";
import Card from "./Card";

import Juice from "../assets/artists/juice.jpeg";
import TwentyOne from "../assets/artists/21.jpeg";
import Doja from "../assets/artists/doja.png";
import Harlow from "../assets/artists/harlow.png";
import Gunna from "../assets/artists/gunna.jpeg";

function Interval({ photo }) {
  // grab artist&&mode from parameters
  const { artists: artist, mode } = useParams();
  console.log("photo", photo);

  // use query to pull artist
  const { loading, error, data } = useQuery(SINGLE_ARTIST, {
    variables: { name: artist },
  });

  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <div className="container">
        <Card artist_name={artist}></Card>
      </div>
    );
  }
}
export default Interval;
