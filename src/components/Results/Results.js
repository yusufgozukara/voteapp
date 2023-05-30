import React, { useEffect, useState } from "react";
import "./Results.css";

const Results = ({ people }) => {
  // const { title, img } = result;
  let [validVotes, setValidVotes] = useState(0);

  useEffect(() => {
    let total = 0;
    people.forEach((element) => {
      total += element.vote;
    });
    setValidVotes(total);
  });
  return (
    <div className="resultdiv">
      <p className="resultIcon">toplam</p>
      <p className="resultTitle">Geçerli Oy</p>
      <p className="resultNumber">{validVotes}</p>
    </div>
  );
};

export default Results;
