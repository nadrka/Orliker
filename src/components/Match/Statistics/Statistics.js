import React from "react";
import TeamStatistics from "./TeamStatistics/TeamStatistics";
import "./Statistics.css";
const matchStatistics = props => {
  return (
    <div className="MatchStatistics">
      <TeamStatistics team={props.statistics.homeTeam} name={props.homeTeamName} />
      <TeamStatistics team={props.statistics.awayTeam} name={props.awayTeamName} />
    </div>
  );
};

export default matchStatistics;
