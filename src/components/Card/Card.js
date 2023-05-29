import React from "react";
import "./Card.css";

const Card = ({ person, vote, setVote }) => {
  const { id, name, image } = person;

  const increaseVote = () => {
    setVote((vote += 1));
  };

  const decreaseVote = () => {
    setVote((vote -= 1));
  };

  return (
    <div className="ustdiv">
      <div className="divici">
        <img className="candidateImage" src={image} alt="person_image" />
        <p className="candidateName">{name}</p>
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
