import React from "react";
import PlayerStatistics from "./PlayerStatistics/PlayerStatistics";
import "./PlayerDetails.css";
import profilePicture from "../../../../assets/images/profilePicture.jpg";
const playerDetails = props => {
  return (
    <div className="MatchPlayerDetails">
      <div className="MatchPlayerInfo">
        <div className="MatchPlayerInfoNumber">21</div>
        <img src={profilePicture} width="60" height="60" />
        <div className="MatchPlayerInfoName">Karol Nadratowski</div>
      </div>
      <PlayerStatistics />
    </div>
  );
};

export default playerDetails;
