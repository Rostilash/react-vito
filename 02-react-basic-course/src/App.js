import React, { useState, useMemo } from "react";
import "./styles/app.css";
import { PostList } from "./components/PostList.jsx";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";
import { PostFilter } from "./components/PostFilter";

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
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Working...");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

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
      <hr style={{ margin: "1rem" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {/* умовне відмальовування */}
      {sortedAndSearchedPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постів" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Пости не були знайдені!</h2>
      )}
    </div>
  );
}
