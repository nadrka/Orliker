import React from "react";
import TeamStatistics from "./TeamStatistics/TeamStatistics";
import "./Statistics.css";
const matchStatistics = props => {
  return (
    <div className="MatchStatistics">
      <TeamStatistics team={props.statistics.homeTeam} />
      <TeamStatistics team={props.statistics.awayTeam} />
    </div>
  );
};

export default matchStatistics;
