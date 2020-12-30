import "./Button.scss";
const classNames = require("classnames");

function Button({ key, children, selected, movieData, onClick }) {
  const btn = classNames("btn", { "btn--selected": selected });

  return (
    <button
      type="button"
      className={btn}
      onClick={() => onClick(movieData, key)}
    >
      {children}
    </button>
  );
}

export default Button;
