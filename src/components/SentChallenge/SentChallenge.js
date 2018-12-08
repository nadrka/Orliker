import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./SentChallenge.css";
import moment from "moment";
class SentChallenge extends Component {
  render() {
    if (this.props.value.cancelled)
      return <div className="MatchInfo challengeHeight width60percent">Mecz anulowany!</div>;
    return (
      <div className="MatchInfo challengeHeight width60percent">
        <div className="flex section">
          <div className="imageWrapper">
            <img
              src={"http://localhost:3000/" + this.props.value.imgURL}
              width="59"
              height="55"
              style={{ marginLeft: "15px" }}
              className="img"
            />
          </div>
          <div>
            Rzuciłeś drużynie
            <br />
            <span className="bold">{this.props.value.teamName}</span> wyzwanie!
          </div>
        </div>
        <div className="flex section">
          Data meczu: {moment(this.props.value.date).format("DD/MM/YYYY HH:mm")}
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
