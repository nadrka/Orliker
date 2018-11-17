import React, { Component } from "react";
import TeamInvitation from "../../components/TeamList/Invitation/TeamInvitation";
import TeamRequest from "../../components/TeamList/Request/TeamRequest";

class TeamList extends Component {
  state = {};
  render() {
    return (
      <div>
        <TeamInvitation />
        <TeamRequest />
      </div>
    );
  }
}

export default TeamList;
