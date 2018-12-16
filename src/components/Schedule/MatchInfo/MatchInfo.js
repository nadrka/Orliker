import React from "react";
import MatchResult from "../MatchResult/MatchResult";
import MatchDate from "../MatchDate/MatchDate";
import "./MatchInfo.css";
import { Link } from "react-router-dom";
import moment from "moment";
const matchInfo = props => {
  let link = "/match/details/" + props.matchDetails.id;
  if (props.referee) link = "/match/enterResult/" + props.matchDetails.id;
  return (
    <div className="MatchInfo">
      <MatchDate className="MatchDate" date={moment(props.matchDetails.matchDate).format("DD.MM.YYYY HH:mm")} />
      <MatchResult
        className="MatchResult"
        homeTeam={props.matchDetails.homeTeam}
        awayTeam={props.matchDetails.awayTeam}
      />
      <div>
        <Link
          to={link}
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
