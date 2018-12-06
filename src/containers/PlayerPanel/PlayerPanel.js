import React, { Component } from "react";
import ClubDetails from "./ClubDetails/ClubDetails";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import PlayerPanelOptions from "./PlayerPanelOptions/PlayerPanelOptions";
import "./PlayerPanel.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import PlayerCarrer from "../PlayerCarrer/PlayerCarrer";
import Schedule from "../../components/Schedule/Schedule";
import PlayerLeagueSchedule from "../PlayerLeagueSchedule/PlayerLeagueSchedule";
import { getData, postDataWithResponse } from "../../utils/NetworkFunctions";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { ROUTES } from "../../utils/Constants";

import CreateNewTeam from "./CreateNewTeam";

class PlayerPanel extends Component {
  state = {
    choosenOption: "schedule",
    player: null,
    team: null,
    playedMatches: [],
    upcomingMatches: [],
    modal: {
      open: false,
      errorText: "",
      isSubmitButtonDisable: true,
      teamName: ""
    }
  };
  handleOptionChange = option => {
    this.setState({ choosenOption: option });
  };

  async componentDidMount() {
    const player = await getData(
      `${ROUTES.PLAYERS}/${this.props.match.params.id}`
    );
    const team = await getData(`${ROUTES.TEAMS}/${player.teamId}`);
    const upcomingMatches = await getData(
      `${ROUTES.TEAMS}/${player.teamId}/matches/upcoming`
    );
    const playedMatches = await getData(
      `${ROUTES.TEAMS}/${player.teamId}/matches/played`
    );
    this.setState({
      player: player,
      team: team,
      playedMatches: playedMatches,
      upcomingMatches: upcomingMatches
    });
  }

  createMatchRequest = async () => {
    try {
      let objectToSend = {
        captainId: 5,
        currentLegueId: 1,
        name: this.state.modal.teamName
      };
      this.hideModal();
      await postDataWithResponse(ROUTES.TEAMS, objectToSend);
    } catch (error) {
      console.log(error);
    }
  };

  handleOpen = () => {
    const modalCopy = { ...this.state.modal };
    modalCopy.open = true;
    this.setState({ modal: modalCopy });
  };

  hideModal = () => {
    const modalCopy = { ...this.state.modal };
    modalCopy.open = false;
    this.setState({ modal: modalCopy });
  };

  handleClose = () => {
    const modalCopy = { ...this.state.modal };
    modalCopy.open = false;
    modalCopy.isSubmitButtonDisable = true;
    modalCopy.errorText = "";
    modalCopy.teamName = "";
    this.setState({ modal: modalCopy });
  };

  onChange = (event, newValue) => {
    const modalCopy = { ...this.state.modal };
    modalCopy.teamName = newValue;

    if (newValue.length > 3) {
      modalCopy.isSubmitButtonDisable = false;
      modalCopy.errorText = "";
      this.setState({ modal: modalCopy });
    } else {
      modalCopy.isSubmitButtonDisable = true;
      modalCopy.errorText = "Team name must be longer than 3 characters";
      this.setState({ modal: modalCopy });
    }
  };

  render() {
    let choosenOption;
    const actions = [
      <MuiThemeProvider>
        <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={this.state.isSubmitButtonDisable}
          onClick={this.createMatchRequest}
        />
      </MuiThemeProvider>
    ];
    switch (this.state.choosenOption) {
      case "schedule":
        choosenOption = (
          <Schedule
            upcomingMatches={this.state.upcomingMatches}
            playedMatches={this.state.playedMatches}
          />
        );
        break;
      case "statistics":
        choosenOption = <PlayerCarrer />;
        break;
    }
    let teamView = null;
    if (this.state.player != null && this.state.player.teamId.sd != null) {
      teamView = <ClubDetails team={this.state.team} />;
    } else {
      teamView = (
        <CreateNewTeam
          onOpen={this.handleOpen}
          onJoinRequest={this.handleOpen}
        />
      );
    }
    return (
      <div>
        <div className="PlayerPanel">
          <div className="ProfilePicture">
            <img src={profilePicture} width="300" height="300" />
          </div>
          <PlayerDetails player={this.state.player} />
          {teamView}
        </div>
        <div className="flex bottomSection">
          <PanelOptions
            labels={["Terminarz", "Statystyki"]}
            options={["schedule", "statistics"]}
            fun={arg => {
              this.setState({ choosenOption: arg });
            }}
          />
          {choosenOption}
        </div>
        <div>
          <MuiThemeProvider>
            <Dialog
              title="Tworzenie własnej druzyny"
              actions={actions}
              modal={true}
              open={this.state.modal.open}
            >
              <TextField
                hintText="Nazwa druzyny"
                errorText={this.state.modal.errorText}
                floatingLabelText="Nazwa druzyny"
                onChange={this.onChange}
              />
              <br />
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default PlayerPanel;
