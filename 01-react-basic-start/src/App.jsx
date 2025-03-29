import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways } from "./data.js";
import Button from "./components/Button/Button.jsx";
export default function App() {
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
          <Button> Підхід</Button>
          <Button> Концепція </Button>
        </section>
      </main>
    </div>
  );
}
