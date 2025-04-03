import "./App.scss";
import { Details } from "./Details.jsx";
import { useState } from 'react';

export const App = () => {
  const [details, setDetails] = useState({
    title: 'null',
    desctipion: 'Hello world',
    buttonText: 'Click',
  })

  return (
    <>
      <div className="layout">
        <img src="/envelope.png" alt="Конверт" style={{ width: "200px", height: "200px" }} />

        <Details details={details} setDetails={setDetails} />
      </div>
    </>
  );
};
