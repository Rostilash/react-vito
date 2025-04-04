import styles from "./EmailEditor.module.scss";
import { Bold, Eraser, Italic, Underline } from "lucide-react";
import { useState, useRef } from "react";
import { applyStyle, TStyle } from "./apply-style";
import parse from "html-react-parser";

export const EmailEditor = () => {
  const [text, setText] = useState(
    `At the Command Line With a simple but powerful shell script called todo.sh, you can interact with todo.txt at the command line for quick and easy, Unix-y access. The Todo.txt CLI supports archiving completed tasks to done.txt and priority/context tab autocompletion.`
  );

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };

  const applyFormat = (type: TStyle) => {
    const selectedText = text.substring(selectionStart, selectionEnd);
    if (!selectedText) return;

    const before = text.substring(0, selectionStart);
    const after = text.substring(selectionEnd);
    console.log(applyStyle(type, selectedText));
    setText(before + applyStyle(type, selectedText) + after);
  };

  // console.log(parse(text));

  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.preview}>{parse(text)}</div>
      <div className={styles.cart}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onSelect={updateSelection}
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
            <button onClick={() => applyFormat("bold")}>
              <Bold size={16} />
            </button>
            <button onClick={() => applyFormat("italic")}>
              <Italic size={16} />
            </button>
            <button onClick={() => applyFormat("underline")}>
              <Underline size={16} />
            </button>
          </div>
          <button> Send now </button>
        </div>
      </div>
    </div>
  );
};
