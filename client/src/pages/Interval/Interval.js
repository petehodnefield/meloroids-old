import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ARTISTS, SINGLE_ARTIST, SINGLE_SONG } from "../../utils/queries";
import intervalCard from "./components/IntervalCard";
import IntervalCard from "./components/IntervalCard";

function FreeStyle({ photo, minutes }) {
  // grab artist&&mode from parameters
  const { artists: artist, mode } = useParams();

  const location = useLocation();
  console.log("location", location);
  // use query to pull artist
  const { loading, error, data } = useQuery(SINGLE_ARTIST, {
    variables: { name: artist },
  });

  if (loading) {
    return (
      <div className="loading-container">
        <h1>loading</h1>
      </div>
    );
  } else {
    return <IntervalCard artist_name={artist} minutes={minutes}></IntervalCard>;
  }
}
export default FreeStyle;
