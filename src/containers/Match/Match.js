import React, { Component } from "react";
import MatchDetails from "../../components/Match/Details/MatchDetails";
import MatchHeader from "../../components/Match/Header/MatchHeader";
import "./Match.css";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";
import MatchStatistics from "../../components/Match/Statistics/Statistics";

class Match extends Component {
  state = {
    match: {
      id: 1,
      league: "Gdańsk - 1 liga",
      firstTeam: {
        name: "Apoel Morena",
        scoredGoals: 4,
        isPlayingHome: true,
        position: 7
      },
      secondTeam: {
        name: "Hanza Lider",
        scoredGoals: 4,
        isPlayingHome: false,
        position: 7
      },
      matchDate: {
        date: "09/09/2018",
        time: "20:45"
      },
      place: {
        name: "Za decathlonem",
        address: "ul. Janusza 5a",
        lon: 19.78,
        lat: 51.23
      },
      referee: {
        id: 1,
        name: "Janusz Spawacz"
      },
      matchStatistics: {
        homeTeam: {
          playerStatistics: [
            {
              name: "Karol",
              surName: "Nadratowski",
              goals: 1,
              assists: 2,
              redCards: 0,
              yellowCards: 0,
              position: "Midfielder"
            },
            {
              name: "Kamil",
              surName: "Nadratowski",
              goals: 0,
              assists: 1,
              redCards: 0,
              yellowCards: 1,
              position: "Defender"
            },
            {
              name: "Kuba",
              surName: "Morawski",
              goals: 0,
              assists: 0,
              redCards: 0,
              yellowCards: 0,
              position: "Goalkeeper"
            },
            {
              name: "Gustaw",
              surName: "Ohler",
              goals: 2,
              assists: 0,
              redCards: 0,
              yellowCards: 0,
              position: "Stiker"
            }
          ]
        },
        awayTeam: {
          playerStatistics: [
            {
              name: "Karol",
              surName: "Nadratowski",
              goals: 1,
              assists: 2,
              redCards: 0,
              yellowCards: 0,
              position: "Midfielder"
            },
            {
              name: "Kamil",
              surName: "Nadratowski",
              goals: 0,
              assists: 1,
              redCards: 0,
              yellowCards: 1,
              position: "Defender"
            },
            {
              name: "Kuba",
              surName: "Morawski",
              goals: 0,
              assists: 0,
              redCards: 0,
              yellowCards: 0,
              position: "Goalkeeper"
            },
            {
              name: "Gustaw",
              surName: "Ohler",
              goals: 2,
              assists: 0,
              redCards: 0,
              yellowCards: 0,
              position: "Stiker"
            }
          ]
        },
        homeTeam: true
      }
    }
  };

  render() {
    return (
      <div>
        <MatchHeader match={this.state.match} />
        <MatchDetails />
        <MatchStatistics />
      </div>
    );
  }
}

export default Match;
