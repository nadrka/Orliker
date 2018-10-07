import React from "react";
import MatchResult from "../MatchResult/MatchResult";
import MatchDate from "../MatchDate/MatchDate";
import "./MatchInfo.css";
const matchInfo = props => {
  return (
    <div className="MatchInfo">
      <MatchDate className="MatchDate" date={props.matchDetails.matchDate} />
      <MatchResult
        className="MatchResult"
        firstTeam={props.matchDetails.firstTeam}
        secondTeam={props.matchDetails.secondTeam}
      />
      <div>
        <a
          href="#"
          className="btn btn-info btn-lg"
          style={{
            backgroundColor: "#d3d3d3",
            borderColor: "#d2d2d2"
          }}
        >
          <span className="glyphicon glyphicon-arrow-right" />
        </a>
      </div>
    </div>
  );
};

export default matchInfo;
