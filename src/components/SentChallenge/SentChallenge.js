import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./SentChallenge.css";

class SentChallenge extends Component {
  render() {
    if (this.props.value.cancelled)
      return <div className="MatchInfo challengeHeight width60percent">Mecz anulowany!</div>;
    return (
      <div className="MatchInfo challengeHeight width60percent">
        <div className="flex section">
          <div className="imageWrapper">
            <img src={require("../../assets/images/apoel.png")} alt="no pic" className="img" />
          </div>
          <div>
            Rzuciłeś drużynie
            <br />
            <span className="bold">{this.props.value.teamName}</span> wyzwanie!
          </div>
        </div>
        <div className="flex section">
          Data meczu: {this.props.value.date}
          <br />
          Miejsce: {this.props.value.place}
        </div>
        <div className="flex section smallerSection">
          <Button bsStyle="danger" onClick={this.props.cancel}>
            Anuluj
          </Button>
        </div>
      </div>
    );
  }
}

export default SentChallenge;
