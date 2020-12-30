import "./Button.scss";
const classNames = require("classnames");

function Button({ disabled, children, movieData, onClick }) {
  const btn = classNames("btn" /*, { "btn--disabled": selected }*/);

  return (
    <button
      type="button"
      className={btn}
      onClick={() => onClick(movieData)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
