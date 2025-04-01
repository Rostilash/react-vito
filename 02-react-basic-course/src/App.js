import React, { useState, useMemo } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    // console.log("Working...");
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // отримуємо пропс із дочірнього елемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "1rem" }} />
      <div>
        <MyInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Пошук..." />
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
      {sortedAndSearchedPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постів" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Пости не були знайдені!</h2>
      )}
    </div>
  );
}
