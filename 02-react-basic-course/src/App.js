import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/app.css";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList.jsx";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "description",
    },
    {
      id: 2,
      title: "Javascript 2",
      body: "description",
    },
    {
      id: 3,
      title: "Javascript 3",
      body: "description",
    },
  ]);

  const [title, setTitle] = useState("");
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <div className="App">
      <form>
        {/* керований компонент  */}
        <MyInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Назва посту" />
        <MyInput type="text" placeholder="Опис посту" />
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>

      <PostList posts={posts} title="Список Постів JS" />
    </div>
  );
}
