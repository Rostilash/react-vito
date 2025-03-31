import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/app.css";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList.jsx";

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
  const [posts2, setPosts2] = useState([
    {
      id: 1,
      title: "Python",
      body: "description",
    },
    {
      id: 2,
      title: "Python 2",
      body: "description",
    },
    {
      id: 3,
      title: "Python 3",
      body: "description",
    },
  ]);
  return (
    <div className="App">
      <PostList posts={posts} title="Список Постів JS" />
      <PostList posts={posts2} title="Список Постів Python" />
    </div>
  );
}
