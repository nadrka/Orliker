import React, { Component } from "react";
import "./PlayerDetails.css";
import PlayerDetail from "../../../components/PlayerDetail/PlayerDetail";

const labels = {
  name: {
    title: "Imię i nazwisko: "
  },
  number: {
    title: "Numer: "
  },
  position: {
    title: "Pozycja: "
  },
  strongerFoot: {
    title: "Lepsza noga: "
  }
};
class PlayerDetails extends Component {
  /*state = {
    
  };*/

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
    const transformedPlayerDetails = Object.keys({ ...labels }).map(key => {
      let value = "";
      if (this.props.player) {
        if (key === "name") value = `${this.props.player.user.firstName} ${this.props.player.user.secondName}`;
        else value = this.props.player[key];
      }
      return (
        <PlayerDetail
          key={key}
          name={labels[key].title}
          value={value}
          /*onChange={value => {
            let toChange = this.state.labels;
            toChange[key].value = value;
            this.setState({ labels: toChange });
          }}*/
        />
      );
    });
    return <div className="PlayerDetails">{transformedPlayerDetails}</div>;
  }
}

export default PlayerDetails;
