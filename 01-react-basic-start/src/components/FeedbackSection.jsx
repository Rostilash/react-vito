import Button from "./Button/Button.jsx";
import { useState } from "react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function toggleError() {
    setHasError((prev) => !prev);
    setHasError((prev) => !prev);
  }

  return (
    <section>
      <h3> Зворотній зв'язок</h3>

      <Button onClick={toggleError}>Toggle Error</Button>
      <form>
        <label htmlFor="name"> Ваше Імя </label>
        <input
          type="text"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
        ></input>

        <label htmlFor="name"> Причина звернення </label>
        <select id="reason" className="control" value={reason} onChange={(event) => setReason(event.target.value)}>
          <option value="error">Помилка</option>
          <option value="help">Потрібна допомога</option>
          <option value="suggest">Пропозиція</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError}>
          Надіслати
        </Button>
      </form>
    </section>
  );
}
