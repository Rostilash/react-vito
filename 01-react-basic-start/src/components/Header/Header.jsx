// import logo from "/logo-name.svg";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
// import "./Header.css";

const HeadContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("cleaning...");
    };
  }, []);

  return (
    <HeadContainer>
      {/* <img src={logo} alt={name}></img> */}
      <h3>Rostik Dev</h3>
      <span>Time now: {now.toLocaleTimeString()}</span>
    </HeadContainer>
  );
}
