import React, { memo } from "react";
import { IDetails } from "./type";

interface Props {
  details: IDetails;
  handleLoading: () => void;
}

function InitialDetails({ details, handleLoading }: Props) {
  return (
    <>
      <h1>{details.title}</h1>
      <h2>{details.description}</h2>
      <button onClick={handleLoading}>{details.buttonText}</button>
    </>
  );
}

export const Details = memo(InitialDetails);
