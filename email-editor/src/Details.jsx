import React from "react";

export const Details = ({ details, setDetails }) => {
  return (
    <div>
      <h1>{details.title}</h1>
      <h2>{ details.desctipion}</h2>
      <button onClick={() => setDetails(prev => {
        return {
          ...prev, title: prev.title + '.', desctipion: prev.desctipion + '/'
        }
      })}>{details.buttonText}</button>
    </div>
  );
};