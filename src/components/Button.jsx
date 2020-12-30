import "./Button.scss";
const classNames = require("classnames");

function Button({ key, children, selected, movieData, onClick }) {
  const btn = classNames("btn", { "btn--selected": selected });
  console.log(key);
  return (
    <button type="button" className={btn} onClick={() => onClick(movieData)}>
      {children}
    </button>
  );
}

export default Button;
