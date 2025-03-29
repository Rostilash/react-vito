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

  return (
    <div>
      <Header />

      <main>
        <section>
          <h3> Наш підхід до навчання </h3>

          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3> Що ми бачимо в нашому проекті </h3>
          <Button isActive={contentType === "way"} onClick={() => handleClick("way")}>
            Підхід
          </Button>
          <Button isActive={contentType === "easy"} onClick={() => handleClick("easy")}>
            Додаток
          </Button>
          <Button isActive={contentType === "program"} onClick={() => handleClick("program")}>
            Концепція
          </Button>

          {contentType ? <p>{differences[contentType]}</p> : <p>Натисни на кнопку</p>}

          {/* {!contentType && <p>Натисни на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>} */}
        </section>
      </main>
    </div>
  );
}
