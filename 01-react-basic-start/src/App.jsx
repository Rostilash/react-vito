import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways, differences } from "./data.js";
import { useState } from "react";
import Button from "./components/Button/Button.jsx";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  let tabContent = 0;
  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>;
  } else {
    tabContent = <p>Натисни на кнопку</p>;
  }

  return (
    <div>
      <Header />

      <main>
        <section>
          <h3> Наш підхід до навчання </h3>

          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3> Що ми бачимо в нашому проекті </h3>
          <Button onClick={() => handleClick("way")}> Підхід </Button>
          <Button onClick={() => handleClick("easy")}> Додаток </Button>
          <Button onClick={() => handleClick("program")}> Концепція </Button>

          {/* {contentType ? <p>{differences[contentType]}</p> : <p>Натисни на кнопку</p>} */}

          {/* {!contentType && <p>Натисни на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}
