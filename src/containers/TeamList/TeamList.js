import React, { Component } from "react";
import TeamInvitation from "../../components/TeamList/Invitation/TeamInvitation";
import TeamRequest from "../../components/TeamList/Request/TeamRequest";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import "./TeamList.css";
class TeamList extends Component {
  state = {
    invitations: []
  };

  componentDidMount() {
    this.getInvitations();
  }

  getInvitations = async () => {
    let invitations = await getData(`${ROUTES.PLAYERS}/1/invitations`);
    this.setState({ invitations: invitations });
  };

  getAllTeams = async () => {
    // let joinRequests = await getData(`${ROUTES.TEAMS}/1/invitations`);
    // this.setState({ request: joinRequests });
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
        <TeamRequest />
      </div>
    );
  }
}

export default TeamList;
