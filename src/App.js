import "./App.css";
import Card from "./components/Card";
import persons from "./person.json";

function App() {
  return (
    <div>
      {persons.map((person) => (
        <Card person={person} />
      ))}
    </div>
  );
}

export default App;
