import React, { useState, useRef } from "react";
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

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };
  return (
    <div className="App">
      <form>
        {/* керований компонент  */}
        <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type="text" placeholder="Назва посту" />
        {/* не керований компонент */}
        <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} type="text" placeholder="Опис посту" />

        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>

      <PostList posts={posts} title="Список Постів JS" />
    </div>
  );
}
