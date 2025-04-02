import React, { useState, useEffect } from "react";
import "./../styles/app.css";
import { PostList } from "./../components/PostList.jsx";
import { MyButton } from "./../components/UI/button/MyButton";
import { PostForm } from "./../components/PostForm";
import { PostFilter } from "./../components/PostFilter";
import { MyModal } from "./../components/UI/MyModal/MyModal";
import { usePosts } from "./../hooks/usePosts.js";
import PostService from "./../API/PostService.jsx";
import { Loader } from "./../components/UI/Loader/Loader";
import { useFetching } from "./../hooks/useFetching.js";
import { getPageCount } from "./../utils/pages";
import { Pagination } from "./../components/UI/pagination/Pagination.jsx";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // отримуємо props із дочірнього елемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "20px" }}
        onClick={() => {
          setModal(true);
        }}
      >
        Створити пост
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
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}
