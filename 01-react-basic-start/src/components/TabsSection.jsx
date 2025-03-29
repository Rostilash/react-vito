import Button from "./Button/Button.jsx";
export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Головна
      </Button>
      <Button isActive={active === "feedback"} onClick={() => onChange("feedback")}>
        Зворотній зв'язок
      </Button>
    </section>
  );
}
