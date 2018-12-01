import React from "react";
import "./PositionHeader.css";
const positionHeader = props => {
  return (
    <div className="PositionHeader">
      <div>{props.position}</div>
    </div>
  );
};

export default positionHeader;
