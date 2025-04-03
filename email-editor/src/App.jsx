import "./App.scss";
import { Details } from "./Details.jsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const App = () => {
  const [details, setDetails] = useState({
    isLoading: false,
    title: "Hello World",
    description: "Some info for description",
    buttonText: "Click",
  });

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(10);
  
  const result = useMemo(() => {
    return count * multiplier;
  }, [count, multiplier])

  const handleLoading = useCallback(() => {
    setDetails((prev) => ({ ...prev, isLoading: !prev.isLoading }));
  }, []);

  return (
    <>
      <div className="layout">
        <img
          src="/envelope.png"
          alt="Конверт"
          style={{ width: "200px", height: "200px" }}
        />

        <div>Результат: {result} </div>
        
        <button onClick={()=>setCount(count + 1)}>Increse</button>
        <button onClick={()=>setCount(count - 1)}>Decrese</button>

        {details.isLoading
          && <p style={{ color: "white" }}>Loading...</p>
        }
        
        <Details details={details} handleLoading={handleLoading} />
      </div>
    </>
  );
};
