import React, { Component } from "react";
import PlayerDetail from "../../components/PlayerDetail/PlayerDetail";
import { connect } from "react-redux";
import { getData, putData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import profilePicture from "../../assets/images/profilePicture.jpg";
import Schedule from "../../components/Schedule/Schedule";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import { changeName } from "../../actions/actions";

const OPTIONS = {
  UPC: "Upcoming",
  PAST: "Played"
};

class RefereePanel extends Component {
  state = { referee: null, upcomingMatches: [], playedMatches: [], option: OPTIONS.UPC };

  async componentDidMount() {
    const referee = await getData(`${ROUTES.USERS}/${this.props.match.params.id}`);
    const upcomingMatches = await getData(`${ROUTES.REFEREES}/${this.props.match.params.id}/upcomingMatches`);
    const playedMatches = await getData(`${ROUTES.REFEREES}/${this.props.match.params.id}/playedMatches`);
    this.setState({ referee: referee, upcomingMatches: upcomingMatches, playedMatches: playedMatches });
  }

  async changeName(value) {
    let objToSend = {};
    var names = value.split(" ", 2);
    this.props.changeName(names[0], names[1]);
    objToSend["firstName"] = names[0];
    objToSend["secondName"] = names[1];
    let refereeState = { ...this.state.referee };
    refereeState.firstName = names[0];
    refereeState.secondName = names[1];
    this.setState({ referee: refereeState });
    await putData(ROUTES.USERS, objToSend, { Authorization: this.props.user.token });
  }

  refereeDetails() {
    if (this.state.referee) {
      let value = `${this.state.referee.firstName} ${this.state.referee.secondName}`;
      return (
        <div className="PlayerDetails">
          <PlayerDetail
            serverKeyName={"name"}
            name={"Imię i nazwisko: "}
            value={value}
            canChange={this.props.user && this.props.user.id == this.state.referee.id}
            onChange={value => {
              this.changeName(value);
            }}
          />
        </div>
      );
    }
    return null;
  }

  renderOption() {
    let category = 2;
    if (this.state.option == OPTIONS.PAST) category = 1;

    return (
      <Schedule
        upcomingMatches={this.state.upcomingMatches}
        playedMatches={this.state.playedMatches}
        category={category}
        referee={this.props.match.params.id == this.props.user.id}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="PlayerPanel">
          <div className="ProfilePicture">
            {this.state.referee && (
              <img
                src={"http://localhost:3000/" + this.state.referee.imgURL}
                width="315"
                height="300"
                className="coverClass"
              />
            )}
          </div>
          <div>{this.refereeDetails()}</div>
        </div>
        <div className="flex bottomSection">
          <PanelOptions
            labels={["Nadchodzące mecze", "Przeszłe mecze"]}
            options={[OPTIONS.UPC, OPTIONS.PAST]}
            fun={arg => {
              this.setState({ option: arg });
            }}
          />
          {this.renderOption()}
        </div>
        {/*
        <div className="flex bottomSection">
          <PanelOptions
            labels={["Terminarz", "Statystyki"]}
            options={["schedule", "statistics"]}
            fun={arg => {
              this.setState({ choosenOption: arg });
            }}
          />
          {choosenOption}
        </div>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: (firstName, secondName) => {
      dispatch(changeName(firstName, secondName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RefereePanel);
