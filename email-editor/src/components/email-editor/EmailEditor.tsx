import styles from "./EmailEditor.module.scss";
import { Bold, Eraser, Italic, Underline } from "lucide-react";
import { useState, useRef } from "react";
import { applyStyle, TStyle } from "./apply-style";
import parse from "html-react-parser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email-sevice";

export const EmailEditor = () => {
  const [text, setText] = useState("");

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess: () => {
      setText("");
      queryClient.refetchQueries(["email list"]);
    },
  });

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

  return (
    <div>
      <h1>Email Editor</h1>
      {text && <div className={styles.preview}>{parse(text)}</div>}

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
            <button onClick={() => setText("Enter email...")}>
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
          <button disabled={isPending} onClick={() => mutate()}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
};
