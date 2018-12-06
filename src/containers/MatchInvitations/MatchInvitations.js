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
  async cancelInvitation(matchId) {
    try {
      await postDataWithoutResponse(
        `${ROUTES.MATCHES}/cancelInvite`,
        { matchId: matchId },
        { Authorization: this.props.user.token }
      );
      for (var index = 0; index < this.state.receivedInvitations.length; index++) {
        if (this.state.receivedInvitations[index].id == matchId) {
          this.state.receivedInvitations[index].canceled = true;
          break;
        }
      }
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
            />
          );
        })}
        <div className="Title">Wysłane wyzwania</div>
        {this.state.sentInvitations.map(inv => {
          return <SentChallenge value={inv} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(MatchInvitations);
