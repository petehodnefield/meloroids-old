import React from "react";
import { useState, useEffect } from "react";

const Timer = ({}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(6);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds == 0 && minutes == 0) {
      clearInterval(interval);
      window.location.replace("/");
    } else if (seconds == 0) {
      clearInterval(interval);
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="timer-container">
      {seconds < 10 ? (
        <p className="timer h2">
          {" "}
          {minutes}:0{seconds}
        </p>
      ) : (
        <p className="timer h2">
          {" "}
          {minutes}:{seconds}
        </p>
      )}
    </div>
  );
};
export default Timer;
