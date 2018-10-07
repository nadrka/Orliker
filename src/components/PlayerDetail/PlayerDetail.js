import React from "react";
import "./PlayerDetail.css";

const playerDetail = props => {
  let detail = (
    <div className="PlayerDetail">
      <div className="LabelTitle">
        <label>{props.name}</label>
      </div>
      <div className="LabelValue">
        <label>{props.value}</label>
      </div>
    </div>
  );

  return <div>{detail}</div>;
};

export default playerDetail;
