import "./App.css";
import Card from "./components/Card/Card";
import InvalidVote from "./components/InvalidVote/InvalidVote";
import Results from "./components/Results/Results";
import Schoolandbox from "./components/Schoolandbox/Schoolandbox";
import persons from "./person.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(
    persons.map((person) => {
      return { ...person, vote: 0 };
    })
  );
  const [invalidVote, setInvalidVote] = useState(0);

  const resetPage = () => {
    alert("Baştan saymak için emin misiniz?");
    setInvalidVote(0);
  };

  return (
    <div className="general">
      <div className="cardContainer">
        {people.map((person) => (
          <Card people={people} setPeople={setPeople} person={person} />
        ))}
      </div>
      <InvalidVote invalidVote={invalidVote} setInvalidVote={setInvalidVote} />
      <Results people={people} invalidVote={invalidVote} />
      <Schoolandbox />
      <button onClick={() => resetPage()} className="resetpage">
        Baştan Say
      </button>
    </div>
  );
}

export default App;
