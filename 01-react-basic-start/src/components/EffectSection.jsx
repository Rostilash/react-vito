import { useState, useEffect, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useinput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: "1rem" }} onClick={() => setModal(true)}>
        Відкрити інформацію
      </Button>
      <Modal open={modal}>
        <h3>Що ми бачимо в нашому проекті</h3>
        <p>З величезної кількості інформації та навичок в IT, ви отримуєте тільки те, що необхідно та працює.</p>
        <Button onClick={() => setModal(false)}>Закрити</Button>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input className="control" type="text" {...input}></input>
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
