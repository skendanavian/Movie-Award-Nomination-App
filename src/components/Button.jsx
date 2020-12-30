import { useState, useEffect } from "react";
import "./Button.scss";

const classNames = require("classnames");

function Button({ selected, children, nominees, movieData, onClick }) {
  // const [selected, setSelected] = useState(false);
  const btn = classNames("btn", {
    disabled: selected && children === "Nominate",
  });

  // useEffect(() => {
  //   if (children === "Nominate" && nominees !== undefined) {
  //     nominees.forEach((item) => {
  //       if (item.title === movieData.Title) {
  //         setSelected(true);
  //       } else {
  //         setSelected(false);
  //       }
  //     });
  //   }
  // }, [movieData, nominees]);

  // const toggleButton = () => {
  //   !selected ? setSelected(true) : setSelected(false);
  // };

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
