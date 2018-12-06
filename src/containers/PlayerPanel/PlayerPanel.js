import React, { Component } from "react";
import ClubDetails from "./ClubDetails/ClubDetails";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import PlayerPanelOptions from "./PlayerPanelOptions/PlayerPanelOptions";
import "./PlayerPanel.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import PlayerCarrer from "../PlayerCarrer/PlayerCarrer";
import Schedule from "../../components/Schedule/Schedule";
import PlayerLeagueSchedule from "../PlayerLeagueSchedule/PlayerLeagueSchedule";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { ROUTES } from "../../utils/Constants";
import { getData } from "../../utils/NetworkFunctions";

class PlayerPanel extends Component {
  state = {
    choosenOption: "schedule",
    player: null,
    team: null,
    playedMatches: [],
    upcomingMatches: [],
    open: false
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let choosenOption;
    const actions = [
      <MuiThemeProvider>
        <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onClick={this.handleClose}
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
    return (
      <div>
        <div className="PlayerPanel">
          <div className="ProfilePicture">
            <img src={profilePicture} width="300" height="300" />
          </div>
          <PlayerDetails player={this.state.player} />
          <ClubDetails team={this.state.team} />
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
            <RaisedButton label="Stwórz własną" onClick={this.handleOpen} />
            <RaisedButton
              label="Dołącz do istniejącej"
              onClick={this.handleOpen}
            />
            <Dialog
              title="Tworzenie własnej druzyny"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              <TextField
                hintText="Hint Text"
                errorText="This field is required"
                floatingLabelText="Floating Label Text"
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
