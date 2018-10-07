import React, { Component } from "react";

import "./PlayerCarrer.css";
class PlayerCarrer extends Component {
  state = {
    carrerStatistics: {
      statistic: {
        id: 1,
        year: "2018/2019",
        team: "Barcelona",
        league: "La Liga",
        matches: "20",
        goals: "16",
        assists: "5"
      },
      statistic2: {
        id: 2,
        year: "2017/2018",
        team: "Barcelona",
        league: "La Liga",
        matches: "20",
        goals: "16",
        assists: "5"
      },
      statistic3: {
        id: 3,
        year: "2017/2018",
        team: "Barcelona",
        league: "La Liga",
        matches: "20",
        goals: "16",
        assists: "5"
      },
      statistic4: {
        id: 4,
        year: "2017/2018",
        team: "Barcelona",
        league: "La Liga",
        matches: "20",
        goals: "16",
        assists: "5"
      },
      statistic5: {
        id: 5,
        year: "2017/2018",
        team: "Barcelona",
        league: "La Liga",
        matches: "20",
        goals: "16",
        assists: "5"
      }
    }
  };
  render() {
    const transformedCarrerStatistics = Object.keys({
      ...this.state.carrerStatistics
    }).map(key => {
      let statistic = this.state.carrerStatistics[key];
      return (
        <tr key={statistic.id}>
          <td className="superTD">{statistic.year}</td>
          <td>{statistic.team}</td>
          <td>{statistic.league}</td>
          <td>{statistic.matches}</td>
          <td>{statistic.goals}</td>
          <td>{statistic.assists}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr className="borderedTr">
            <th className="superTD">Season</th>
            <th>Team</th>
            <th>League</th>
            <th>Matches</th>
            <th>Goals</th>
            <th>Assists</th>
          </tr>
        </thead>
        <tbody>{transformedCarrerStatistics}</tbody>
      </table>
    );
  }
}

export default PlayerCarrer;
