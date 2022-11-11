import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ARTISTS, SINGLE_ARTIST, SINGLE_SONG } from "../utils/queries";
import Card from "./Card";

function Interval({ photo }) {
  const { artists: artist, mode } = useParams();

  let artist__name = "Juice WRLD";
  const keyData = "AMinor";
  let progression = "i bVII bVI bVII";
  let tempo = "130 BPM";

  const { loading, error, data } = useQuery(SINGLE_ARTIST, {
    variables: { name: artist__name },
  });

  return (
    <div className="container">
      <Card
        artist_name={artist}
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
