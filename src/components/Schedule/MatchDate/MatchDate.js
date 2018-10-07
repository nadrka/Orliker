import React from "react";
import "./MatchDate.css";

const matchDate = props => {
  return (
    <div>
      <div className="MatchDate">
        <div className="Date">{props.date.date}</div>
        <div className="Time">{props.date.time}</div>
      </div>
    </div>
  );
};

export default matchDate;
