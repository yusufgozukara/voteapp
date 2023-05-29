import React from "react";

const Card = ({ person }) => {
  const { id, name, image } = person;

  const increaseVote = () => {
    console.log("oyu artır");
  };

  const decreaseVote = () => {
    console.log("oyu azalt");
  };

  return (
    <>
      <div>
        <img src={image} alt="person_image" />
        <h1>{name}</h1>
        <h1>0</h1>
        <button onClick={increaseVote}> + </button>
        <button onClick={decreaseVote}> - </button>
      </div>
    </>
  );
};

export default Card;
