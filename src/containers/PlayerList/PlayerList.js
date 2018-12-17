import React, { Component } from "react";
import "./PlayerList.css";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import PlayerRequest from "../../components/PlayerList/Request/PlayerRequest";
import PlayerInvitation from "../../components/PlayerList/Invitation/PlayerInvitation";
import { getData, postDataWithResponse, postDataWithoutResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import { createNotification } from "../../utils/Notification";
import { connect } from "react-redux";
import { isNormalPlayer, isCaptain } from "../../utils/Guard";
import { setUser, setLeagues } from "../../actions/actions";
import { Redirect } from "react-router-dom";

class PlayerList extends Component {
  state = {
    playerWithoutTeam: [],
    filterPlayerWithoutTeam: [],
    request: [],
    shouldShowFilteredPlayers: false
  };

  logout() {
    this.props.setUser(null);
    this.props.history.push("/login");
  }

  redirectUnauthorizedUser = () => {
    this.logout();
    createNotification(
      "error",
      "Próba przejścia do podstrony bez potrzebnej autoryzacji",
      "Wyzwanie zostało poprawnie stworzone!"
    );
  };
  async componentDidMount() {
    if (isCaptain(this.props.loggedUser)) {
      await this.getJoinRequests();
      await this.getPlayersWithoutTeam();
    } else {
      this.redirectUnauthorizedUser();
    }
  }

  getPlayersWithoutTeam = async () => {
    let playersWithoutTeam = await getData(`${ROUTES.PLAYERS}/without/team`);
    const pu = playersWithoutTeam.filter(player => {
      const x = this.state.request.filter(r => {
        return r.player.id == player.id;
      });

      return !(x.length > 0);
    });
    this.setState({ playerWithoutTeam: pu });
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
      await this.getPlayersWithoutTeam();
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
      await this.getJoinRequests();
      await this.getPlayersWithoutTeam();
      createNotification("success", "Niestety operacja nie udała się", "Zaproszenie zostało wysłane!");
    } catch (error) {
      createNotification("error", "Niestety operacja nie udała się", "Zaproszenie zostało wysłane!");
      console.log(error);
    }
  };

  handleSearchbarChange = text => {
    console.log(text);
    if (text.length > 0) {
      const filteredPlayers = this.state.playerWithoutTeam.filter(player => {
        return player.firstName.includes(text) || player.secondName.includes(text);
      });
      this.setState({ shouldShowFilteredPlayers: true, filterPlayerWithoutTeam: filteredPlayers });
    } else {
      this.setState({ shouldShowFilteredPlayers: false });
    }
  };

  render() {
    let players = [];
    if (this.state.shouldShowFilteredPlayers == false) {
      players = this.state.playerWithoutTeam;
    } else {
      players = this.state.filterPlayerWithoutTeam;
    }
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
        <PlayerInvitation onRequestTapped={this.handleReuqestTap} playerWithoutTeam={players} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  return { loggedUser: state.user };
};

const mapDispatchToProps = dispatch => {
  return {
    setLeagues: leagues => {
      dispatch(setLeagues(leagues));
    },
    setUser: user => {
      dispatch(setUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList);
