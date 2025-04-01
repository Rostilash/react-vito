import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Пости не були знайдені!</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id}></PostItem>
      ))}
    </div>
  );
};
