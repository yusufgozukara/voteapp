import "./App.css";
import Card from "./components/Card/Card";
import InvalidVote from "./components/InvalidVote/InvalidVote";
import Results from "./components/Results/Results";
import persons from "./person.json";
import { useEffect, useState } from "react";
import results from "./results.json";

function App() {
  const [people, setPeople] = useState(
    persons.map((person) => {
      return { ...person, vote: 0 };
    })
  );

  return (
    <div className="general">
      <div className="cardContainer">
        {people.map((person) => (
          <Card people={people} setPeople={setPeople} person={person} />
        ))}
      </div>
      <InvalidVote />

      {/* {results.map((result) => ( */}
      <Results /*result={result}*/ people={people} />
      {/* // ))} */}
    </div>
  );
}

export default App;
