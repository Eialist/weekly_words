import { useState } from "react";
import { useGet } from "../hooksAndUtils/useFetch.js";

export const YearFourPage = () => {
  const [words, setWords] = useState([]);

  useGet("/api/year4/", setWords);
  return (
    <div>
      {words.map((word) => (
        <div key={word._id}>
          <p>{word.en}</p>
          <p>{word.sv}</p>
        </div>
      ))}
    </div>
  );
};
