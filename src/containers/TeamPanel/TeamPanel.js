import React, { Component } from "react";
import "./TeamPanel.css";
import PlayerStatistics from "../PlayersStatistics/PlayersStatistics";
import LeagueSchedule from "../LeagueSchedule/LeagueSchedule";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import Schedule from "../../components/Schedule/Schedule";

const MENUOPTIONS = {
  MATCHES: 0,
  PLAYERS: 1
};

class TeamPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: MENUOPTIONS.MATCHES,
      playedMatches: [
        {
          id: 1,
          firstTeam: {
            name: "Apoel Morena",
            scoredGoals: 4,
            isPlayingHome: true
          },
          secondTeam: {
            name: "HanzaLider",
            scoredGoals: 4,
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 2,
          firstTeam: {
            name: "RedBulls",
            scoredGoals: 0,
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: 3,
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 3,
          firstTeam: {
            name: "Ast Wrzeszcz",
            scoredGoals: 1,
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: 2,
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 4,
          firstTeam: {
            name: "Marpoli",
            scoredGoals: 2,
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: 10,
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 5,
          firstTeam: {
            name: "Apoel Morena",
            scoredGoals: 5,
            isPlayingHome: true
          },
          secondTeam: {
            name: "Czarni Osowa",
            scoredGoals: 3,
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 6,
          firstTeam: {
            name: "Apoel Morena",
            scoredGoals: 5,
            isPlayingHome: true
          },
          secondTeam: {
            name: "OST Wrzeszcz",
            scoredGoals: 5,
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        }
      ],
      incomingMatches: [
        {
          id: 1,
          firstTeam: {
            name: "RedBulls",
            scoredGoals: "-",
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: "-",
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 2,
          firstTeam: {
            name: "RedBulls",
            scoredGoals: "-",
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: "-",
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 3,
          firstTeam: {
            name: "RedBulls",
            scoredGoals: "-",
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: "-",
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        },
        {
          id: 4,
          firstTeam: {
            name: "RedBulls",
            scoredGoals: "-",
            isPlayingHome: true
          },
          secondTeam: {
            name: "Apoel Morena",
            scoredGoals: "-",
            isPlayingHome: false
          },
          matchDate: {
            date: "09/09/2018",
            time: "20:45"
          }
        }
      ]
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
      return <Schedule incomingMatches={this.state.incomingMatches} playedMatches={this.state.playedMatches} />;
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
