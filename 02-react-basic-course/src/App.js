import React, { useState, useMemo } from "react";
import "./styles/app.css";
import { PostList } from "./components/PostList.jsx";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";

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
  const [modal, setModal] = useState(false);

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
    setModal(false);
  };

  // отримуємо пропс із дочірнього елемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "20px" }}
        onClick={() => {
          setModal(true);
        }}
      >
        Створити користувача
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "1rem" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постів" />
    </div>
  );
}
