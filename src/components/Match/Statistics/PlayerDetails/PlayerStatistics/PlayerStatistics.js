import React from "react";
import goals from "../../../../../assets/images/goals.png";
import assist from "../../../../../assets/images/assist.png";
import redCard from "../../../../../assets/images/red-card.png";
import yellowCard from "../../../../../assets/images/yellow-card.png";
import "./PlayerStatistics.css";
const playerStatistics = props => {
  return (
    <div className="MatchPlayerStatistics">
      {props.goals > 0 && (
        <div className="MatchPlayerStatistic">
          <img title="Gole" src={goals} width="30" height="30" /> x{" "}
          {props.goals}
        </div>
      )}
      {props.assists > 0 && (
        <div className="MatchPlayerStatistic">
          <img title="Asysty" src={assist} width="30" height="30" />x{" "}
          {props.assists}
        </div>
      )}
      {props.redCards > 0 && (
        <div className="MatchPlayerStatistic">
          <img title="Czerwone kartki" src={redCard} width="30" height="30" /> x{" "}
          {props.redCards}
        </div>
      )}
      {props.yellowCards > 0 && (
        <div className="MatchPlayerStatistic">
          <img title="Żółte kartki" src={yellowCard} width="30" height="30" /> x{" "}
          {props.yellowCards}
        </div>
      )}
    </div>
  );
};

export default playerStatistics;
