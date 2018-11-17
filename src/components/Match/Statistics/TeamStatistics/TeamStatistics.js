import React from "react";
import PositionHeader from "../PositionHeader/PositionHeader";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import "./TeamStatistics.css";
const teamStatistics = props => {
  return (
    <div className="TeamStatistics">
      <div className="TeamName">APOEL MORENA</div>
      <PositionHeader />
      <PlayerDetails />
      <PlayerDetails />
      <PlayerDetails />
      <PositionHeader />
      <PlayerDetails />
      <PlayerDetails />
      <PlayerDetails />
    </div>
  );
};

export default teamStatistics;
