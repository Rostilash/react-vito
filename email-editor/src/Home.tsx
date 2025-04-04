import React from "react";
import { EmailEditor } from "./components/email-editor/EmailEditor";
import { EmailList } from "./components/email-list/EmailList";
import style from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={style.home}>
      <EmailEditor />
      <EmailList />
    </div>
  );
};
