import React from "react";

const SelectMode = ({
  modes,
  selectedMode,
  setSelectedMode,
  intervalLength,
  setIntervalLength,
}) => {
  return (
    <div className="select-wrapper">
      <h4 className="select__textPrompt uppercase">Select a mode</h4>
      <div className="select-btn-wrapper">
        {selectedMode === "Interval" ? (
          <select
            className={`btn p2 btn-primary pill interval__select  ${
              selectedMode === "Interval" ? "btn-selected" : ""
            }`}
            onChange={(e) => setIntervalLength(e.target.value)}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        ) : (
          <button
            defaultValue={{ label: "Interval", value: 0 }}
            className={`btn p2 btn-primary pill  ${
              selectedMode === "Interval" ? "btn-selected" : ""
            }`}
            onClick={() => setSelectedMode("Interval")}
          >
            Interval
          </button>
        )}
        <button
          className={`btn p2 btn-primary pill  ${
            selectedMode === "Freestyle" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedMode("Freestyle")}
        >
          Freestyle
        </button>
      </div>
    </div>
  );
};
export default SelectMode;
