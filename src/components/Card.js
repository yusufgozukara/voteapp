import React from "react";
import "./Card.css";

const Card = ({ person, vote, setVote }) => {
  const { id, name, image } = person;

  const increaseVote = () => {
    setVote((vote += 1));
    console.log(setVote);
  };

  const decreaseVote = () => {
    setVote((vote -= 1));
  };

  return (
    <div className="ustdiv">
      <div className="divici">
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src={image}
          alt="person_image"
        />
        <h1>{name}</h1>
        <p className="voteBox">{vote}</p>
        <button className="plus" onClick={increaseVote}>
          +
        </button>
        <button className="minus" onClick={decreaseVote}>
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
