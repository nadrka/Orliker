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
import { ROUTES } from "../../utils/Constants";
import { getData } from "../../utils/NetworkFunctions";
class PlayerPanel extends Component {
  state = { choosenOption: "schedule", player: null, team: null, playedMatches: [], upcomingMatches: [] };
  handleOptionChange = option => {
    this.setState({ choosenOption: option });
  };

  async componentDidMount() {
    const player = await getData(`${ROUTES.PLAYERS}/${this.props.match.params.id}`);
    const team = await getData(`${ROUTES.TEAMS}/${player.teamId}`);
    const upcomingMatches = await getData(`${ROUTES.TEAMS}/${player.teamId}/matches/upcoming`);
    const playedMatches = await getData(`${ROUTES.TEAMS}/${player.teamId}/matches/played`);
    this.setState({ player: player, team: team, playedMatches: playedMatches, upcomingMatches: upcomingMatches });
  }

  render() {
    let choosenOption;
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
      </div>
    );
  }
}

export default PlayerPanel;
