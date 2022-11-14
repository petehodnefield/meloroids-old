import React from "react";

const ReRoll = () => {
  return (
    <div>
      <button
        className="btn btn-reroll"
        onClick={() => {
          document.location.reload();
        }}
      >
        🎲
      </button>
    </div>
  );
};
export default ReRoll;
