import React from "react";
import "./MatchHeader.css";
import MatchResult from "../../Schedule/MatchResult/MatchResult";

const matchHeader = props => {
  return (
    <div className="Header">
      <div className="LeagueLabel"> Gdańsk - {props.match.leagueId} Liga </div>
      <div className="Result">
        <MatchResult
          homeTeam={props.match.homeTeam}
          awayTeam={props.match.awayTeam}
        />
      </div>
      <div className="TeamPosition">
        <div> Postion in league: 7</div>
        <div> Postion in league: 8</div>
      </div>
    </div>
  );
};

export default matchHeader;
