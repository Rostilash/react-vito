import React from "react";
import style from "./EmailList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { emailService } from "../../services/email-service";
import parse from "html-react-parser";

export const EmailList = () => {
  const { data } = useQuery({
    queryKey: ["email list"],
    queryFn: () => emailService.getEmails(),
  });
  const random = Math.floor(Math.random() * 20);

  return (
    <div className={style.list}>
      {data?.map((email, index) => (
        <div key={index}>{typeof email.text === "string" ? parse(email.text) : null}</div>
      ))}
    </div>
  );
};
