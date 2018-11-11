import React from "react";
import PanelOption from "../../PanelOptions/PanelOption/PanelOption";
import "./StatisticSwitcher.css";
const statisticSwitcher = props => {
  return (
    <div className="Switcher">
      <PanelOption
        isActive={true}
        name={props.firstTeam.name}
        clicked={props.showAwayTeamStatistics}
        key="homeTeam"
      />
      <PanelOption
        name={props.secondTeam.name}
        clicked={props.showAwayTeamStatistics}
        key="awayTeam"
      />
    </div>
  );
};

export default statisticSwitcher;
