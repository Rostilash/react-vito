import React from "react";
import styles from "../EmailEditor.module.scss";
import { Bold, Eraser, Italic, Underline } from "lucide-react";

export const Form = ({ ...props }) => {
  return (
    <div className={styles.cart}>
      <textarea
        ref={props.textRef}
        className={styles.editor}
        spellCheck="false"
        onSelect={props.updateSelection}
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      >
        {props.text}
      </textarea>
      <div className={styles.actions}>
        <div className={styles.tools}>
          <button onClick={() => props.setText("Enter email...")}>
            <Eraser size={16} />
          </button>
          <button onClick={() => props.applyFormat("bold")}>
            <Bold size={16} />
          </button>
          <button onClick={() => props.applyFormat("italic")}>
            <Italic size={16} />
          </button>
          <button onClick={() => props.applyFormat("underline")}>
            <Underline size={16} />
          </button>
        </div>
        <button disabled={props.isPending} onClick={() => props.mutate()}>
          Send now
        </button>
      </div>
    </div>
  );
};
