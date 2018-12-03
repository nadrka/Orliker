import React, { Component } from "react";
import "./PlayerDetail.css";
import { Glyphicon, SplitButton, MenuItem } from "react-bootstrap";

class PlayerDetail extends Component {
  state = { isBeingChanged: false };

  handlePressedKey(e) {
    if (e.key === "Enter") {
      this.props.onChange(e.target.value);
      this.setState({ isBeingChanged: false });
    }
    if (typeof e === "string") {
      this.props.onChange(e);
      this.setState({ isBeingChanged: false });
    }
  }

  showInput() {
    if (this.state.isBeingChanged) {
      if (this.props.serverKeyName === "position")
        return (
          <SplitButton
            title="Wybierz pozycję"
            pullRight
            id="split-button-pull-right"
            onSelect={() => {
              this.setState({ isBeingChanged: false });
            }}
          >
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Bramkarz"
            >
              Bramkarz
            </MenuItem>
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Obrońca"
            >
              Obrońca
            </MenuItem>
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Pomocnik"
            >
              Pomocnik
            </MenuItem>
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Napastnik"
            >
              Napastnik
            </MenuItem>
          </SplitButton>
        );
      else if (this.props.serverKeyName === "strongerFoot")
        return (
          <SplitButton
            title="Wybierz dominującą nogę"
            pullRight
            id="split-button-pull-right"
            onSelect={() => {
              this.setState({ isBeingChanged: false });
            }}
          >
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Prawa"
            >
              Prawa
            </MenuItem>
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Lewa"
            >
              Lewa
            </MenuItem>
            <MenuItem
              onSelect={eventKey => {
                this.handlePressedKey(eventKey);
              }}
              eventKey="Obunożny"
            >
              Obunożny
            </MenuItem>
          </SplitButton>
        );
      return (
        <input
          className="inputClass"
          type="text"
          onKeyPress={event => {
            this.handlePressedKey(event);
          }}
          defaultValue={this.props.value}
        />
      );
    }
  }

  render() {
    console.log(this.props.serverKeyName);

    let detail = (
      <div className="PlayerDetail">
        <div className="LabelTitle">
          <label>{this.props.name}</label>
        </div>
        {this.showInput()}
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
