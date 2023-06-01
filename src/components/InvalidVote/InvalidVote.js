import React from "react";
import { useState } from "react";

const InvalidVote = ({ invalidVote, setInvalidVote }) => {
  // const zeroset = (diff) => {
  //   if (!(diff === -1)) {
  //   }
  // };

  return (
    <div className="invalid">
      <div className="invalidfirstdiv">
        <p>Geçersiz Oy</p>
      </div>

      <div className="invalidseconddiv">
        <button
          // onClick={() => setInvalidVote(invalidVote - 1)}
          onClick={() => {
            if (!(invalidVote === 0)) setInvalidVote(invalidVote - 1);
          }}
          className="invalidMinus"
        >
          -
        </button>

        <button
          onClick={() => setInvalidVote(invalidVote + 1)}
          className="invalidPlus"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InvalidVote;
