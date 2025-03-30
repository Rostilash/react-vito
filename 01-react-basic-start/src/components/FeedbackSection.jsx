import Button from "./Button/Button.jsx";
import { useState } from "react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <h3> Зворотній зв'язок</h3>
      <form>
        <label htmlFor="name"> Ваше Імя </label>
        <input type="text" className="control" value={name} onChange={handleNameChange}></input>

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

        <Button> Надіслати </Button>
      </form>
    </section>
  );
}
