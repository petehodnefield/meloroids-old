import { React } from "react";

function Card({ artist_name, tempo, key, progression, minutes, seconds }) {
  return (
    <div>
      {" "}
      <div className="artist-container">
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
            <h3 className="artist-name">{artist_name}</h3>
            <h4>Progression: {progression}</h4>
            <h4>This progression is used in 40% of {artist_name}'s songs</h4>
            <h4> Key: {key}</h4>
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
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Card;
