import React, { Component } from "react";
import "./PlayerDetails.css";
import PlayerDetail from "../../../components/PlayerDetail/PlayerDetail";

class PlayerDetails extends Component {
  state = {
    labels: {
      name: {
        title: "Imię i nazwisko:",
        value: "Karol Nadratowski"
      },
      height: {
        title: "Wzrost:",
        value: " 177"
      },
      weight: {
        title: "Waga:",
        value: " 72"
      },
      position: {
        title: "Pozycja:",
        value: " pomocnik"
      },
      betterFoot: {
        title: "Lepsza noga:",
        value: " lewa"
      }
    }
  };
  render() {
    const transformedPlayerDetails = Object.keys({ ...this.state.labels }).map(
      key => {
        return (
          <PlayerDetail
            key={key}
            name={this.state.labels[key].title}
            value={this.state.labels[key].value}
          />
        );
      }
    );
    return <div className="PlayerDetails">{transformedPlayerDetails}</div>;
  }
}

export default PlayerDetails;
