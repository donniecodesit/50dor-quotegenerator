import React from "react";

export default function Buttons(props) {
  return (
    <div className="buttons">
      <button
        id={props.id}
        onClick={props.handleClick}
        className="button"
        style={{ color: "white", backgroundColor: props.color }}
      >
        New Quote
      </button>
    </div>
  );
}
