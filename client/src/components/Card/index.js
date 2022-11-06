import { React } from "react";
import chordIcon from "../../assets/icons/chord-icon.png";
import keyIcon from "../../assets/icons/key-icon.png";
import tempoIcon from "../../assets/icons/tempo-icon.png";

function Card({ artist_name, tempo, keyData, progression, minutes, seconds }) {
  return (
    <div>
      {" "}
      <div className="artist-container">
        {" "}
        <div className="row">
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
          <div className="img-container">
            {" "}
            <img
              src="https://at-cdn-s02.audiotool.com/2017/12/25/documents/712790ezfzl/0/cover256x256-b433d6a06ca94fa08adaca3fdf3ecaca.jpg"
              className="artist-img mode-img"
            ></img>
          </div>
          <button>Reroll</button>
        </div>
        <div className="row">
          <div className="data-icon-container">
            <img className="data-icon" src={keyIcon}></img>
            <p>{keyData}</p>
          </div>
          <div className="data-icon-container">
            <img className="data-icon" src={tempoIcon}></img>
            <p>{tempo}</p>
          </div>
          <div className="data-icon-container">
            <img className="data-icon" src={chordIcon}></img>
            <p>{progression}</p>
          </div>
        </div>
        <button className="btn start-btn">MIDI</button>
      </div>
      <div className=" songs-used-container">
        <h3>Songs that use this progression: </h3>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Card;
