import React, { Component } from "react";
import ReceivedChallenge from "../../components/ReceivedChallenge/ReceivedChallenge";
import SentChallenge from "../../components/SentChallenge/SentChallenge";
import { connect } from "react-redux";
import { getData, postDataWithoutResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";

class MatchInvitations extends Component {
  state = {
    receivedInvitations: [],
    sentInvitations: []
  };
  async componentDidMount() {
    const sentInvitations = await getData(`${ROUTES.MATCHES}/sentInvites`, { Authorization: this.props.user.token });
    const receivedInvitations = await getData(`${ROUTES.MATCHES}/receivedInvites`, {
      Authorization: this.props.user.token
    });
    this.setState({ sentInvitations, receivedInvitations });
  }
  async acceptInvitation(matchId) {
    try {
      await postDataWithoutResponse(
        `${ROUTES.MATCHES}/acceptInvite`,
        { matchId: matchId },
        { Authorization: this.props.user.token }
      );
      let newArray = [...this.state.receivedInvitations];
      for (var index = 0; index < newArray.length; index++) {
        if (newArray[index].id == matchId) {
          newArray[index].accepted = true;
          break;
        }
      }
      this.setState({ receivedInvitations: newArray });
    } catch (error) {
      console.log(error);
    }
  }
  async cancelInvitation(matchId, sentByMe) {
    try {
      await postDataWithoutResponse(
        `${ROUTES.MATCHES}/cancelInvite`,
        { matchId: matchId },
        { Authorization: this.props.user.token }
      );
      let newArray;
      if (sentByMe) {
        newArray = [...this.state.sentInvitations];
      } else {
        newArray = [...this.state.receivedInvitations];
      }
      for (var index = 0; index < newArray.length; index++) {
        if (newArray[index].id == matchId) {
          newArray[index].cancelled = true;
          break;
        }
      }
      if (sentByMe) this.setState({ sentInvitations: newArray });
      else this.setState({ receivedInvitations: newArray });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Wyzwania</div>
          </div>
        </div>
        <div className="Title">Odebrane wyzwania</div>
        {this.state.receivedInvitations.map(inv => {
          return (
            <ReceivedChallenge
              value={inv}
              accept={() => {
                this.acceptInvitation(inv.id);
              }}
              decline={() => {
                this.cancelInvitation(inv.id, false);
              }}
            />
          );
        })}
        <div className="Title">Wysłane wyzwania</div>
        {this.state.sentInvitations.map(inv => {
          return (
            <SentChallenge
              value={inv}
              cancel={() => {
                this.cancelInvitation(inv.id, true);
              }}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(MatchInvitations);
