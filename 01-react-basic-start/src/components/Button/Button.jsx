import "./Button.css";

export default function Button({ children }) {
  function handleClick() {
    console.log("button clicked");
  }
  function handleMouseEnter() {
    console.log("Enter");
  }
  return (
    <button className="button" onClick={handleClick} onMouseEnter={handleMouseEnter}>
      {children}
    </button>
  );
}
