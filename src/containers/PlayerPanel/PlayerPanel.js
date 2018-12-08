import React, { Component } from "react";
import ClubDetails from "./ClubDetails/ClubDetails";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import PlayerPanelOptions from "./PlayerPanelOptions/PlayerPanelOptions";
import "./PlayerPanel.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import userImagePlaceHolder from "../../assets/images/user-image-placeholder.jpg";
import PlayerCarrer from "../PlayerCarrer/PlayerCarrer";
import Schedule from "../../components/Schedule/Schedule";
import PlayerLeagueSchedule from "../PlayerLeagueSchedule/PlayerLeagueSchedule";
import { getData, postDataWithResponse, putFormatData } from "../../utils/NetworkFunctions";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { ROUTES } from "../../utils/Constants";
import "react-notifications/lib/notifications.css";
import { connect } from "react-redux";
import CreateNewTeam from "./CreateNewTeam";
import { createNotification } from "../../utils/Notification";

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
    const player = await getData(`${ROUTES.PLAYERS}/${this.props.match.params.id}`);
    const team = await getData(`${ROUTES.TEAMS}/${player.teamId}`);
    const upcomingMatches = await getData(`${ROUTES.TEAMS}/${player.teamId}/matches/upcoming`);
    const playedMatches = await getData(`${ROUTES.TEAMS}/${player.teamId}/matches/played`);
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
      createNotification("success", "Druzyna została poprawnie stworzona!", "Tworzenie druzyny nie powiodło się");
    } catch (error) {
      createNotification("error", "Druzyna została poprawnie stworzona!", "Tworzenie druzyny nie powiodło się");
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

  uploadHandler = async file => {
    const formData = new FormData();
    formData.append("userImage", file, file.name);
    await putFormatData(`${ROUTES.PLAYERS}/image`, formData, { Authorization: this.props.loggedUser.token });
    const player = await getData(`${ROUTES.PLAYERS}/${this.props.match.params.id}`);
    this.setState({ player });
  };

  fileChangedHandler = event => {
    const file = event.target.files[0];
    this.uploadHandler(file);
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
          <Schedule upcomingMatches={this.state.upcomingMatches} playedMatches={this.state.playedMatches} />
        );
        break;
      case "statistics":
        choosenOption = <PlayerCarrer />;
        break;
    }
    let teamView = null;
    if (this.state.player != null && this.state.player.teamId != null) {
      teamView = <ClubDetails team={this.state.team} />;
    } else {
      if (this.props.loggedIn) {
        teamView = <CreateNewTeam onOpen={this.handleOpen} onJoinRequest={this.handleOpen} />;
      }
    }
    let img = null;
    if (this.state.player != null && this.state.player.user.imgURL != null) {
      // img = "Z serwera";
      img = <img src={"http://localhost:3000/" + this.state.player.user.imgURL} width="315" height="300" />;
    } else {
    }
    return (
      <div>
        <div className="PlayerPanel">
          <div className="ProfilePicture">{img}</div>
          <div>
            <PlayerDetails
              player={
                this.props.loggedUser && this.state.player && this.state.player.id == this.props.loggedUser.id
                  ? {
                      ...this.props.loggedUser,
                      user: {
                        firstName: this.props.loggedUser.firstName,
                        secondName: this.props.loggedUser.secondName
                      }
                    }
                  : this.state.player
              }
            />
            {this.props.loggedUser && (
              <div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={this.fileChangedHandler}
                  ref={fileInput => (this.fileInput = fileInput)}
                />
                <button
                  style={{ color: "black", marginTop: "20px", marginLeft: "10px" }}
                  onClick={() => this.fileInput.click()}
                >
                  {" "}
                  Pick profile photo{" "}
                </button>
              </div>
            )}
          </div>
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
            <Dialog title="Tworzenie własnej druzyny" actions={actions} modal={true} open={this.state.modal.open}>
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

const mapStateToProps = state => {
  return { loggedUser: state.user };
};

export default connect(mapStateToProps)(PlayerPanel);
