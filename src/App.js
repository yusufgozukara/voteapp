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

  // const invalidPlus = () => {
  //   // let temp1 = setInvalidVote += invalidVote
  //   console.log("geçersiz arttı.");
  // };
  // const invalidMinus = () => {
  //   console.log("geçersiz azaldı.");
  // };

  return (
    <div className="general">
      <div className="cardContainer">
        {people.map((person) => (
          <Card people={people} setPeople={setPeople} person={person} />
        ))}
      </div>
      <InvalidVote
        invalidVote={invalidVote}
        setInvalidVote={setInvalidVote}
        // invalidPlus={invalidPlus} invalidMinus={invalidMinus}
      />
      <Results
        people={people}
        invalidVote={invalidVote}
        // invalidPlus={invalidPlus}
        // invalidMinus={invalidMinus}
      />
      <Schoolandbox />
      <button className="resetpage">Baştan Say</button>
    </div>
  );
}

export default App;
