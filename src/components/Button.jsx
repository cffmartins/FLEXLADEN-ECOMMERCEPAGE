// importing necessary styles
import "../styles/button/button.scss";

// button with children and onClick props
function Button({ children, onClick, type = "button" }) {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
export default Button;
