import { useState, useEffect } from "react";
import "./Button.scss";

const classNames = require("classnames");

function Button({ selected, children, movieData, onClick }) {
  const btn = classNames("btn", {
    disabled: selected && children === "Nominate",
  });

  return (
    <button
      disabled={selected}
      type="button"
      className={btn}
      onClick={() => {
        onClick(movieData);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
