import Header from "./components/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import TeachingSectionTwo from "./components/TeachingSectionTwo.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <TeachingSection />
        <TeachingSectionTwo />
      </main>
    </div>
  );
}
