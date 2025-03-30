import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import TeachingSectionTwo from "./components/TeachingSectionTwo.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import EffectSection from "./components/EffectSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");

  setTimeout(() => {
    setVisible(false);
  }, 10000);
  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <TeachingSectionTwo />
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
