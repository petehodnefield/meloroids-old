import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ONE_SONG, ARTISTS } from "../utils/queries";
import Card from "./Card";

function Interval(props) {
  const [seconds, setSeconds] = useState(0);

  const [minutes, setMinutes] = useState(6);
  let { artists, photo } = useParams();
  let progression = "6545";
  const { loading, error, data } = useQuery(ONE_SONG, {
    variables: { artistName: artists, progression: progression },
  });
  const { artist_name, key } = data.oneSong;
  console.log(artist_name);
  const songsUsed = [
    {
      song: "Money",
      album: "Sample Album",
      img: "",
    },
    {
      song: "Honey",
      album: "Sample Album",
      img: "",
    },
    {
      song: "Bands",
      album: "Sample Album",
      img: "",
    },
  ];

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds == 0 && minutes == 0) {
      clearInterval(interval);
      window.location.replace("/");
    } else if (seconds == 0) {
      clearInterval(interval);
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( WOE!!!</p>;

  return (
    <div className="container">
      // <h2 className="section-header">Interval</h2>
      <Card
        artist_name={artist_name}
        minutes={minutes}
        seconds={seconds}
        key={key}
        progression={progression}
      ></Card>
      {/* <div className="artist-container">
        {" "}
        <div className="row">
          <div className="img-container">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Gunna_in_2021.png"
              className="artist-img mode-img"
            ></img>
          </div>
          <div className="column">
            <h3 className="artist-name">{artists}</h3>
            <h4>Progression: I V IV VI</h4>
            <h4>This progression is used in 40% of {artists}'s songs</h4>
          </div>
        </div>
        <div className="timer-container">
          {seconds < 10 ? (
            <p className="timer">
              {" "}
              {minutes}: 0{seconds}
            </p>
          ) : (
            <p className="timer">
              {" "}
              {minutes}: {seconds}
            </p>
          )}
        </div>
      </div>
      <div className=" songs-used-container">
        <h3>Songs that use this progression: </h3>
        <div className="row">
          {" "}
          {songsUsed.map((songs) => (
            <div className="songs-used">
              <h3>{songs.song}</h3>
              <h2>{songs.album}</h2>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
export default Interval;
