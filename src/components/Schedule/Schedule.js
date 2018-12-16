import React, { Component } from "react";
import "./Schedule.css";
import MatchInfo from "./MatchInfo/MatchInfo";
const schedule = props => {
  const playedMatches = props.playedMatches.map(match => {
    return <MatchInfo key={match.id} matchDetails={match} />;
  });

  const upcomingMatches = props.upcomingMatches.map(match => {
    return <MatchInfo key={match.id} matchDetails={match} referee={props.referee} />;
  });

  let layout;
  console.log(props.category);
  if (props.category == 0) {
    layout = (
      <div>
        <div className="Title">Nadchodzące Mecze</div>
        <div>{upcomingMatches}</div>
        <div className="Title">Rozegrane Mecze</div>
        <div>{playedMatches}</div>
      </div>
    );
  } else if (props.category == 1) {
    layout = (
      <div>
        <div className="Title">Rozegrane Mecze</div>
        <div>{playedMatches}</div>
      </div>
    );
  } else if (props.category == 2) {
    layout = (
      <div>
        <div className="Title">Nadchodzące Mecze</div>
        <div>{upcomingMatches}</div>
      </div>
    );
  }
  return <div>{layout}</div>;
};

export default schedule;
