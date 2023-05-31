import React from "react";
import { useState } from "react";

const InvalidVote = () => {
  const [invalidVote, setInvalidVote] = useState(0);

  const invalidPlus = () => {
    console.log("geçersiz arttı.");
  };
  const invalidMinus = () => {
    console.log("geçersiz azaldı.");
  };

  return (
    <div className="invalid">
      <div className="invalidfirstdiv">
        <p>Geçersiz Oy</p>
      </div>
      <div className="invalidseconddiv">
        <button onClick={() => invalidMinus()} className="invalidMinus">
          -
        </button>
        <button onClick={() => invalidPlus()} className="invalidPlus">
          +
        </button>
      </div>
    </div>
  );
};

export default InvalidVote;
