import React, { useState, useRef } from "react";
import "./styles/app.css";
import { PostList } from "./components/PostList.jsx";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";

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
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // отримуємо пропс із дочірнього елемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {/* умовне відмальовування */}
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список Постів" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Пости не були знайдені!</h2>
      )}
    </div>
  );
}
