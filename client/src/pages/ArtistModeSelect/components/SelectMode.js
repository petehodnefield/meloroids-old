import React from "react";

const SelectMode = ({ modes, selectedMode, setSelectedMode }) => {
  return (
    <div className="select-wrapper">
      <h4 className="select__textPrompt uppercase">Select a mode</h4>
      <div className="select-btn-wrapper">
        {modes.map((mode) => (
          <button
            className={`btn p2 btn-primary pill ${
              selectedMode === mode.name ? "btn-selected" : ""
            }`}
            onClick={() => setSelectedMode(mode.name)}
          >
            {mode.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SelectMode;
