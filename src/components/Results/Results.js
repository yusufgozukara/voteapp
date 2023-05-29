import React from "react";
import "./Results.css";

const Results = ({ result }) => {
  const { title, img } = result;
  return (
    <div className="resultdiv">
      <p className="resultIcon">{img}</p>
      <p className="resultTitle">{title}</p>
      <p className="resultNumber">0</p>
    </div>
  );
};

export default Results;
