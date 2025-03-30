import Button from "./Button/Button.jsx";
import { useState, useRef } from "react";

export default function FeedbackSection() {
  const [form, setForm] = useState({ name: "", hasError: false, reason: "Потрібна допомога" });

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  function StateVsRef() {
    const input = useRef(null);
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
      if (event.key === "Enter") {
        setShow(true);
      }
    }

    return (
      <div>
        <h3>Some text: {show && input.current ? input.current.value : ""}</h3>
        <input ref={input} type="text" onKeyDown={handleKeyDown} className="control" />
      </div>
    );
  }

  return (
    <section>
      <h3> Зворотній зв'язок</h3>
      <form>
        <label htmlFor="name"> Ваше Імя </label>
        <input
          type="text"
          className="control"
          value={form.name}
          onChange={handleNameChange}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
        ></input>

        <label htmlFor="name"> Причина звернення - "{form.reason}"</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}
        >
          <option value="Помилка">Помилка</option>
          <option value="Потрібна допомога">Потрібна допомога</option>
          <option value="Пропозиція">Пропозиція</option>
        </select>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError} style={{ marginBottom: "1rem" }}>
          Надіслати
        </Button>
      </form>
      <hr />
      <StateVsRef />
    </section>
  );
}
