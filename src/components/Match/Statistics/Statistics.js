import React from "react";
import TeamStatistics from "./TeamStatistics/TeamStatistics";
import "./Statistics.css";
const matchStatistics = props => {
  return (
    <div className="MatchStatistics">
      <TeamStatistics team={props.homeTeam} />
      <TeamStatistics team={props.awayTeam} />
    </div>
  );
};

export default matchStatistics;
