import React from "react";
import cl from "./MyModal.module.css";

export const MyModal = ({ children, visible, setVisible }) => {
  let rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      {/* stopPropagation() при натискані на блок по кліку не буде підтримувати setVisible - false */}
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
