import React from "react";
import "./TeamInvitation.css";
import accept from "../../../assets/images/accept.png";
import reject from "../../../assets/images/reject.png";
import apoel from "../../../assets/images/apoel.png";
const teamInvitation = props => {
  const invitations = props.invitations.map(invitation => {
    return (
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">
          <div className="TeamInvitationLeague">{invitation.team.league} Liga</div>
          <img src={"http://localhost:3000/" + invitation.team.imgURL} width="50" height="50" />

          <div className="TeamInvitationName">{invitation.team.name}</div>
        </div>
        <div className="TeamInvitationOptions">
          <img
            onClick={() => props.onAcceptTapped(invitation.id)}
            className="TeamInvitationOption"
            src={accept}
            width="45"
            height="45"
          />
          <img
            onClick={() => props.onRejectTapped(invitation.id)}
            className="TeamInvitationOption"
            src={reject}
            width="45"
            height="45"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Zaproszenia</div>
      {invitations}
    </div>
  );
};

export default teamInvitation;
