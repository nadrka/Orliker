import React from "react";
import MatchResult from "../MatchResult/MatchResult";
import MatchDate from "../MatchDate/MatchDate";
import "./MatchInfo.css";
import { Link } from "react-router-dom";
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
        <Link
          to="#"
          className="btn btn-info btn-lg"
          style={{
            backgroundColor: "#d3d3d3",
            borderColor: "#d2d2d2"
          }}
        >
          <span className="glyphicon glyphicon-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default matchInfo;
