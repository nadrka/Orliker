import React from "react";
import PositionHeader from "../PositionHeader/PositionHeader";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import "./TeamStatistics.css";
let isGoalkeeper = statistic => {
  return statistic.player.position === "Bramkarz";
};

let isDefender = statistic => {
  return statistic.player.position === "Obrońca";
};

let isMidfielder = statistic => {
  return statistic.player.position === "Pomocnik";
};

let isStriker = statistic => {
  return statistic.player.position === "Napastnik";
};

let noPostion = statistic => {
  return statistic.player.position === "";
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
      imgURL={statistic.player.imgURL}
    />
  );
};

const teamStatistics = props => {
  const goalkeeperStatistics = props.team.statistics.filter(isGoalkeeper).map(getStatistics);
  const defenderStatistics = props.team.statistics.filter(isDefender).map(getStatistics);
  const midfielderStatistics = props.team.statistics.filter(isMidfielder).map(getStatistics);
  const strikerStatistics = props.team.statistics.filter(isStriker).map(getStatistics);
  const withoutPosition = props.team.statistics.filter(noPostion).map(getStatistics);
  console.log(props);
  return (
    <div className="TeamStatistics">
      <div className="TeamName">{props.name.toUpperCase()}</div>
      <PositionHeader position="Bramkarze" />
      {goalkeeperStatistics}
      <PositionHeader position="Obrońcy" />
      {defenderStatistics}
      <PositionHeader position="Pomocnicy" />
      {midfielderStatistics}
      <PositionHeader position="Napastnicy" />
      {strikerStatistics}
      <PositionHeader position="Zawodnicy bez pozycji" />
      {withoutPosition}
    </div>
  );
};

export default teamStatistics;
