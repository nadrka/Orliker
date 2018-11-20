import React, { Component } from "react";
import PanelOption from "./PanelOption/PanelOption";
import "./PlayerOptions.css";

class PanelOptions extends Component {
  state = {
    option: 0
  };
  render() {
    console.log(this.props.labels);
    console.log(this.props.options);
    console.log(this.props.fun);

    return (
      <div className="flex PlayerOptions">
        {this.props.labels.map((item, index) => (
          <PanelOption
            name={item}
            clicked={() => {
              this.setState({ option: index });
              this.props.fun(this.props.options[index]);
            }}
            key={item}
            isActive={this.state.option == index}
            howManyButtons={this.props.labels.length}
          />
        ))}
      </div>
    );
  }
}

export default PanelOptions;
