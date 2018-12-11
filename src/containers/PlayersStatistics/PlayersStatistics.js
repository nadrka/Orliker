import React, { Component } from "react";
import "../LeagueTable/LeagueTable.css";
import { Link } from "react-router-dom";

const PLAYERS = [
  {
    number: 1,
    nameAndSurname: "Sebastian Karwowski",
    age: 21,
    playedMatches: 2,
    scoredGoals: 1,
    yellowCards: 1,
    redCards: 0
  },
  {
    number: 6,
    nameAndSurname: "Karol Nadratowski",
    age: 22,
    playedMatches: 3,
    scoredGoals: 6,
    yellowCards: 1,
    redCards: 0
  },
  {
    number: 8,
    nameAndSurname: "Gustaw Ohler",
    age: 22,
    playedMatches: 3,
    scoredGoals: 6,
    yellowCards: 1,
    redCards: 0
  }
];

class PlayersStatistics extends Component {
  renderTable() {
    PLAYERS.sort((player1, player2) => {
      return player1.number - player2.number;
    });
    var toRender = this.props.players.map((player, i) => {
      console.log(player.user.imgURL);
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
              src={"http://localhost:3000/" + player.user.imgURL}
              style={{
                height: "50px",
                width: "52px",
                verticalAlign: "top",
                align: "right",
                paddingRight: "10px"
              }}
            />
          </td>
          <td className="BlackLink">
            <Link className="teamLink" to={"/panel/player/" + player.id}>
              {player.user.firstName} {player.user.secondName}
            </Link>
          </td>
          <td>{player.age}</td>
          <td>{player.appearance}</td>
          <td>{player.goals}</td>
          <td>{player.assists}</td>
          <td>{player.yellowCards}</td>
          <td>{player.redCards}</td>
        </tr>
      );
    });
    return toRender;
  }

  render() {
    return (
      <table style={{ width: "95%", alignSelf: "center" }}>
        <tr className="headerSection">
          <th>Numer</th>
          <th />
          <th>Imię oraz nazwisko</th>
          <th>Wiek</th>
          <th>Rozegrane mecze</th>
          <th>Zdobyte bramki</th>
          <th>Asysty</th>
          <th>Żółte kartki</th>
          <th>Czerwone kartki</th>
        </tr>
        {this.renderTable()}
      </table>
    );
  }
}

export default PlayersStatistics;
