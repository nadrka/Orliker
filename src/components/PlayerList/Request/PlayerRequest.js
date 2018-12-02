import React from "react";
import "./PlayerRequest";
import profilePicture from "../../../assets/images/profilePicture.jpg";
import accept from "../../../assets/images/accept.png";
import reject from "../../../assets/images/reject.png";
const PlayerRequest = props => {
  const requests = props.request.map(r => {
    return (
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">
          <img src={profilePicture} width="50" height="50" />
          <div className="TeamInvitationName">{r.player.number}</div>
          <div className="TeamInvitationName">
            {r.player.firstName + " " + r.player.secondName}
          </div>
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
    );
  });
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Prośby o dołączenie do druzyny</div>
      {requests}
    </div>
  );
};

export default PlayerRequest;