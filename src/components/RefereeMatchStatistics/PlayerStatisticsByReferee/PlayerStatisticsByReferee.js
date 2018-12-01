import React from "react";
import "./PlayerStatisticsByReferee.css";
import NumericInput from "react-numeric-input";
import profilePicture from "../../../assets/images/goals.png";
import profilePicture1 from "../../../assets/images/assist.png";
import profilePicture2 from "../../../assets/images/yellow-card.png";
import profilePicture3 from "../../../assets/images/red-card.png";
const PlayerStatisticsByReferee = props => {
  return (
    <div class="containerss">
      <label class="customcheck">
        <input type="checkbox" />
        <span class="checkmark" />
      </label>
      <div class="label1">21. Karol Nadratowski</div>
      <img src={profilePicture} width="30" height="30" />
      <div className="smallNumeric">
        <NumericInput
          onChange={this.chuj}
          className="form-control"
          min={0}
          max={100}
          value={0}
        />
      </div>
      <img src={profilePicture1} width="30" height="30" />
      <div className="smallNumeric">
        <NumericInput
          onChange={this.chuj}
          className="form-control"
          min={0}
          max={100}
          value={0}
        />
      </div>
      <img src={profilePicture2} width="30" height="30" />
      <div className="smallNumeric">
        <NumericInput
          onChange={this.chuj}
          className="form-control"
          min={0}
          max={100}
          value={0}
        />
      </div>
      <img src={profilePicture3} width="30" height="30" />
      <div className="smallNumeric">
        <NumericInput
          onChange={this.chuj}
          className="form-control"
          min={0}
          max={100}
          value={0}
        />
      </div>
    </div>
  );
};

export default PlayerStatisticsByReferee;
