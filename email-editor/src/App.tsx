import "./App.scss";
import { useEffect, useState } from "react";
// import { useAuth } from "./hooks/useAuth.js";
import { Link, useNavigate } from "react-router-dom";
import { ITodo } from "./type";

export const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  // const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <>
      <div className="layout">
        <Link to="/about-us">Go to about-us</Link>
        <img src="/envelope.png" style={{ width: "50px", height: "50px" }} />

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}> {todo.title}</li>
          ))}
        </ul>
      </div>

      {/* <button onClick={() => setIsLoggedIn(false)}>Quit</button>
      <button onClick={() => setIsLoggedIn(true)}>Log In</button> */}
    </>
  );
};
