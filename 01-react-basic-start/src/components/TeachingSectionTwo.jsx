import Button from "./Button/Button.jsx";
import { useState } from "react";
import { differences } from "../data.js";

export default function TeachingSectionTwo() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
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
  );
}
