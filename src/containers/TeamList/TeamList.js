import React, { Component } from "react";
import TeamInvitation from "../../components/TeamList/Invitation/TeamInvitation";
import TeamRequest from "../../components/TeamList/Request/TeamRequest";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import { getData, postDataWithResponse, postDataWithoutResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import "./TeamList.css";
import { createNotification } from "../../utils/Notification";
import { connect } from "react-redux";

class TeamList extends Component {
  state = {
    invitations: [],
    teamsForLeague: [],
    filteredTeamsForLeague: [],
    isFiltering: false
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
    let invitations = await getData(`${ROUTES.PLAYERS}/${this.props.loggedUser.id}/invitations`);
    console.log(invitations);
    this.setState({ invitations: invitations });
  };

  getAllTeams = async () => {
    let teams = await getData(`${ROUTES.PLAYERS}/${this.props.loggedUser.id}/team/requests`);
    console.log(teams);
    this.setState({ teamsForLeague: teams });
  };

  async createMatchRequest() {}

  handleAcceptTap = async invitationId => {
    try {
      await postDataWithoutResponse(`${ROUTES.INVITATIONS}/${invitationId}/accept`);
      await this.getInvitations();
    } catch (error) {
      console.log(error);
    }
  };

  handleRejectTap = async invitationId => {
    try {
      await postDataWithoutResponse(`${ROUTES.INVITATIONS}/${invitationId}/reject`);
      await this.getInvitations();
      await this.getAllTeams();

      createNotification("success", "Zaproszenie zostało odrzucone!", "Zaproszenie zostało odrzucone!");
    } catch (error) {
      console.log(error);
    }
  };

  handleReuqestTap = async teamId => {
    try {
      let objectToSend = {
        teamId: teamId,
        requestType: "player",
        playerId: this.props.loggedUser.id
      };

      console.log(objectToSend);

      await postDataWithResponse(ROUTES.INVITATIONS, objectToSend);
      createNotification("success", "Niestety operacja nie udała się", "Prośba została wysłana!");
      this.getAllTeams();
    } catch (error) {
      createNotification("success", "Niestety operacja nie udała się", "Prośba została wysłana!");
      console.log(error);
    }
  };

  handleSearchbarChange = inputValue => {
    if (inputValue.length > 0) {
      let filteredTeams = this.state.teamsForLeague.map(league => {
        const teams = league.teams.filter(team => {
          return team.name.includes(inputValue);
        });
        return {
          league: league.league,
          teams: teams
        };
      });
      this.setState({ isFiltering: true, filteredTeamsForLeague: filteredTeams });
    } else {
      this.setState({ isFiltering: false });
    }
  };

  render() {
    let teams = [];
    if (this.state.isFiltering == false) {
      teams = this.state.teamsForLeague;
    } else {
      teams = this.state.filteredTeamsForLeague;
    }

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
        <TeamRequest onRequestTapped={this.handleReuqestTap} teams={teams} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedUser: state.user };
};

export default connect(mapStateToProps)(TeamList);
