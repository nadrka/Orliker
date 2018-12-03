import "./PlayerStatisticsByReferee.css";
import NumericInput from "react-numeric-input";
import goals from "../../../assets/images/goals.png";
import assists from "../../../assets/images/assist.png";
import yellowCards from "../../../assets/images/yellow-card.png";
import redCards from "../../../assets/images/red-card.png";
import React, { Component } from "react";

class PlayerStatisticsByReferee extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.player === nextProps.player) {
      return false;
    } else {
      return true;
    }
  }
  goalsNumberChanged = goalsNumber => {
    this.props.onGoalsChanged(this.props.player.id, goalsNumber, "goals");
  };

  assistsNumberChanged = assistsNumber => {
    this.props.onAssistsChanged(this.props.player.id, assistsNumber, "assists");
  };

  yellowCardsNumberChanged = yellowCardsNumber => {
    this.props.onYellowCardsChanged(
      this.props.player.id,
      yellowCardsNumber,
      "yellowCards"
    );
  };

  redCardsNumberChanged = redCardsNumber => {
    this.props.onRedCardsChanged(
      this.props.player.id,
      redCardsNumber,
      "redCards"
    );
  };

  checkboxChanged = event => {
    this.props.onCheckboxChanged(
      this.props.player.id,
      event.target.checked,
      "didPlay"
    );
  };
  render() {
    return (
      <div class="containerss">
        <label class="customcheck">
          <input onChange={this.checkboxChanged} type="checkbox" />
          <span class="checkmark" />
        </label>
        <div class="label1">
          {this.props.player.number +
            ". " +
            this.props.player.firstName +
            " " +
            this.props.player.secondName}{" "}
        </div>
        <img src={goals} width="30" height="30" />
        <div className="smallNumeric">
          <NumericInput
            onChange={this.goalsNumberChanged}
            className="form-control"
            min={0}
            max={100}
            value={0}
          />
        </div>
        <img src={assists} width="30" height="30" />
        <div className="smallNumeric">
          <NumericInput
            onChange={this.assistsNumberChanged}
            className="form-control"
            min={0}
            max={100}
            value={0}
          />
        </div>
        <img src={yellowCards} width="30" height="30" />
        <div className="smallNumeric">
          <NumericInput
            onChange={this.yellowCardsNumberChanged}
            className="form-control"
            min={0}
            max={100}
            value={0}
          />
        </div>
        <img src={redCards} width="30" height="30" />
        <div className="smallNumeric">
          <NumericInput
            onChange={this.redCardsNumberChanged}
            className="form-control"
            min={0}
            max={100}
            value={0}
          />
        </div>
      </div>
    );
  }
}

export default PlayerStatisticsByReferee;
