import React from "react";
import "./MatchResult.css";
import Team from "../Team/Team";
const matchResult = props => {
  return (
    <div className="MatchResult">
      {" "}
      <Team
        name={props.firstTeam.name}
        isPlayingHome={props.firstTeam.isPlayingHome}
      />
      <div className="Result">
        {props.firstTeam.scoredGoals} : {props.secondTeam.scoredGoals}
      </div>
      <Team
        name={props.secondTeam.name}
        isPlayingHome={props.secondTeam.isPlayingHome}
      />
    </div>
  );
};

export default matchResult;
