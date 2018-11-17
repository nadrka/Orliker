import React from "react";
import "./TeamInvitation.css";
import accept from "../../../assets/images/accept.png";
import reject from "../../../assets/images/reject.png";
const teamInvitation = () => {
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Zaproszenia</div>
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">Zaproszenie</div>
        <div className="TeamInvitationOption">
          <img src={accept} width="45" height="45" />
          <img src={reject} width="45" height="45" />
        </div>
      </div>
    </div>
  );
};

export default teamInvitation;
