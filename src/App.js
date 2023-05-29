import "./App.css";
import Card from "./components/Card";
import persons from "./person.json";
import { useState } from "react";

function App() {
  const [vote, setVote] = useState(0);

  return (
    <div>
      {persons.map((person) => (
        <Card vote={vote} setVote={setVote} person={person} />
      ))}
    </div>
  );
}

export default App;
