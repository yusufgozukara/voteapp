import React from "react";

const InvalidVote = () => {
  return (
    <div className="invalid">
      <p>Geçersiz Oy</p>
      <button className="invalidMinus">-</button>
      <button className="invalidPlus">+</button>
    </div>
  );
};

export default InvalidVote;
