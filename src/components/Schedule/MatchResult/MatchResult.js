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
      <Team name={props.homeTeam.name} imgURL={props.homeTeam.imgURL} isPlayingHome={true} />
      <div className="Result">
        {props.homeTeam.result} : {props.awayTeam.result}
      </div>
      <Team name={props.awayTeam.name} imgURL={props.awayTeam.imgURL} isPlayingHome={false} />
    </div>
  );
};

export default matchResult;
