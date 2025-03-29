import logo from "/logo-name.svg";

export default function Header() {
  const now = new Date();
  const name = "value";
  return (
    <header>
      <img src={logo} alt={name}></img>
      {/* <h3> Rostik Dev</h3> */}
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  );
}
