import React, { memo } from "react";

function InitialDetails ({ details, handleLoading }) {
  return (
    <>
      <h1>{details.title}</h1>
      <h2>{details.description}</h2>
      <button onClick={handleLoading}>{details.buttonText}</button>
    </>
  );
};

export const Details = memo(InitialDetails);