import "./App.css";
import Card from "./components/Card/Card";
import InvalidVote from "./components/InvalidVote/InvalidVote";
import persons from "./person.json";
import { useState } from "react";

function App() {
  const [vote, setVote] = useState(0);

  return (
    <div className="general">
      <div className="cardContainer">
        {persons.map((person) => (
          <Card vote={vote} setVote={setVote} person={person} />
        ))}
      </div>
      <InvalidVote />
    </div>
  );
}

export default App;
