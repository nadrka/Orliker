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

  /*async getData() {
    let response = await fetch(`http://127.0.0.1:3000/api/players/1`, {
      method: "GET",
      headers: Object.assign({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    });
    let responseJson = await response.json();
    if (response.status === 200) {
      return responseJson;
    } else {
      throw new Error("BLAD!");
    }
  }
  async componentDidMount() {
    let data = await this.getData();
    console.log(data);
  }*/
  render() {
    const transformedPlayerDetails = Object.keys({ ...this.state.labels }).map(key => {
      return <PlayerDetail key={key} name={this.state.labels[key].title} value={this.state.labels[key].value} />;
    });
    return <div className="PlayerDetails">{transformedPlayerDetails}</div>;
  }
}

export default PlayerDetails;
