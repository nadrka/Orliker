import React, { Component } from "react";
import "./ReceivedChallenge.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import moment from "moment";
class ReceivedChallenge extends Component {
  render() {
    if (this.props.value.accepted)
      return <div className="MatchInfo challengeHeight width60percent">Zaproszenie zaakceptowane!</div>;
    else if (this.props.value.cancelled)
      return <div className="MatchInfo challengeHeight width60percent">Zaproszenie odrzucone!</div>;
    return (
      <div className="MatchInfo challengeHeight width60percent">
        <div className="flex section">
          <div className="imageWrapper">
            <img src={require("../../assets/images/apoel.png")} alt="no pic" className="img" />
          </div>
          <div>
            Drużyna <span className="bold">{this.props.value.teamName}</span>
            <br />
            rzuciła Ci wyzwanie!
          </div>
        </div>
        <div className="flex section">
          Data meczu: {moment(this.props.value.date).format("DD/MM/YYYY HH:mm")}
          <br />
          Miejsce: {this.props.value.place}
        </div>
        <div className="flex section contentInColumn">
          Podejmujesz?
          <div className="flex contentInRow">
            <Button bsStyle="success" onClick={this.props.accept}>
              Tak
            </Button>
            <div className="separator" />
            <Button bsStyle="danger" onClick={this.props.decline}>
              Nie
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReceivedChallenge;
