import React, { useState, useEffect } from "react";
import "./styles/app.css";
import { PostList } from "./components/PostList.jsx";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts.js";
import PostService from "./components/API/PostService.jsx";
import { Loader } from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching.js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // отримуємо props із дочірнього елемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
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
      {postError && <h1>Відбулася помилка {postError}</h1>}
      {isPostsLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Loader />
        </div>
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постів" />
      )}
    </div>
  );
}
