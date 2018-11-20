import React, { Component } from "react";
import "./PlayerPanelOptions.css";
import PanelOption from "../../../components/PanelOptions/PanelOption/PanelOption";

class PlayerPanelOptions extends Component {
  state = {
    options: {
      schedule: {
        name: "Terminarz",
        isActive: true
      },
      statistics: {
        name: "Statystyki",
        isActive: false
      }
    },
    lastChosen: "schedule"
  };

  handleOptionClick = chosenOption => {
    if (this.state.lastChosen != chosenOption) {
      let updatedOptions = {
        ...this.state.options
      };
      updatedOptions[chosenOption].isActive = true;
      updatedOptions[this.state.lastChosen].isActive = false;
      this.setState({ option: updatedOptions, lastChosen: chosenOption });
      this.updateChosenView(chosenOption);
    }
  };

  updateChosenView = chosenOption => {
    this.props.onOptionChanged(chosenOption);
  };

  render() {
    const transformedPanelOptions = Object.keys({
      ...this.state.options
    }).map(key => {
      return (
        <PanelOption
          key={key}
          name={this.state.options[key].name}
          isActive={this.state.options[key].isActive}
          clicked={this.handleOptionClick}
          option={key}
          howManyButtons={Object.keys(this.state.options).length}
        />
      );
    });
    return <div className="PlayerPanelOptions">{transformedPanelOptions}</div>;
  }
}

export default PlayerPanelOptions;
