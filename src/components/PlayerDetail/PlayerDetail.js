import React, { Component } from "react";
import "./PlayerDetail.css";
import { Glyphicon } from "react-bootstrap";

class PlayerDetail extends Component {
  state = { isBeingChanged: false };

  handlePressedKey(e) {
    if (e.key === "Enter") {
      this.props.onChange(e.target.value);
      this.setState({ isBeingChanged: false });
    }
  }

  render() {
    let detail = (
      <div className="PlayerDetail">
        <div className="LabelTitle">
          <label>{this.props.name}</label>
        </div>
        {this.state.isBeingChanged && (
          <input
            className="inputClass"
            type="text"
            onKeyPress={event => {
              this.handlePressedKey(event);
            }}
            defaultValue={this.props.value}
          />
        )}
        {!this.state.isBeingChanged && (
          <div className="LabelValue">
            <label>{this.props.value}</label>
            {this.props.canChange && (
              <Glyphicon
                glyph="glyphicon glyphicon-pencil"
                bsClass={"glyphicon"}
                onClick={() => {
                  this.setState({ isBeingChanged: true });
                }}
              />
            )}
          </div>
        )}
      </div>
    );

    return <div>{detail}</div>;
  }
}

export default PlayerDetail;
