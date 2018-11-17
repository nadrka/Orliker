import React from "react";
import "./TeamRequest.css";
const TeamRequest = props => {
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Wszystkie Druzyny</div>
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">Zaproszenie</div>
        <button className="RequestButton"> Dolącz do druzyny</button>
      </div>
    </div>
  );
};

export default TeamRequest;
