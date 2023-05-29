import "./App.css";
import Card from "./components/Card/Card";
import InvalidVote from "./components/InvalidVote/InvalidVote";
import Results from "./components/Results/Results";
import persons from "./person.json";
import { useState } from "react";
import results from "./results.json";

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

      {results.map((result) => (
        <Results result={result} />
      ))}
    </div>
  );
}

export default App;
