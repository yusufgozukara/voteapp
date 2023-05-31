import React, { useEffect, useState } from "react";
import "./Results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Results = ({ people, invalidPlus, invalidMinus, invalidVote }) => {
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
    <>
      <div className="resultdiv">
        <p className="resultIcon">
          <FontAwesomeIcon icon={faX} />
        </p>
        <p className="resultTitle">Geçersiz Oy</p>
        <p className="resultNumber">{invalidVote}</p>
      </div>
      <div className="resultdiv">
        <p className="resultIcon">
          <FontAwesomeIcon icon={faCheck} />
        </p>
        <p className="resultTitle">Geçerli Oy</p>
        <p className="resultNumber">{validVotes}</p>
      </div>
      <div className="resultdiv">
        <p className="resultIcon">
          <FontAwesomeIcon icon={faEnvelope} />
        </p>
        <p className="resultTitle">Toplam</p>
        <p className="resultNumber">{validVotes}</p>
      </div>
    </>
  );
};

export default Results;
