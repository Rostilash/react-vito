import React, { useState, useRef } from "react";
import "./styles/app.css";
import { PostList } from "./components/PostList.jsx";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "CJavascript",
      body: "sdescription",
    },
    {
      id: 2,
      title: "BJavascript 2",
      body: "vdescription",
    },
    {
      id: 3,
      title: "AJavascript 3",
      body: "adescription",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // отримуємо пропс із дочірнього елемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "1rem" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортування"
          options={[
            { value: "title", name: "По назві" },
            { value: "body", name: "По опису" },
          ]}
        />
      </div>
      {/* умовне відмальовування */}
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список Постів" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Пости не були знайдені!</h2>
      )}
    </div>
  );
}
