import React from "react";
import "./TeamRequest.css";
import apoel from "../../../assets/images/apoel.png";
const TeamRequest = props => {
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Wszystkie Druzyny</div>
      <div className="LeagueHeader">1 Liga</div>
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">
          <img src={apoel} width="50" height="50" />
          <div className="TeamInvitationName">Apoel Morena</div>
        </div>
        <button className="RequestButton"> Dolącz do druzyny</button>
      </div>
    </div>
  );
};

export default TeamRequest;
