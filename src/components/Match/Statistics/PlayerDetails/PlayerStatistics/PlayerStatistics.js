import React from "react";
import goals from "../../../../../assets/images/goals.png";
import assist from "../../../../../assets/images/assist.png";
import redCard from "../../../../../assets/images/red-card.png";
import yellowCard from "../../../../../assets/images/yellow-card.png";
import "./PlayerStatistics.css";
const playerStatistics = props => {
  return (
    <div className="MatchPlayerStatistics">
      <div className="MatchPlayerStatistic">
        <img title="Gole" src={goals} width="30" height="30" />2
      </div>
      <div className="MatchPlayerStatistic">
        <img title="Asysty" src={assist} width="30" height="30" />3
      </div>
      {/* <div className="MatchPlayerStatistic">
        1x
        <img title="Czerwone kartki" src={redCard} width="30" height="30" />
      </div> */}
      <div className="MatchPlayerStatistic">
        <img title="Żółte kartki" src={yellowCard} width="30" height="30" />1
      </div>
    </div>
  );
};

export default playerStatistics;
