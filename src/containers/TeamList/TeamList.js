import React, { Component } from "react";
import TeamInvitation from "../../components/TeamList/Invitation/TeamInvitation";
import TeamRequest from "../../components/TeamList/Request/TeamRequest";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import { getData, postDataWithResponse, postDataWithoutResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import "./TeamList.css";
import { createNotification } from "../../utils/Notification";
class TeamList extends Component {
  state = {
    invitations: [],
    teamsForLeague: []
  };

  async componentDidMount() {
    await this.getInvitations();
    await this.getAllTeams();
    const teamsWithoutInvitation = this.state.teamsForLeague.map(league => {
      return {
        league: league.league,
        teams: league.teams.filter(team => {
          const invitationForTeam = this.state.invitations.filter(inv => {
            return inv.team.id == team.id;
          });
          return !(invitationForTeam.length > 0);
        })
      };
    });

    this.setState({ teamsForLeague: teamsWithoutInvitation });
  }

  getInvitations = async () => {
    let invitations = await getData(`${ROUTES.PLAYERS}/363/invitations`);
    console.log(invitations);
    this.setState({ invitations: invitations });
  };

  getAllTeams = async () => {
    let teams = await getData(`${ROUTES.TEAMS}`);
    this.setState({ teamsForLeague: teams });
  };

  async createMatchRequest() {}

  handleAcceptTap = async invitationId => {
    console.log(invitationId);
    try {
      await postDataWithoutResponse(`${ROUTES.INVITATIONS}/${invitationId}/accept`);
      await this.getInvitations();
    } catch (error) {
      console.log(error);
    }
  };

  handleRejectTap = async invitationId => {
    console.log(invitationId);
    try {
      await postDataWithoutResponse(`${ROUTES.INVITATIONS}/${invitationId}/reject`);
      await this.getInvitations();

      createNotification("success", "Niestety operacja nie udała się", "Zaproszenie zostało odrzucone!");
    } catch (error) {
      console.log(error);
    }
  };

  handleReuqestTap = async teamId => {
    try {
      let objectToSend = {
        teamId: teamId,
        requestType: "player",
        playerId: 390
      };

      console.log(objectToSend);

      await postDataWithResponse(ROUTES.INVITATIONS, objectToSend);
      createNotification("success", "Niestety operacja nie udała się", "Prośba została wysłana!");
    } catch (error) {
      createNotification("success", "Niestety operacja nie udała się", "Prośba została wysłana!");
      console.log(error);
    }
  };

  handleSearchbarChange = inputValue => {
    console.log(inputValue);
  };

  render() {
    return (
      <div>
        <div className="SearchbarBar">
          <Searchbar onSerchbarChanged={this.handleSearchbarChange} />
        </div>

        <TeamInvitation
          onAcceptTapped={this.handleAcceptTap}
          onRejectTapped={this.handleRejectTap}
          invitations={this.state.invitations}
        />
        <TeamRequest onRequestTapped={this.handleReuqestTap} teams={this.state.teamsForLeague} />
      </div>
    );
  }
}

export default TeamList;
