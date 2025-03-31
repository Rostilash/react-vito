import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";

export default function App() {
  const [value, setValue] = useState("test input");

  return (
    <div className="App">
      <Counter />
      <Counter />
      <ClassCounter />
    </div>
  );
}
