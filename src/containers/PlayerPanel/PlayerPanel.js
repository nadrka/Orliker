import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import ClubDetails from "./ClubDetails/ClubDetails";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import PlayerPanelOptions from "./PlayerPanelOptions/PlayerPanelOptions";
import "./PlayerPanel.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import PlayerCarrer from "../PlayerCarrer/PlayerCarrer";
import Schedule from "../../components/Schedule/Schedule";
import PlayerDetailsForm from "../PlayerDetailsForm/PlayerDetailsForm";
import PlayerLeagueSchedule from "../PlayerLeagueSchedule/PlayerLeagueSchedule";
class PlayerPanel extends Component {
  state = { choosenOption: "schedule" };

  handleOptionChange = option => {
    this.setState({ choosenOption: option });
  };

  render() {
    let choosenOption;
    switch (this.state.choosenOption) {
      case "schedule":
        choosenOption = <PlayerLeagueSchedule />;
        break;
      case "statistics":
        choosenOption = <PlayerCarrer />;
        break;
      case "playerDetails":
        choosenOption = <PlayerDetailsForm />;
        break;
    }
    return (
      <Aux>
        <div className="PlayerPanel">
          <div className="ProfilePicture">
            <img src={profilePicture} width="300" height="300" />
          </div>
          <PlayerDetails />
          <ClubDetails />
        </div>
        <PlayerPanelOptions onOptionChanged={this.handleOptionChange} />
        {choosenOption}
      </Aux>
    );
  }
}

export default PlayerPanel;
