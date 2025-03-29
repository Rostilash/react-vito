import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways } from "./data.js";
import { useState } from "react";
import Button from "./components/Button/Button.jsx";

export default function App() {
  const [content, setContent] = useState("Натисни на кнопку.");
  console.log("App Component Render");
  // let content = "Натисни на кнопку.";

  function handleClick(type) {
    console.log("butoton clicked", type);
    setContent(type);
    // content = type;
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
          <Button onClick={() => handleClick("ease")}> Додаток </Button>
          <Button onClick={() => handleClick("program")}> Концепція </Button>
          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}
