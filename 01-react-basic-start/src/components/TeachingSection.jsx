import WayToTeach from "./WayToTeach.jsx";
import { ways } from "../data.js";

export default function TeachingSection() {
  return (
    <section>
      <h3> Наш підхід до навчання </h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
