import React from "react";
import PanelOption from "../../PanelOptions/PanelOption/PanelOption";

const statisticSwitcher = () => {
  const TeamEnum = { homeTeam: 1, awayTeam: 2 };
  var currentTeam = TeamEnum.awayTeam;

  return (
    <div>
      <PanelOption />
      <PanelOption />
    </div>
  );
};

export default statisticSwitcher;
