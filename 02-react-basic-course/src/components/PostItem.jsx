import React from "react";
import { MyButton } from "./UI/button/MyButton";

export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post--btns">
        <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
      </div>
    </div>
  );
};
