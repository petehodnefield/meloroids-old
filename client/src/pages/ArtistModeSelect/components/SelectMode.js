import React from "react";

const SelectMode = ({ modes, selectedMode, setSelectedMode }) => {
  return (
    <div>
      <div className="select-container">
        <h2 className="select__text">Select a mode</h2>
        <div className="button-container">
          {modes.map((mode) => (
            <button
              className={`btn btn-primary ${
                selectedMode === mode.name ? "selected-mode" : ""
              }`}
              onClick={() => setSelectedMode(mode.name)}
            >
              {mode.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SelectMode;
