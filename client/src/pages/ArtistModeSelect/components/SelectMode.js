import React from "react";

const SelectMode = ({ modes, selectedMode, setSelectedMode }) => {
  return (
    <div>
      <div className="select-">
        <h5 className="select__text uppercase">Select a mode</h5>
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
