import React, { Component } from "react";
import "./TeamPanel.css";
import PlayerStatistics from "../PlayersStatistics/PlayersStatistics";
import LeagueSchedule from "../LeagueSchedule/LeagueSchedule";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";

const MENUOPTIONS = {
  MATCHES: 0,
  PLAYERS: 1
};

class TeamPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: MENUOPTIONS.MATCHES
    };
  }
  getStyle(index) {
    if (index === this.state.option) {
      return "activeColor";
    }
    return "inactiveColor";
  }
  renderOption() {
    if (this.state.option == MENUOPTIONS.PLAYERS) {
      return <PlayerStatistics />;
    } else if (this.state.option == MENUOPTIONS.MATCHES) {
      return <LeagueSchedule />;
    }
  }
  render() {
    return (
      <div className="flex mainContainerTeamPanel">
        <div className="flex topSection">
          <div className="flex picSection">
            <img src={require("../../assets/images/apoel.png")} alt="no pic" className="img" />
          </div>
          <div className="flex textSection">
            <div className="bigFontBigMargin">Apoel Morena</div>
            <div className="mediumFontMediumMargin mediumMarginWithBorder"> 1. miejsce - 1. liga</div>
            <div className="mediumFontMediumMargin">Bilans: 3 Z 0 R 0 P</div>
            <div className="mediumFontMediumMargin">Kapitan: Gustaw Ohler</div>
            <div className="mediumFontMediumMargin">Ostatni mecz: Apoel Morena 5-0 Ego</div>
          </div>
          <div className="flex marginSection" />
        </div>
        <div className="flex bottomSection">
          <div className="flex menuSection">
            <PanelOption
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
            />
            {/*            <div
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
          </div>
          {this.renderOption()}
        </div>
      </div>
    );
  }
}

export default TeamPanel;
