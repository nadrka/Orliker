import React from "react";
import PositionHeader from "../PositionHeader/PositionHeader";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import "./TeamStatistics.css";
let isGoalkeeper = statistic => {
  return statistic.player.position === "Goalkeeper";
};

let isDefender = statistic => {
  return statistic.player.position === "Defender";
};

let isMidfielder = statistic => {
  return statistic.player.position === "Midfielder";
};

let isStriker = statistic => {
  return statistic.player.position === "Striker";
};

let getStatistics = statistic => {
  return (
    <PlayerDetails
      name={statistic.player.firstName + " " + statistic.player.secondName}
      number={statistic.player.number}
      goals={statistic.goals}
      assists={statistic.assists}
      yellowCards={statistic.yellowCards}
      redCards={statistic.redCards}
    />
  );
};
const teamStatistics = props => {
  const goalkeeperStatistics = props.team.statistics
    .filter(isGoalkeeper)
    .map(getStatistics);
  const defenderStatistics = props.team.statistics
    .filter(isDefender)
    .map(getStatistics);
  const midfielderStatistics = props.team.statistics
    .filter(isMidfielder)
    .map(getStatistics);
  const strikerStatistics = props.team.statistics
    .filter(isStriker)
    .map(getStatistics);

  return (
    <div className="TeamStatistics">
      <div className="TeamName">APOEL MORENA</div>
      <PositionHeader position="Bramkarze" />
      {goalkeeperStatistics}
      <PositionHeader position="Obrońcy" />
      {defenderStatistics}
      <PositionHeader position="Pomocnicy" />
      {midfielderStatistics}
      <PositionHeader position="Napastnicy" />
      {strikerStatistics}
    </div>
  );
};

export default teamStatistics;
