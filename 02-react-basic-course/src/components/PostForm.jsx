import React, { useState } from "react";
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form>
        {/* керований компонент  */}
        <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type="text" placeholder="Назва посту" />
        {/* не керований компонент */}
        <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} type="text" placeholder="Опис посту" />

        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>
    </div>
  );
};
