import React from "react";
import PlayerStatistics from "./PlayerStatistics/PlayerStatistics";
import "./PlayerDetails.css";
import profilePicture from "../../../../assets/images/profilePicture.jpg";
import { Link } from "react-router-dom";
const playerDetails = props => {
  return (
    <div className="MatchPlayerDetails">
      <div className="MatchPlayerInfo">
        <div className="MatchPlayerInfoNumber">{props.number}</div>
        <img src={"http://localhost:3000/" + props.imgURL} width="60" height="60" className="coverClass" />
        <div className="MatchPlayerInfoName GrayLink">
          <Link to="panel/player">{props.name}</Link>
        </div>
      </div>
      <PlayerStatistics
        goals={props.goals}
        assists={props.assists}
        redCards={props.redCards}
        yellowCards={props.yellowCards}
      />
    </div>
  );
};

export default playerDetails;
