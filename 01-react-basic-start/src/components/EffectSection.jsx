import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Відкрити інформацію</Button>
      <Modal open={modal}>
        <h3>Що ми бачимо в нашому проекті</h3>
        <p>З величезної кількості інформації та навичок в IT, ви отримуєте тільки те, що необхідно та працює.</p>
        <Button onClick={() => setModal(false)}>Закрити</Button>
      </Modal>
    </section>
  );
}
