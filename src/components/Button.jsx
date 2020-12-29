import "./Button.scss";
const classNames = require("classnames");

function Button({ children, selected }) {
  const btn = classNames("btn", { "btn--selected": selected });

  return (
    <button type="button" className={btn}>
      {children}
    </button>
  );
}

export default Button;
