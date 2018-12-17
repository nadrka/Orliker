import React, { Component } from "react";

import "./PlayerCarrer.css";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
class PlayerCarrer extends Component {
  state = {
    carrerStatistics: []
  };

  async componentDidMount() {
    const stats = await getData(`${ROUTES.PLAYERS}/${this.props.id}/historicStats`);
    this.setState({ carrerStatistics: stats });
  }

  render() {
    const transformedCarrerStatistics = this.state.carrerStatistics.map(stats => {
      return (
        <tr key={stats.id}>
          <td className="superTD">{stats.season.name}</td>
          <td>{stats.team.name}</td>
          <td>{stats.matches}</td>
          <td>{stats.goals}</td>
          <td>{stats.assists}</td>
          <td>{stats.yellowsCards}</td>
          <td>{stats.redCards}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr className="borderedTr">
            <th className="superTD">Sezon</th>
            <th>Zespół</th>
            <th>Mecze</th>
            <th>Gole</th>
            <th>Asysty</th>
            <th>Żółte kartki</th>
            <th>Czerwone kartki</th>
          </tr>
        </thead>
        <tbody>{transformedCarrerStatistics}</tbody>
      </table>
    );
  }
}

export default PlayerCarrer;
