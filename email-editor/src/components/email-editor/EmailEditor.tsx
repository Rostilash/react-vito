import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email-service";
import { useEditor } from "./useEditor";
import { Form } from "./form/Form";
import { createFormProps } from "./form/types";

export const EmailEditor = () => {
  const { text, applyFormat, updateSelection, setText, textRef } = useEditor();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess: () => {
      setText("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  return (
    <div>
      <h1>Email Editor</h1>
      {/* {text && <div className={styles.preview}>{parse(text)}</div>} */}

      <Form {...createFormProps} />
    </div>
  );
};
