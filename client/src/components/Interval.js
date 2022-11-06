import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Card from "./Card";

function Interval(props) {
  const [seconds, setSeconds] = useState(0);

  const [minutes, setMinutes] = useState(6);
  let { artists, photo } = useParams();
  let artist_name = "Gunna";
  const keyData = "AMinor";
  let progression = "i bVII bVI bVII";
  let tempo = "130 BPM";

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

  return (
    <div className="container">
      <Card
        artist_name={artist_name}
        minutes={minutes}
        seconds={seconds}
        keyData={keyData}
        progression={progression}
        tempo={tempo}
      ></Card>
      <div className="examples-container">
        <div className="example">
          <img
            className="example__img"
            src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/iagxxilshn40ml2kklmt/gunna-wunna-cover-art"
          />
          <h2 className="example__song">Argentina</h2>
        </div>
        <div className="example">
          <img
            className="example__img"
            src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/iagxxilshn40ml2kklmt/gunna-wunna-cover-art"
          />
          <h2 className="example__song">Argentina</h2>
        </div>
        <div className="example">
          <img
            className="example__img"
            src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/iagxxilshn40ml2kklmt/gunna-wunna-cover-art"
          />
          <h2 className="example__song">Argentina</h2>
        </div>
      </div>
    </div>
  );
}
export default Interval;
