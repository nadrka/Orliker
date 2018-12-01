import React, { Component } from "react";
import "./TeamPanel.css";
import PlayerStatistics from "../PlayersStatistics/PlayersStatistics";
import LeagueSchedule from "../LeagueSchedule/LeagueSchedule";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import Schedule from "../../components/Schedule/Schedule";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";

const MENUOPTIONS = {
  MATCHES: 0,
  PLAYERS: 1
};

class TeamPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
      option: MENUOPTIONS.MATCHES,
      players: null,
      playedMatches: [],
      upcomingMatches: []
    };
  }

  async componentDidMount() {
    try {
      const team = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}`);
      const players = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}/playersWithStats`);
      const upcomingMatches = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}/matches/upcoming`);
      const playedMatches = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}/matches/played`);
      this.setState({
        team: team,
        players: players,
        playedMatches: playedMatches,
        upcomingMatches: upcomingMatches
      });
    } catch (error) {
      console.log(error);
    }
  }

  getStyle(index) {
    if (index === this.state.option) {
      return "activeColor";
    }
    return "inactiveColor";
  }
  renderOption() {
    if (this.state.option == MENUOPTIONS.PLAYERS) {
      return <PlayerStatistics players={this.state.players} />;
    } else if (this.state.option == MENUOPTIONS.MATCHES) {
      return <Schedule upcomingMatches={this.state.upcomingMatches} playedMatches={this.state.playedMatches} />;
    }
  }
  render() {
    return (
      <div className="flex mainContainerTeamPanel">
        <div className="flex topSection">
          <div className="flex picSection">
            <img src={require("../../assets/images/apoel.png")} alt="no pic" className="img" />
          </div>
          {this.state.team && (
            <div className="flex textSection">
              <div className="bigFontBigMargin">{this.state.team.name}</div>
              <div className="mediumFontMediumMargin mediumMarginWithBorder">
                {this.state.team.position}. miejsce - {this.state.team.currentLegue.leagueNumber} liga
              </div>
              <div className="mediumFontMediumMargin">
                Bilans: {this.state.team.wins} Z {this.state.team.draws} R {this.state.team.loses} P
              </div>
              <div className="mediumFontMediumMargin">
                Kapitan: {this.state.team.captain.user.firstName} {this.state.team.captain.user.secondName}
              </div>
              <div className="mediumFontMediumMargin">Ostatni mecz: Apoel Morena 5-0 Ego</div>
            </div>
          )}
          <div className="flex marginSection" />
        </div>
        <div className="flex bottomSection">
          <PanelOptions
            labels={["Mecze", "Zawodnicy"]}
            options={[MENUOPTIONS.MATCHES, MENUOPTIONS.PLAYERS]}
            fun={arg => {
              this.setState({ option: arg });
            }}
          />

          {/* <PanelOption
              name={"Mecze"}
              clicked={() => {
                this.setState({ option: MENUOPTIONS.MATCHES });
              }}
              //key="Mecze"
              isActive={this.state.option == MENUOPTIONS.MATCHES}
              howManyButtons={2}
            />
            <PanelOption
              name={"Zawodnicy"}
              clicked={() => {
                this.setState({ option: MENUOPTIONS.PLAYERS });
              }}
              //key="awayTeam"
              isActive={this.state.option == MENUOPTIONS.PLAYERS}
              howManyButtons={2}
            />           <div
              className={"flex buttons rightMargin " + this.getStyle(0)}
              onClick={() => {
                this.setState({ option: MENUOPTIONS.MATCHES });
              }}
            >
              Mecze
            </div>
            <div
              className={"flex buttons " + this.getStyle(1)}
              onClick={() => {
                this.setState({ option: MENUOPTIONS.PLAYERS });
              }}
            >
              Zawodnicy
            </div>*/}
          {this.renderOption()}
        </div>
      </div>
    );
  }
}

export default TeamPanel;
