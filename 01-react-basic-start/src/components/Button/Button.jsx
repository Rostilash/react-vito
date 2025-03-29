import "./Button.css";

export default function Button({ children, onClick, isActive }) {
  // let calsses = "button";
  // if (isActive) classes += " acrive";
  return (
    <button className={isActive ? "button active" : "button"} onClick={onClick}>
      {children}
    </button>
  );
}
