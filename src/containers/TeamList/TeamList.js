import React, { Component } from "react";
import TeamInvitation from "../../components/TeamList/Invitation/TeamInvitation";
import TeamRequest from "../../components/TeamList/Request/TeamRequest";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import "./TeamList.css";
class TeamList extends Component {
  state = {
    invitations: [],
    teamsForLeague: [
      {
        league: 1,
        teams: [
          {
            id: 3,
            name: "Parówy Mrówy",
            currentLegueId: 1
          },
          {
            id: 4,
            name: "Efce Janki",
            currentLegueId: 1
          }
        ]
      },
      {
        league: 2,
        teams: [
          {
            id: 1,
            name: "Arawa Karwa",
            currentLegueId: 1
          },
          {
            id: 2,
            name: "Depce po Metce",
            currentLegueId: 1
          }
        ]
      }
    ]
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
    let invitations = await getData(`${ROUTES.PLAYERS}/1/invitations`);
    this.setState({ invitations: invitations });
  };

  getAllTeams = async () => {
    let teams = await getData(`${ROUTES.TEAMS}`);
    this.setState({ teamsForLeague: teams });
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

        <TeamInvitation invitations={this.state.invitations} />
        <TeamRequest teams={this.state.teamsForLeague} />
      </div>
    );
  }
}

export default TeamList;
