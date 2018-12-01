import React, { Component } from "react";
import "./Schedule.css";
import MatchInfo from "./MatchInfo/MatchInfo";
const schedule = props => {
  const playedMatches = props.playedMatches.map(match => {
    return <MatchInfo key={match.id} matchDetails={match} />;
  });

  const upcomingMatches = props.upcomingMatches.map(match => {
    return <MatchInfo key={match.id} matchDetails={match} />;
  });

  return (
    <div>
      <div className="Title">Nadchodzące Mecze</div>
      <div>{upcomingMatches}</div>
      <div className="Title">Rozegrane Mecze</div>
      <div>{playedMatches}</div>
    </div>
  );
};

export default schedule;
