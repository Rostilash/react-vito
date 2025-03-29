import "./Button.css";

export default function Button({ children, onClick }) {
  console.log("Button Render");
  return (
    <button className="button active" onClick={onClick}>
      {children}
    </button>
  );
}
