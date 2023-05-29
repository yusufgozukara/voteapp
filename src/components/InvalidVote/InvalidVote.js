import React from "react";

const InvalidVote = () => {
  return (
    <div className="invalid">
      <div className="invalidfirstdiv">
        <p>Geçersiz Oy</p>
      </div>
      <div className="invalidseconddiv">
        <button className="invalidMinus">-</button>
        <button className="invalidPlus">+</button>
      </div>
    </div>
  );
};

export default InvalidVote;
