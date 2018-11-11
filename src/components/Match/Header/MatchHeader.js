import React from "react";
import "./MatchHeader.css";
import MatchResult from "../../Schedule/MatchResult/MatchResult";

const matchHeader = props => {
  return (
    <div className="Header">
      <div className="LeagueLabel"> Gdańsk - 1 Liga </div>
      <div className="Result">
        <MatchResult
          firstTeam={props.match.firstTeam}
          secondTeam={props.match.secondTeam}
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
