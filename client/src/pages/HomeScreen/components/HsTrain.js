import React from "react";
import { Icon } from "@iconify/react";

import hsTrainImg from "../../../assets/images/hs-train.png";
const HsTrain = () => {
  return (
    <div className="hs-train-container">
      <div className="hs-train-text-img-wrapper">
        <div className="hs-train-text-wrapper">
          <div className="hs-train-header-wrapper">
            <h2 className="hs__train-header bold">
              TRAIN <span className="hs__train-sub-header">by Meloroids</span>
            </h2>
          </div>
          <p className="p3 hs__text hs__train-text">
            Lorem ipsum dolor sit amet consectetur. Euismod mattis proin rutrum
            vulputate mi. Enim nullam ipsum donec sed ornare vitae diam ut et.
            Tempus quis interdum quis scelerisque leo condimentum sed nulla.
          </p>
          <a href="/train">
            <button className="btn p-gradient btn-cta">Get Started</button>
          </a>
        </div>
        <div className="hs__train-img-wrapper">
          <img className="hs__train-img" src={hsTrainImg} />
        </div>
      </div>
      <div className="hs-train-card-wrapper">
        <div className="hs__train-card p-gradient">
          <Icon
            className="hs__card-icon"
            icon="fluent-emoji-high-contrast:thinking-face"
          />

          <h4 className="bold hs__card-header">Analysis Paralysis</h4>
          <p className="p2 hs__card-text">
            Meloroids pulls the key, tempo, and chord progression from an actual
            song by the selected artist. Elimates the analysis paralysis that
            comes with loop making.
          </p>
        </div>
        <div className="hs__train-card p-gradient">
          <Icon className="hs__card-icon" icon="mdi:midi-port" />

          <h4 className="bold hs__card-header">1000+ MIDI</h4>
          <p className="p2 hs__card-text">
            Meloroids instantly provides you a MIDI file of the selected chord
            progression to give initial inspiration.{" "}
          </p>
        </div>
        <div className="hs__train-card p-gradient">
          <Icon className="hs__card-icon" icon="ic:baseline-mic" />

          <h4 className="bold hs__card-header">20+ Artists</h4>
          <p className="p2 hs__card-text">
            Meloroids focuses on rappers with small-mid size followings.
            Targeting these artists increase your odds of a placement. New
            artists get added every week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HsTrain;
