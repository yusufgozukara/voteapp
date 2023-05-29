import React from "react";

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
    <>
      <div className="ustdiv">
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src={image}
          alt="person_image"
        />
        <h1>{name}</h1>
        <h1>{vote}</h1>
        <button onClick={increaseVote}> + </button>
        <button onClick={decreaseVote}> - </button>
      </div>
    </>
  );
};

export default Card;
