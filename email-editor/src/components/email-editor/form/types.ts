import { RefObject } from "react";

interface FormProps {
  textRef: RefObject<HTMLTextAreaElement>;
  updateSelection: () => void;
  text: string;
  mutate: () => void;
  setText: (text: string) => void;
  applyFormat: () => void;
  isPending: boolean;
}

export const createFormProps = (params: FormProps) => params;
