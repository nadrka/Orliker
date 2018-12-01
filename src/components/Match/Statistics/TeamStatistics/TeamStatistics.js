import React from "react";
import PositionHeader from "../PositionHeader/PositionHeader";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import "./TeamStatistics.css";

const teamStatistics = props => {
  return (
    <div className="TeamStatistics">
      <div className="TeamName">APOEL MORENA</div>
      <PositionHeader position="Bramkarze" />
      <PlayerDetails />
    </div>
  );
};

export default teamStatistics;
