import React from "react";
import TeamStatistics from "./TeamStatistics/TeamStatistics";
import "./Statistics.css";
const matchStatistics = props => {
  return (
    <div className="MatchStatistics">
      <TeamStatistics />
      <TeamStatistics />
    </div>
  );
};

export default matchStatistics;
