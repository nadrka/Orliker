import React, { Component } from "react";
import "./ReceivedChallenge.css";
import { Button, ButtonToolbar } from "react-bootstrap";

class ReceivedChallenge extends Component {
  render() {
    return (
      <div className="MatchInfo challengeHeight width60percent">
        <div className="flex section">
          <div className="imageWrapper">
            <img src={require("../../assets/images/apoel.png")} alt="no pic" className="img" />
          </div>
          <div>
            Drużyna Apoel Morena
            <br />
            rzuciła Ci wyzwanie!
          </div>
        </div>
        <div className="flex section">
          Data meczu: 14.12.2018 14:15
          <br />
          Miejsce: Camp Nou
        </div>
        <div className="flex section contentInColumn">
          Podejmujesz?
          <div className="contentInRow">
            <ButtonToolbar>
              <Button bsStyle="success">Tak</Button>
              <Button bsStyle="danger">Nie</Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }
}

export default ReceivedChallenge;
