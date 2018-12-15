import React, { Component } from "react";
import "./PlayerList.css";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import PlayerRequest from "../../components/PlayerList/Request/PlayerRequest";
import PlayerInvitation from "../../components/PlayerList/Invitation/PlayerInvitation";
import { getData, postDataWithResponse, postDataWithoutResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import { createNotification } from "../../utils/Notification";
import { connect } from "react-redux";

class PlayerList extends Component {
  state = {
    playerWithoutTeam: [],
    request: []
  };
  async componentDidMount() {
    await this.getPlayersWithoutTeam();
    await this.getJoinRequests();

    const p = this.state.playerWithoutTeam.filter(player => {
      const x = this.state.request.filter(r => {
        return r.player.id == player.id;
      });

      return !(x.length > 0);
    });
    this.setState({ playerWithoutTeam: p });
  }

  getPlayersWithoutTeam = async () => {
    let playersWithoutTeam = await getData(`${ROUTES.PLAYERS}/without/team`);
    this.setState({ playerWithoutTeam: playersWithoutTeam });
  };

  getJoinRequests = async () => {
    let joinRequests = await getData(`${ROUTES.TEAMS}/${this.props.loggedUser.id}/invitations`);
    this.setState({ request: joinRequests });
  };

  handleAcceptTap = async invitationId => {
    try {
      await postDataWithoutResponse(`${ROUTES.INVITATIONS}/${invitationId}/accept`);
      await this.getJoinRequests();
    } catch (error) {
      console.log(error);
    }
  };

  handleRejectTap = async invitationId => {
    try {
      await postDataWithoutResponse(`${ROUTES.INVITATIONS}/${invitationId}/reject`);
      await this.getJoinRequests();
    } catch (error) {
      console.log(error);
    }
  };

  handleReuqestTap = async playerId => {
    try {
      let objectToSend = {
        teamId: this.props.loggedUser.teamId,
        requestType: "team",
        playerId: playerId
      };

      console.log(objectToSend);

      await postDataWithResponse(ROUTES.INVITATIONS, objectToSend);
      createNotification("success", "Niestety operacja nie udała się", "Zaproszenie zostało wysłane!");
    } catch (error) {
      createNotification("error", "Niestety operacja nie udała się", "Zaproszenie zostało wysłane!");
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div className="SearchbarBar">
          <Searchbar onSerchbarChanged={this.handleSearchbarChange} />
        </div>
        <PlayerRequest
          onAcceptTapped={this.handleAcceptTap}
          onRejectTapped={this.handleRejectTap}
          request={this.state.request}
        />
        <PlayerInvitation onRequestTapped={this.handleReuqestTap} playerWithoutTeam={this.state.playerWithoutTeam} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  return { loggedUser: state.user };
};

export default connect(mapStateToProps)(PlayerList);
