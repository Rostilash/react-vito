import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/app.css";
import { PostItem } from "./components/PostItem";

export default function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "descripton",
    },
    {
      id: 2,
      title: "Javascript 2",
      body: "descripton",
    },
    {
      id: 3,
      title: "Javascript 3",
      body: "descripton",
    },
  ]);
  return (
    <div className="App">
      {post.map((post) => (
        <PostItem post={post} key={post.id}></PostItem>
      ))}
    </div>
  );
}
