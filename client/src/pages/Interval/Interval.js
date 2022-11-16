import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ARTISTS, SINGLE_ARTIST, SINGLE_SONG } from "../../utils/queries";
import IntervalCard from "./components/IntervalCard";

function Interval({}) {
  // grab artist&&mode from parameters
  const { artists: artist, mode } = useParams();

  // use query to pull artist
  const { loading, error, data } = useQuery(SINGLE_ARTIST, {
    variables: { name: artist },
  });

  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <div className="container">
        <IntervalCard artist_name={artist}></IntervalCard>
      </div>
    );
  }
}
export default Interval;
