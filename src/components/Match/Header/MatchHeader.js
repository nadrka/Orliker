import React from "react";
import "./MatchHeader.css";
import MatchResult from "../../Schedule/MatchResult/MatchResult";

const matchHeader = props => {
  console.log(props);
  return (
    <div className="Header">
      <div className="LeagueLabel"> Gdańsk - {props.match.leagueId} Liga </div>
      <div className="Result">
        <MatchResult homeTeam={props.match.homeTeam} awayTeam={props.match.awayTeam} />
      </div>
      <div className="TeamPosition">
        <div> Postion in league: {props.match.homeTeam.position}</div>
        <div> Postion in league: {props.match.awayTeam.position}</div>
      </div>
    </div>
  );
};

export default matchHeader;
