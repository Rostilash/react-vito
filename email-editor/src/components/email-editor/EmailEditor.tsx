import styles from "./EmailEditor.module.scss";
import { Bold, Eraser, Italic, Underline } from "lucide-react";
import { useState, useRef } from "react";
import { applyStyle, TStyle } from "./apply-style";

export const EmailEditor = () => {
  const [text, setText] =
    useState(`At the Command Line With a simple but powerful shell script called todo.sh, you can interact with todo.txt at the command line for quick and
          easy, Unix-y access. The Todo.txt CLI supports archiving completed tasks to done.txt and priority/context tab autocompletion.`);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const applyFormat = (type: TStyle) => {
    if (!textRef.current) return;
    const cursorStart = textRef.current?.selectionStart;
    const cursorEnd = textRef.current?.selectionEnd;

    const selectedText = text.substring(cursorStart, cursorEnd);
    if (!selectedText) return;

    const before = text.substring(0, cursorStart);
    const after = text.substring(cursorEnd);

    setText(before + applyFormat(type, selectedText) + after);
  };

  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.cart}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onClick={applyFormat}
          value={text}
          onChange={(e) => setText(e.target.value)}
        >
          {text}
        </textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText("")}>
              <Eraser size={16} />
            </button>
            <button>
              <Bold size={16} />
            </button>
            <button>
              <Italic size={16} />
            </button>
            <button>
              <Underline size={16} />
            </button>
          </div>
          <button> Send now </button>
        </div>
      </div>
    </div>
  );
};
