import React from "react";
import classes from "./PanelOption.css";
import { truncateSync } from "fs";
const panelOption = props => {
  const style = props.isActive ? "ActiveOption" : "Option";
  return (
    <div
      className={style}
      onClick={() => props.clicked(props.option)}
      style={{ width: `${(100 - 10) / props.howManyButtons}%` }}
    >
      <span>{props.name}</span>
    </div>
  );
};

export default panelOption;
