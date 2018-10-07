import React from "react";
import Aux from "../../../hoc/Aux";

import "./Input.css";

const input = props => {
  let inputElement = null;
  const inputClasses = ["InputElement"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <div className="SelectField">
          <label
            style={{
              marginRight: "15px"
            }}
          >
            {props.elementConfig.label}
          </label>
          <select>
            className=
            {inputClasses.join(" ")}
            {props.elementConfig.options.map(option => (
              <option
                key={option.value}
                value={option.value}
                // onChange={props.changed}
              >
                {option.displayValue}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
