import React from "react";
import "./TeamInvitation.css";
import accept from "../../../assets/images/accept.png";
import reject from "../../../assets/images/reject.png";
import apoel from "../../../assets/images/apoel.png";
const teamInvitation = () => {
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Zaproszenia</div>
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">
          <div className="TeamInvitationLeague">1 Liga</div>
          <img src={apoel} width="50" height="50" />
          <div className="TeamInvitationName">Apoel Morena</div>
        </div>
        <div className="TeamInvitationOptions">
          <img
            className="TeamInvitationOption"
            src={accept}
            width="45"
            height="45"
          />
          <img
            className="TeamInvitationOption"
            src={reject}
            width="45"
            height="45"
          />
        </div>
      </div>
    </div>
  );
};

export default teamInvitation;
