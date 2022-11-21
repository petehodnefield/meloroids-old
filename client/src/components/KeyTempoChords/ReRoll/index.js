import React from "react";
import diceIcon from "../../../assets/icons/dice-icon.svg";

const ReRoll = () => {
  return (
    <button
      className="btn-reroll"
      onClick={() => {
        document.location.reload();
      }}
    >
      <img className="dice-icon" src={diceIcon} />
    </button>
  );
};
export default ReRoll;
