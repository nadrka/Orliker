import React, { Component } from "react";
import "../LeagueTable/LeagueTable.css";

const PLAYERS = [
  {
    number: 1,
    nameAndSurname: "Sebastian Karwowski",
    age: 21,
    playedMatches: 2,
    scoredGoals: 1
  },
  {
    number: 6,
    nameAndSurname: "Karol Nadratowski",
    age: 22,
    playedMatches: 3,
    scoredGoals: 6
  },
  {
    number: 8,
    nameAndSurname: "Gustaw Ohler",
    age: 22,
    playedMatches: 3,
    scoredGoals: 6
  }
];

class PlayersStatistics extends Component {
  renderTable() {
    PLAYERS.sort((player1, player2) => {
      return player1.number - player2.number;
    });
    var toRender = PLAYERS.map((player, i) => {
      let classToUse = i % 2 ? "secondRow" : "firstRow";
      return (
        <tr className={classToUse}>
          <td>{player.number}</td>
          <td
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              display: "flex"
            }}
          >
            <img
              src={require("../../assets/images/apoel.png")}
              alt="no pic"
              style={{
                height: "50px",
                width: "auto",
                verticalAlign: "top",
                align: "right",
                paddingRight: "10px"
              }}
            />
          </td>
          <td>{player.nameAndSurname}</td>
          <td>{player.age}</td>
          <td>{player.playedMatches}</td>
          <td>{player.scoredGoals}</td>
        </tr>
      );
    });
    return toRender;
  }

  render() {
    return (
      <table style={{ width: "80%", alignSelf: "center" }}>
        <tr className="headerSection">
          <th>Numer</th>
          <th />
          <th>Imię oraz nazwisko</th>
          <th>Wiek</th>
          <th>Rozegrane mecze</th>
          <th>Zdobyte bramki</th>
        </tr>
        {this.renderTable()}
      </table>
    );
  }
}

export default PlayersStatistics;
