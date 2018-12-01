import React from "react";
import "./MatchResult.css";
import Team from "../Team/Team";

const matchResult = props => {
  if (props.homeTeam.result == null) {
    props.homeTeam.result = "-";
  }
  if (props.awayTeam.result == null) {
    props.awayTeam.result = "-";
  }
  return (
    <div className="MatchResult">
      <Team name={props.homeTeam.name} isPlayingHome={true} />
      <div className="Result">
        {props.homeTeam.result} : {props.awayTeam.result}
      </div>
      <Team name={props.awayTeam.name} isPlayingHome={false} />
    </div>
  );
};

export default matchResult;
