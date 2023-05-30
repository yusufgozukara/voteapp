import React from "react";
import "./Card.css";

const Card = ({ person, setPeople, people }) => {
  const { id, name, image, vote } = person;

  const increaseVote = (diff) => {
    let temp = people.map((vote) => {
      if (vote.id === person.id && !(diff === -1 && vote.vote === 0)) {
        vote.vote += diff;
      }
      return vote;
    });
    setPeople(temp);
  };

  return (
    <div className="ustdiv">
      <div className="divici">
        <img className="candidateImage" src={image} alt="person_image" />
        <p className="candidateName">{name}</p>
        <p className="voteBox">{vote}</p>
        <button className="plus" onClick={() => increaseVote(1)}>
          +
        </button>
        <button className="minus" onClick={() => increaseVote(-1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
