import React, { useMemo } from "react";
import { getPagesArray } from "../../../utils/pages";

export const Pagination = ({ totalPages, page, changePage }) => {
  //useMemo must be fixed  to many arrays on render
  const pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages]);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span onClick={() => changePage(p)} key={p} className={page === p ? "page page__current" : "page"}>
          {p}
        </span>
      ))}
    </div>
  );
};
